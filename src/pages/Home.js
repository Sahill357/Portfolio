import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "../components/Skills";


// Helper: load an external script and resolve when ready
function loadScript(src) {
  return new Promise((resolve) => {
    // If already loaded, resolve immediately
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = resolve; // resolve anyway so chain continues
    document.body.appendChild(script);
  });
}
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Load scripts in order, then initialize everything
    const scripts = [
      "assets/js/jquery-1.12.3.min.js",
      "assets/js/jquery.easing.min.js",
      "assets/js/jquery.waypoints.min.js",
      "assets/js/popper.min.js",
      "assets/js/bootstrap.min.js",
      "assets/js/isotope.pkgd.min.js",
      "assets/js/imagesloaded.pkgd.min.js",
      "assets/js/slick.min.js",
      "assets/js/wow.min.js",
      "assets/js/morphext.min.js",
      "assets/js/parallax.min.js",
      "assets/js/jquery.magnific-popup.min.js",
    ];

    const loadAll = async () => {
      // Load each script in sequence
      for (const src of scripts) {
        await loadScript(src);
      }

      const jq = window.jQuery;
      if (!jq) return;

      // ── Hamburger / Mobile Menu ──────────────────────────────
      jq(".menu-icon button").off("click.menu").on("click.menu", function () {
        jq(
          "header.desktop-header-1, main.content, header.mobile-header-1"
        ).toggleClass("open");
      });

      jq("main.content").off("click.menu").on("click.menu", function () {
        jq(
          "header.desktop-header-1, main.content, header.mobile-header-1"
        ).removeClass("open");
      });

      jq(".vertical-menu li a").off("click.menu").on("click.menu", function () {
        jq(
          "header.desktop-header-1, main.content, header.mobile-header-1"
        ).removeClass("open");
      });

      // ── Isotope Portfolio Grid ───────────────────────────────
      const $container = jq(".portfolio-wrapper");
      if ($container.length && jq.fn.imagesLoaded && jq.fn.isotope) {
        $container.imagesLoaded(function () {
          $container.isotope({
            itemSelector: '[class*="col-"]',
            percentPosition: true,
            layoutMode: "fitRows",
          });
        });

        // Desktop filter tabs
        jq(".portfolio-filter")
          .off("click.filter")
          .on("click.filter", "li", function () {
            const filterValue = jq(this).attr("data-filter");
            $container.isotope({ filter: filterValue });
            jq(".portfolio-filter .current").removeClass("current");
            jq(this).addClass("current");
          });

        // Mobile filter select
        jq(".portfolio-filter-mobile")
          .off("change.filter")
          .on("change.filter", function () {
            const filterValue = this.value === "*" ? "*" : "." + this.value.replace(/^\./, "");
            $container.isotope({ filter: filterValue });
          });
      }

      // ── Slick Testimonials Slider ────────────────────────────
      if (jq.fn.slick) {
        const $slider = jq(".testimonials-wrapper");
        if ($slider.length && !$slider.hasClass("slick-initialized")) {
          $slider.slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
          });
        }
      }

      // ── WOW Animations ───────────────────────────────────────
      if (window.WOW) {
        new window.WOW().init();
      }

      // ── Morphext Text Rotation ───────────────────────────────
      if (jq.fn.Morphext) {
        jq(".text-rotating").Morphext({
          animation: "bounceIn",
          separator: ",",
          speed: 4000,
        });
      }

      // ── Progress Bars with Waypoint ──────────────────────────
      if (window.Waypoint && jq(".skill-item").length > 0) {
        new window.Waypoint({
          element: document.getElementsByClassName("skill-item")[0],
          handler: function () {
            jq(".progress-bar").each(function () {
              const val = jq(this).attr("aria-valuenow") + "%";
              jq(this).animate({ width: val }, { easing: "linear" });
            });
            this.destroy();
          },
          offset: "50%",
        });
      }

      // ── Parallax ─────────────────────────────────────────────
      if (window.Parallax && jq(".parallax").length > 0) {
        new window.Parallax(jq(".parallax").get(0), { relativeInput: true });
      }

      // ── Smooth Scroll ────────────────────────────────────────
      jq('a[href^="#"]:not([href="#"])').off("click.scroll").on("click.scroll", function (e) {
        const target = jq(jq(this).attr("href"));
        if (target.length) {
          jq("html, body").stop().animate(
            { scrollTop: target.offset().top },
            800,
            "easeInOutQuad"
          );
          e.preventDefault();
        }
      });

      // ── Scroll-to-top button ─────────────────────────────────
      jq(window).off("scroll.top").on("scroll.top", function () {
        if (jq(this).scrollTop() >= 350) {
          jq("#return-to-top").fadeIn(200);
        } else {
          jq("#return-to-top").fadeOut(200);
        }
      });

      jq("#return-to-top").off("click.top").on("click.top", function (e) {
        e.preventDefault();
        jq("body,html").animate({ scrollTop: 0 }, 400);
      });

      // ── Bootstrap Scrollspy ──────────────────────────────────
      jq("body").scrollspy({ target: ".scrollspy" });

      // ── Spacer heights ───────────────────────────────────────
      document.querySelectorAll(".spacer").forEach((el) => {
        const h = el.getAttribute("data-height");
        if (h) el.style.height = h + "px";
      });

      // ── Data-background colors ───────────────────────────────
      document.querySelectorAll(".data-background").forEach((el) => {
        const color = el.getAttribute("data-color");
        if (color) el.style.backgroundColor = color;
      });
    };

    loadAll();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("All fields are required!", {
        position: "top-right",  // Using string literal for the position
      });
    } else {
      toast.success("Message sent successfully!", {
        position: "top-right",  // Using string literal for the position
      });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <body className="dark">
      {/* Preloader */}
      {/* <div id="preloader">
        <div className="outer"> */}
      {/* Google Chrome */}
      {/* <div className="infinityChrome">
            <div />
            <div />
            <div />
          </div> */}
      {/* Safari and others */}
      {/* <div className="infinity">
            <div>
              <span />
            </div>
            <div>
              <span />
            </div>
            <div>
              <span />
            </div>
          </div> */}
      {/* Stuff */}
      {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="goo-outer"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation={6}
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </div>
      </div> */}
      {/* Preloader */}

      {/* mobile header */}
      <header className="mobile-header-1">
        <div className="container">
          {/* menu icon */}
          <div className="menu-icon d-inline-flex mr-4">
            <button>
              <span />
            </button>
          </div>
          {/* logo image */}
          <div className="site-logo">
            <a href="index-dark.html">
              {/* <img src="assets/images/logo.svg" alt="Bolby" /> */}
            </a>
          </div>
        </div>
      </header>

      {/* mobile header */}

      {/* desktop header */}
      <header className="desktop-header-1 d-flex align-items-start flex-column">
        {/* logo image */}
        <div className="site-logo">
          <a href="index-dark.html">
            {/* <img src="assets/images/2.png" alt="Bolby" /> */}

          </a>
        </div>
        {/* main menu */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li className="active">
              <a href="#home" className="nav-link active">
                <i className="icon-home" />
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                <i className="icon-user-following" />
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                <i className="icon-badge" />
                Skills
              </a>
            </li>
            {/* <li>
              <a href="#services" className="nav-link">
                <i className="icon-briefcase" />
                Services
              </a>
            </li> */}
            <li>
              <a href="#experience" className="nav-link">
                <i className="icon-graduation" />
                Experience
              </a>
            </li>
            <li>
              <a href="#works" className="nav-link">
                <i className="icon-layers" />
                Works
              </a>
            </li>
            <li>
              <a href="#blog" className="nav-link">
                <i className="icon-note" />
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <i className="icon-bubbles" />
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* site footer */}
        <div className="footer">
          {/* copyright text */}
          <span className="copyright"> </span>
        </div>
      </header>

      {/* desktop header */}

      {/* main layout */}
      <main className="content">
        {/* section home */}
        <section id="home" className="home d-flex align-items-center">
          <div className="container">
            {/* intro */}
            <div className="intro">
              {/* avatar image */}
              <img
                src="assets/images/d1hve.jpg"
                alt="Sahil Husen"
                className="mb-4 rounded-circle"
                style={{
                  width: "108px",
                  height: "108px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              {/* info */}
              <h1 className="mb-2 mt-0">Sahil Husen</h1>
              <span>

                <span className="text-rotating morphext">
                  <span className="animated bounceIn">Software Engineer</span>
                </span>
              </span>
              {/* social icons */}
              <ul className="social-icons light list-inline mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="https://github.com/Sahill357">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:itsmesahil357@gmail.com">
                    <i className="fas fa-envelope" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://x.com/Sam_357_">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/sahil-shaikh-64a4ba18b/">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
              {/* buttons */}
              <div className="mt-4">
                <a href="#contact" className="btn btn-default">
                  Contact me
                </a>
              </div>
            </div>
            {/* scroll down mouse wheel */}
            <div className="scroll-down">
              <a href="#about" className="mouse-wrapper">
                <span>Scroll Down</span>
                <span className="mouse">
                  <span className="wheel" />
                </span>
              </a>
            </div>
            {/* parallax layers */}
            <div className="parallax" data-relative-input="true" style={{ transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}>
              <svg width={27} height={29} data-depth="0.3" className="layer p1" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', display: 'block' }}>
                <path d="M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z" fill="#FFD15C" fillRule="evenodd" />
              </svg>
              <svg width={26} height={26} data-depth="0.2" className="layer p2" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(22.304px, -8.92px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <path d="M13 3.3541L2.42705 24.5h21.1459L13 3.3541z" stroke="#FF4C60" strokeWidth={3} fill="none" fillRule="evenodd" />
              </svg>
              <svg width={30} height={25} data-depth="0.3" className="layer p3" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <path d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z" fill="#44D7B6" fillRule="evenodd" />
              </svg>
              <svg width={15} height={23} data-depth="0.6" className="layer p4" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(66.912px, -26.76px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <rect transform="rotate(30 9.86603 10.13397)" x={7} width={3} height={25} rx="1.5" fill="#FFD15C" fillRule="evenodd" />
              </svg>
              <svg width={15} height={23} data-depth="0.2" className="layer p5" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(22.304px, -8.92px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <rect transform="rotate(30 9.86603 10.13397)" x={7} width={3} height={25} rx="1.5" fill="#6C6CE5" fillRule="evenodd" />
              </svg>
              <svg width={49} height={17} data-depth="0.5" className="layer p6" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(55.76px, -22.3px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <g fill="#FF4C60" fillRule="evenodd">
                  <path d="M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z" />
                  <path d="M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z" />
                </g>
              </svg>
              <svg width={26} height={26} data-depth="0.4" className="layer p7" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(44.608px, -17.84px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <path d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z" stroke="#FFD15C" strokeWidth={3} fill="none" fillRule="evenodd" />
              </svg>
              <svg width={19} height={21} data-depth="0.3" className="layer p8" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <rect transform="rotate(-40 6.25252 10.12626)" x={7} width={3} height={25} rx="1.5" fill="#6C6CE5" fillRule="evenodd" />
              </svg>
              <svg width={30} height={25} data-depth="0.3" data-depth-y="-1.30" className="layer p9" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <path d="M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z" fill="#6C6CE5" fillRule="evenodd" />
              </svg>
              <svg width={47} height={29} data-depth="0.2" className="layer p10" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(22.304px, -8.92px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <g fill="#44D7B6" fillRule="evenodd">
                  <path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z" />
                  <path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z" />
                </g>
              </svg>
              <svg width={33} height={20} data-depth="0.5" className="layer p11" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate3d(55.76px, -22.3px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block' }}>
                <path d="M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z" fill="#FFD15C" fillRule="evenodd" />
              </svg>
            </div>

          </div>
        </section>

        {/* <!-- section about --> */}
        <section id="about">
          <div className="container">
            {/* section title */}
            <h2
              className="section-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              About Me
            </h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            <div className="row">
              <div className="col-md-12">
                <div className="rounded bg-dark shadow-light padding-30">
                  <div className="row">
                    <div className="col-md-12">
                      {/* about text */}
                      <p className="lead mb-3" style={{ fontSize: "17px", lineHeight: "1.8", color: "#f8f9fa", fontWeight: 500 }}>
                        I'm Sahil 👋, a backend developer from Pune who gets excited about making complex systems simple, robust, and fast.
                      </p>

                      <p className="mb-3" style={{ fontSize: "15px", lineHeight: "1.85", color: "#dcdde1" }}>
                        Primarily into <strong className="text-white">backend engineering and system design</strong> — Node.js, Express, PostgreSQL, Redis. My journey started with pure curiosity about how things work under the hood, and that pulled me deeper into distributed systems and, more recently, AI/ML. I like solving real engineering problems by focusing on what actually breaks at scale — <strong className="text-white">performance, caching, and reliability</strong> — not just making something "work."
                      </p>

                      <p className="mb-3" style={{ fontSize: "15px", lineHeight: "1.85", color: "#dcdde1" }}>
                        What stays consistent is shipping things end-to-end, learning in public, and asking better questions than I had yesterday.
                      </p>

                      <p className="mb-4" style={{ fontSize: "15px", lineHeight: "1.85", color: "#dcdde1" }}>
                        Currently exploring <strong className="text-white">AI Engineering</strong> — RAG pipelines, autonomous agents, and LLM-powered backend systems. When I'm not building, you'll find me gaming 🎮 or hacking on side projects.
                      </p>

                      {/* tech focus tags */}
                      <div className="d-flex flex-wrap mb-4" style={{ gap: "10px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "13px", color: "#f1f2f6" }}>
                          <i className="fab fa-node-js" style={{ color: "#68a063" }}></i> Node.js & Express
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "13px", color: "#f1f2f6" }}>
                          <i className="fas fa-database" style={{ color: "#336791" }}></i> PostgreSQL & Redis
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "13px", color: "#f1f2f6" }}>
                          <i className="fas fa-network-wired" style={{ color: "#FFD15C" }}></i> System Design
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "13px", color: "#f1f2f6" }}>
                          <i className="fas fa-brain" style={{ color: "#6C6CE5" }}></i> AI / RAG & LLMs
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "13px", color: "#f1f2f6" }}>
                          <i className="fas fa-tachometer-alt" style={{ color: "#FF4C60" }}></i> Scalability & Caching
                        </span>
                      </div>

                      <div className="mt-2">
                        <a href="https://drive.google.com/file/d/1p0wOAGc8TY23NQAA5n1AAF-BtSge1GCS/view?usp=sharing" className="btn btn-default" target="_blank" rel="noopener noreferrer">
                          Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="spacer" data-height={0} style={{ height: 0 }} />

          </div>
        </section>

        {/* section skills */}
        <Skills />

        {/* section services */}


        {/* section experience */}
        <section id="experience">
          <div className="container">
            {/* section title */}
            <h2
              className="section-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Experience
            </h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            <div className="row">

              <div className="col-md-12">
                {/* responsive spacer */}
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
                {/* timeline wrapper */}
                <div className="timeline exp bg-dark rounded shadow-light padding-30 overflow-hidden">
                  {/* timeline item 1 */}
                  <div
                    className="timeline-container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="content">
                      <span className="time">May 2025 – Present</span>
                      <h3 className="title mb-1">
                        Backend Engineer{" "}
                        <span style={{ fontSize: "16px", color: "#FF4C60", fontWeight: 500 }}>
                          — ipshopy.com
                        </span>{" "}
                        <span style={{ fontSize: "11px", padding: "3px 8px", borderRadius: "12px", background: "rgba(255, 76, 96, 0.15)", color: "#FF4C60", fontWeight: 600 }}>
                          Onsite
                        </span>
                      </h3>
                      <ul style={{ paddingLeft: "18px", margin: "12px 0 0 0", color: "#dcdde1", lineHeight: "1.7", fontSize: "14px" }}>
                        <li style={{ marginBottom: "6px" }}>Scaled backend microservices serving <strong className="text-white">17k+ users</strong>, improving Node.js response performance by 35% and maintaining 99.9% uptime.</li>
                        <li style={{ marginBottom: "6px" }}>Built and secured <strong className="text-white">AWS infrastructure</strong> (EC2, Lambda, S3, EventBridge, ALB) with Nginx and load balancing to handle peak traffic.</li>
                        <li style={{ marginBottom: "6px" }}>Designed secure REST APIs with <strong className="text-white">JWT authentication and RBAC</strong>, integrating 6+ enterprise partners and cutting onboarding time by 20%.</li>
                        <li style={{ marginBottom: "6px" }}>Implemented <strong className="text-white">Redis caching</strong> across production services, reducing API latency and easing database load under high concurrency.</li>
                        <li style={{ marginBottom: "6px" }}>Engineered production backend systems using <strong className="text-white">Node.js, Express, and PostgreSQL</strong>, focused on reliability and long-term maintainability.</li>
                        <li style={{ marginBottom: "6px" }}>Deployed containerized services on <strong className="text-white">GCP with Kubernetes</strong>, streamlining rollouts and enabling zero-downtime deployments.</li>
                        <li style={{ marginBottom: "6px" }}>Designed event-driven workflows (<strong className="text-white">CQRS</strong>) for order and inventory sync, reducing data inconsistency across services.</li>
                        <li style={{ marginBottom: "0" }}>Set up monitoring and structured logging across microservices, cutting average incident diagnosis time significantly.</li>
                      </ul>
                    </div>
                  </div>

                  {/* timeline item 2 */}
                  <div
                    className="timeline-container wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="content">
                      <span className="time">May 2023 – Apr 2025</span>
                      <h3 className="title mb-1">
                        Backend Developer{" "}
                        <span style={{ fontSize: "16px", color: "#FFD15C", fontWeight: 500 }}>
                          — DualSysco Research and Development
                        </span>{" "}
                        <span style={{ fontSize: "11px", padding: "3px 8px", borderRadius: "12px", background: "rgba(255, 209, 92, 0.15)", color: "#FFD15C", fontWeight: 600 }}>
                          Onsite
                        </span>
                      </h3>
                      <ul style={{ paddingLeft: "18px", margin: "12px 0 0 0", color: "#dcdde1", lineHeight: "1.7", fontSize: "14px" }}>
                        <li style={{ marginBottom: "6px" }}>Implemented <strong className="text-white">Redis caching</strong>, reducing database load by 65% and API response times by 40%.</li>
                        <li style={{ marginBottom: "6px" }}>Designed <strong className="text-white">ERD-driven data models</strong>, significantly improving data integrity across multiple services.</li>
                        <li style={{ marginBottom: "6px" }}>Delivered automated CI/CD pipelines via <strong className="text-white">Docker and AWS</strong>, enabling same-day releases with rollback safety.</li>
                        <li style={{ marginBottom: "6px" }}>Orchestrated Docker containers with <strong className="text-white">Kubernetes</strong> for scalable, highly available production systems.</li>
                        <li style={{ marginBottom: "0" }}>Built background job queues using <strong className="text-white">Bull/Redis</strong>, handling asynchronous tasks without blocking main thread execution.</li>
                      </ul>
                    </div>
                  </div>

                  {/* timeline item 3 */}
                  <div
                    className="timeline-container wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="content">
                      <span className="time">Jan 2023 – Apr 2023</span>
                      <h3 className="title mb-1">
                        Software Development Intern{" "}
                        <span style={{ fontSize: "16px", color: "#6C6CE5", fontWeight: 500 }}>
                          — DualSysco Research and Development
                        </span>{" "}
                        <span style={{ fontSize: "11px", padding: "3px 8px", borderRadius: "12px", background: "rgba(108, 108, 229, 0.15)", color: "#6C6CE5", fontWeight: 600 }}>
                          Onsite
                        </span>
                      </h3>
                      <ul style={{ paddingLeft: "18px", margin: "12px 0 0 0", color: "#dcdde1", lineHeight: "1.7", fontSize: "14px" }}>
                        <li style={{ marginBottom: "6px" }}>Built and deployed a full-stack application using <strong className="text-white">Node.js, Express.js, and MySQL</strong> on AWS.</li>
                        <li style={{ marginBottom: "6px" }}>Implemented <strong className="text-white">JWT-based authentication</strong>, successfully securing 100% of API endpoints.</li>
                        <li style={{ marginBottom: "6px" }}>Integrated third-party payment gateways via REST APIs and conducted rigorous end-to-end testing using Postman.</li>
                        <li style={{ marginBottom: "0" }}>Developed RESTful APIs following clean code standards and <strong className="text-white">MVC architecture</strong> principles.</li>
                      </ul>
                    </div>
                  </div>
                  {/* main line */}
                  <span className="line" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section works */}
        <section id="works">
          <div className="container">
            {/* section title */}
            <h2 className="section-title wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Recent works</h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            {/* portfolio filter (desktop) */}
            <ul className="portfolio-filter list-inline wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <li className="list-inline-item current" data-filter="*">All</li>
              <li className="list-inline-item" data-filter=".Backend">Backend</li>
              <li className="list-inline-item" data-filter=".htmlwithreact">Frontend</li>
              <li className="list-inline-item" data-filter=".android-ios">Android/IOS</li>

              <li className="list-inline-item" data-filter=".fullstack">Full Stack</li>
            </ul>

            {/* portfolio filter (mobile) */}
            <div className="pf-filter-wrapper">
              <select className="portfolio-filter-mobile">
                <option value="*">All</option>
                <option value="Backend">Backend</option>
                <option value="htmlwithreact">Frontend</option>
                <option value="android-ios">Android/IOS</option>

                <option value="fullstack">Full Stack</option>
              </select>
            </div>
            {/* portolio wrapper */}
            <div className="row portfolio-wrapper">
              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item fullstack Backend htmlwithreact">
                <a href="https://www.ipshopy.com/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">ipshopy.com</span>
                      <h4 className="title">Multi-Seller E-Commerce Platform</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/ipshopy-desktop.jpg" alt="ipshopy.com" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 grid-item fullstack Backend">
                <a href="http://erp.abstarthr.in/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">ERP</span>
                      <h4 className="title">ERP Management System</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/erp.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>

              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item fullstack Backend android-ios">
                <a href="https://play.google.com/store/apps/details?id=com.ipshopy.ipshopy" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">ipshopy</span>
                      <h4 className="title">ipshopy Android App</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/ipshopy-android.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>

              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item fullstack Backend android-ios">
                <a href="https://play.google.com/store/apps/details?id=com.hookouts.social" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">Hookouts</span>
                      <h4 className="title">Hookouts Social & Dating App</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/hookouts.png" alt="Hookouts Social & Dating App" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>

              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item creative design react htmlwithreact">
                <a href="https://intellicoder.in/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">E-Learning</span>
                      <h4 className="title">E-Learning Coding Platform</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/jrcoders.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>

              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item branding react htmlwithreact">
                <a href="https://shivkrishna-institute.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark ">
                    <div className="details">
                      <span className="term">institute</span>
                      <h4 className="title">Digital Learning institute</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/shivkrishna.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>

              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item creative react htmlwithreact">
                <a href="https://friends-gym.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">Fitness</span>
                      <h4 className="title">Fitness Center</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/friendsgym.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>

              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item art branding htmlwithreact">
                <a href="https://web-agency-sooty.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">Web Agency</span>
                      <h4 className="title">Information technology Agency</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/webagency.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
                {/* <div id="gallery-1" className="gallery mfp-hide">
          <a href="assets/images/works/5.svg" />
          <a href="assets/images/works/4.svg" />
        </div> */}
              </div>
              {/* portfolio item */}
              <div className="col-md-4 col-sm-6 grid-item creative design react htmlwithreact">
                <a href="https://creative-agency-sooty-mu.vercel.app/" target="_blank" rel="noopener noreferrer">

                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">Creative, Design</span>
                      <h4 className="title">Digital Web App, Mobile App Development Agency</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/designagency.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 grid-item art react htmlwithreact">
                <a href="https://sam-portfolio-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">Portfolio</span>
                      <h4 className="title">Classic Portfolio</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/aileenportfolio.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div><div className="col-md-4 col-sm-6 grid-item creative design react htmlwithreact">
                <a href="https://redux-toolkit-to-do-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">

                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">To-Do</span>
                      <h4 className="title">Redux ToolKit To-Do</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/reduxtodo.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
                <div id="small-dialog" className="white-popup zoom-anim-dialog mfp-hide">
                  <img src="assets/images/single-work.svg" alt="Title" />
                  <h2>Guest App Walkthrough Screens</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit nibh in massa semper rutrum. In rhoncus eleifend mi id tempus.</p>
                  <p>Donec consectetur, libero at pretium euismod, nisl felis lobortis urna, id tristique nisl lectus eget ligula.</p>
                  <a href="#!" className="btn btn-default">View on Dribbble</a>
                </div>
              </div>
              {/* <div className="col-md-4 col-sm-6 grid-item branding react htmlwithreact">
                <a href="https://portfolio-eight-taupe-19.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">Portfolio</span>
                      <h4 className="title">Personal Porfolio</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/samportfolio.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div> */}
              <div className="col-md-4 col-sm-6 grid-item fullstack Backend">
                <a href="#!" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                      <span className="term">X Clone</span>
                      <h4 className="title">X Clone</h4>
                      <span className="more-button"><i className="icon-link" /></span>
                    </div>
                    <div className="thumb">
                      <img src="assets/images/works/xclone.png" alt="Portfolio-title" />
                      <div className="mask" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* more button */}
          </div>
        </section>



        {/* section prices */}
        {/* <section id="prices">
          <div className="container"> */}
        {/* section title */}
        {/* <h2
              className="section-title wow fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              Pricing Plans
            </h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            <div className="row">
              <div className="col-md-4 pr-md-0 mt-md-4 mt-0"> */}
        {/* price item */}
        {/* <div className="price-item bg-dark rounded shadow-light text-center">
                  <img src="assets/images/price-1.svg" alt="Regular" />
                  <h2 className="plan">Basic</h2>
                  <p>A Simple option but powerful to manage your business</p>
                  <p>Email support</p>
                  <h3 className="price">
                    <em>$</em>9<span>Month</span>
                  </h3>
                  <a href="#" className="btn btn-default">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-md-4 px-md-0 my-4 my-md-0"> */}
        {/* price item recommended*/}
        {/* <div className="price-item bg-dark rounded shadow-light text-center best">
                  <span className="badge">Recommended</span>
                  <img src="assets/images/price-2.svg" alt="Premium" />
                  <h2 className="plan">Premium</h2>
                  <p>
                    Unlimited product including apps integrations and more
                    features
                  </p>
                  <p>Mon-Fri support</p>
                  <h3 className="price">
                    <em>$</em>49<span>Month</span>
                  </h3>
                  <a href="#" className="btn btn-default">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-md-4 pl-md-0 mt-md-4 mt-0"> */}
        {/* price item */}
        {/* <div className="price-item bg-dark rounded shadow-light text-center">
                  <img src="assets/images/price-3.svg" alt="Ultimate" />
                  <h2 className="plan">Ultimate</h2>
                  <p>A wise option for large companies and individuals</p>
                  <p>24/7 support</p>
                  <h3 className="price">
                    <em>$</em>99<span>Month</span>
                  </h3>
                  <a href="#" className="btn btn-default">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* section testimonials */}


        {/* section blog */}
        <section id="blog">
          <div className="container">
            {/* section title */}
            <h2
              className="section-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Latest Posts
            </h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            <div className="row blog-wrapper">
              <div className="col-md-4">
                {/* blog item */}
                <div
                  className="blog-item rounded bg-dark shadow-light wow fadeIn"
                  data-wow-delay="200ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "200ms",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="thumb">
                    <a href="#!">
                      <span className="category">Reviews</span>
                    </a>
                    <a href="#!">
                      <img src="assets/images/blog/1.svg" alt="blog-title" />
                    </a>
                  </div>
                  <div className="details">
                    <h4 className="my-0 title">
                      <a href="#!">
                        5 Best Web Development Tool for Your Project
                      </a>
                    </h4>
                    <ul className="list-inline meta mb-0 mt-2">
                      <li className="list-inline-item">09 February, 2020</li>
                      <li className="list-inline-item">Bolby</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                {/* blog item */}
                <div
                  className="blog-item rounded bg-dark shadow-light wow fadeIn"
                  data-wow-delay="400ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "400ms",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="thumb">
                    <a href="#!">
                      <span className="category">Tutorial</span>
                    </a>
                    <a href="#!">
                      <img src="assets/images/blog/2.svg" alt="blog-title" />
                    </a>
                  </div>
                  <div className="details">
                    <h4 className="my-0 title">
                      <a href="#!">Common Misconceptions About Payment</a>
                    </h4>
                    <ul className="list-inline meta mb-0 mt-2">
                      <li className="list-inline-item">07 February, 2020</li>
                      <li className="list-inline-item">Bolby</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                {/* blog item */}
                <div
                  className="blog-item rounded bg-dark shadow-light wow fadeIn"
                  data-wow-delay="600ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "600ms",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="thumb">
                    <a href="#!">
                      <span className="category">Business</span>
                    </a>
                    <a href="#!">
                      <img src="assets/images/blog/3.svg" alt="blog-title" />
                    </a>
                  </div>
                  <div className="details">
                    <h4 className="my-0 title">
                      <a href="#!">3 Things To Know About Startup Business</a>
                    </h4>
                    <ul className="list-inline meta mb-0 mt-2">
                      <li className="list-inline-item">06 February, 2020</li>
                      <li className="list-inline-item">Bolby</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section contact */}
        <section id="contact">
          <div className="container">
            {/* section title */}
            <h2 className="section-title wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
              Get In Touch
            </h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            <div className="row">
              <div className="col-md-4">
                {/* contact info */}
                <div className="contact-info">
                  <h3 className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    Let's talk about everything!
                  </h3>
                  <p className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    Don't like forms? Send me an{" "}
                    <a href="mailto:itsmesahil357@gmail.com">email</a>. 👋
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                {/* Contact Form */}
                <form id="contact-form" className="contact-form mt-6" onSubmit={handleSubmit} noValidate>
                  <div className="messages" />
                  <div className="row">
                    <div className="column col-md-6">
                      {/* Name input */}
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="column col-md-6">
                      {/* Email input */}
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="column col-md-12">
                      {/* Subject input */}
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="column col-md-12">
                      {/* Message textarea */}
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={5}
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-default">
                    Send Message
                  </button>
                  {/* Send Button */}
                </form>
                {/* Contact Form end */}
              </div>
            </div>
          </div>
        </section>

        <div className="spacer" data-height={96} style={{ height: 96 }} />
      </main>
      {/* main layout */}

      {/* Go to top button */}
      {/* <a href="javascript:" id="return-to-top"><i className="fas fa-arrow-up"></i></a> */}
    </body>
  );
}
