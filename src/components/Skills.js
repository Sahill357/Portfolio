import React, { useState, useMemo } from "react";
import { BootstrapIcon } from "./BrandIcons";
import "../styles/skills.css";

const skillsData = [
  {
    id: "languages",
    category: "Languages",
    group: "frontend-lang",
    icon: "fas fa-code",
    color: "#FFD15C",
    tint: "rgba(255, 209, 92, 0.12)",
    skills: [
      { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
      { name: "TypeScript", icon: "fas fa-code", color: "#3178C6" },
    ],
  },
  {
    id: "frontend",
    category: "Frontend",
    group: "frontend-lang",
    icon: "fas fa-laptop-code",
    color: "#8B5CF6",
    tint: "rgba(139, 92, 246, 0.12)",
    skills: [
      { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Next.js", icon: "fas fa-bolt", color: "#FFFFFF" },
      { name: "Redux", icon: "fas fa-layer-group", color: "#764ABC" },
      { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
      { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
      { name: "Bootstrap", customIcon: BootstrapIcon, color: "#7952B3" },
      { name: "TailwindCSS", icon: "fas fa-wind", color: "#38BDF8" },
      { name: "React Native", icon: "fab fa-react", color: "#61DAFB" },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    group: "backend-db",
    icon: "fas fa-server",
    color: "#FF4C60",
    tint: "rgba(255, 76, 96, 0.12)",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
      { name: "Express.js", icon: "fas fa-server", color: "#FFFFFF" },
      { name: "REST APIs", icon: "fas fa-network-wired", color: "#FFD15C" },
      { name: "Microservices", icon: "fas fa-cubes", color: "#FF4C60" },
      { name: "Modular Monolith", icon: "fas fa-cube", color: "#6C6CE5" },
    ],
  },
  {
    id: "databases",
    category: "Databases",
    group: "backend-db",
    icon: "fas fa-database",
    color: "#38BDF8",
    tint: "rgba(56, 189, 248, 0.12)",
    skills: [
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
      { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
      { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
      { name: "Redis", icon: "fas fa-bolt", color: "#DC382D" },
    ],
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    group: "cloud-sec",
    icon: "fas fa-cloud",
    color: "#44D7B6",
    tint: "rgba(68, 215, 182, 0.12)",
    skills: [
      { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
      { name: "GCP", icon: "fab fa-google", color: "#4285F4" },
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      { name: "CI/CD", icon: "fas fa-sync-alt", color: "#44D7B6" },
      { name: "Load Balancing", icon: "fas fa-balance-scale", color: "#FFD15C" },
      { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326CE5" },
      { name: "Nginx", icon: "fas fa-server", color: "#009639" },
    ],
  },
  {
    id: "security",
    category: "Security",
    group: "cloud-sec",
    icon: "fas fa-shield-alt",
    color: "#F43F5E",
    tint: "rgba(244, 63, 94, 0.12)",
    skills: [
      { name: "JWT", icon: "fas fa-key", color: "#6C6CE5" },
      { name: "OAuth2.0", icon: "fas fa-user-shield", color: "#FFD15C" },
      { name: "RBAC", icon: "fas fa-users-cog", color: "#FF4C60" },
      { name: "Network Firewalls", icon: "fas fa-shield-alt", color: "#EF4444" },
      { name: "SSL/TLS", icon: "fas fa-lock", color: "#10B981" },
    ],
  },
];

const filterGroups = [
  { id: "all", label: "All Skills", count: 31 },
  { id: "backend-db", label: "Backend & Databases", count: 9 },
  { id: "cloud-sec", label: "Cloud & Security", count: 12 },
  { id: "frontend-lang", label: "Frontend & Languages", count: 10 },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'matrix'

  // Filter categories based on group and search query
  const filteredCategories = useMemo(() => {
    return skillsData
      .filter((cat) => {
        if (activeFilter === "all") return true;
        return cat.group === activeFilter;
      })
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase().trim();
        const matchesCategory = cat.category.toLowerCase().includes(q);
        const matchedSkills = cat.skills.filter((s) =>
          s.name.toLowerCase().includes(q)
        );

        if (matchesCategory || matchedSkills.length > 0) {
          return {
            ...cat,
            // If category matches by name, keep all skills, otherwise show matched skills
            skills: matchesCategory ? cat.skills : matchedSkills,
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [activeFilter, searchQuery]);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Title */}
        <h2
          className="section-title wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          Skills
        </h2>
        <div className="spacer" data-height={60} style={{ height: 60 }} />

        <div className="skills-wrapper">
          {/* Controls Bar: Filters, Search & View Switcher */}
          <div
            className="skills-controls wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            {/* Filter Tabs */}
            <div className="skills-filter-group">
              {filterGroups.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`skills-filter-btn ${
                    activeFilter === filter.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                  <span className="skills-filter-count">{filter.count}</span>
                </button>
              ))}
            </div>

            {/* Right Actions: Search + View Mode Switcher */}
            <div className="skills-right-actions">
              <div className="skills-search-wrapper">
                <input
                  type="text"
                  className="skills-search-input"
                  placeholder="Search skills (e.g. Redis, AWS, Docker)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search" />
              </div>

              {/* View Switcher: Grid vs Matrix (Photo Layout) */}
              <div className="skills-view-toggle">
                <button
                  type="button"
                  className={`skills-view-btn ${
                    viewMode === "grid" ? "active" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                  title="Card Grid View"
                >
                  <i className="fas fa-th-large" /> Grid
                </button>
                <button
                  type="button"
                  className={`skills-view-btn ${
                    viewMode === "matrix" ? "active" : ""
                  }`}
                  onClick={() => setViewMode("matrix")}
                  title="Photo Matrix View"
                >
                  <i className="fas fa-bars" /> List
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
              VIEW 1: CARDS GRID VIEW
              ========================================================= */}
          {viewMode === "grid" && (
            <div className="row skills-grid-row">
              {filteredCategories.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <p style={{ color: "#9c9ab3", fontSize: "16px" }}>
                    No skills found matching "
                    <strong className="text-white">{searchQuery}</strong>".
                  </p>
                </div>
              ) : (
                filteredCategories.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className="col-lg-6 col-md-12 mb-4 wow fadeInUp"
                    data-wow-delay={`${idx * 80}ms`}
                    style={{
                      visibility: "visible",
                      animationDelay: `${idx * 80}ms`,
                      animationName: "fadeInUp",
                    }}
                  >
                    <div
                      className="skill-card"
                      style={{
                        "--card-accent": cat.color,
                        "--card-tint": cat.tint,
                      }}
                    >
                      {/* Card Header */}
                      <div className="skill-card-header">
                        <div className="skill-card-title-group">
                          <div className="skill-card-icon-box">
                            {cat.customIcon ? (
                              <cat.customIcon size={18} color={cat.color} />
                            ) : (
                              <i className={cat.icon} />
                            )}
                          </div>
                          <div>
                            <h3 className="skill-card-title">{cat.category}</h3>
                          </div>
                        </div>
                        <span className="skill-card-count">
                          {cat.skills.length}{" "}
                          {cat.skills.length === 1 ? "skill" : "skills"}
                        </span>
                      </div>

                      {/* Skills Chips */}
                      <div className="skill-chips-container">
                        {cat.skills.map((skill) => {
                          const isMatch =
                            searchQuery.trim().length > 0 &&
                            skill.name
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase().trim());
                          return (
                            <span
                              key={skill.name}
                              className={`skill-chip ${
                                isMatch ? "highlighted" : ""
                              }`}
                              style={{ "--chip-accent": cat.color }}
                            >
                              {skill.customIcon ? (
                                <skill.customIcon size={14} color={skill.color} />
                              ) : (
                                <i
                                  className={skill.icon}
                                  style={{ color: skill.color }}
                                />
                              )}
                              {skill.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* =========================================================
              VIEW 2: STRUCTURED MATRIX LIST VIEW (Directly from Photo)
              ========================================================= */}
          {viewMode === "matrix" && (
            <div
              className="skills-matrix-card wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              {/* Header Bar matching the photo's underlined header */}
              <div className="skills-matrix-header-bar">
                <h3 className="skills-matrix-title">SKILLS</h3>
                <span className="skills-matrix-subtitle">
                  Categorized Competencies & Tech Stack
                </span>
              </div>

              {/* Categorized Rows matching the photo layout */}
              <div className="skills-matrix-list">
                {filteredCategories.length === 0 ? (
                  <div className="text-center py-4">
                    <p style={{ color: "#9c9ab3", fontSize: "15px" }}>
                      No skills found matching "
                      <strong className="text-white">{searchQuery}</strong>".
                    </p>
                  </div>
                ) : (
                  filteredCategories.map((cat) => (
                    <div
                      key={cat.id}
                      className="skills-matrix-row"
                      style={{
                        "--cat-color": cat.color,
                        "--cat-tint": cat.tint,
                      }}
                    >
                      {/* Left: Category Label & Icon */}
                      <div className="skills-matrix-category">
                        <div className="skills-matrix-cat-icon">
                          {cat.customIcon ? (
                            <cat.customIcon size={14} color={cat.color} />
                          ) : (
                            <i className={cat.icon} />
                          )}
                        </div>
                        <span className="skills-matrix-cat-name">
                          {cat.category}
                        </span>
                      </div>

                      {/* Right: Skills Chips */}
                      <div className="skills-matrix-items">
                        {cat.skills.map((skill) => {
                          const isMatch =
                            searchQuery.trim().length > 0 &&
                            skill.name
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase().trim());
                          return (
                            <span
                              key={skill.name}
                              className={`skills-matrix-tag ${
                                isMatch ? "highlighted" : ""
                              }`}
                              style={{ "--tag-color": cat.color }}
                            >
                              {skill.customIcon ? (
                                <skill.customIcon size={14} color={skill.color} />
                              ) : (
                                <i
                                  className={skill.icon}
                                  style={{ color: skill.color }}
                                />
                              )}
                              {skill.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* View Mode End */}
        </div>

        {/* Spacer before next section */}
        <div className="spacer" data-height={0} style={{ height: 0 }} />
      </div>
    </section>
  );
}
