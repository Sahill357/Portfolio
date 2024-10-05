import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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
      <div id="preloader">
        <div className="outer">
          {/* Google Chrome */}
          <div className="infinityChrome">
            <div />
            <div />
            <div />
          </div>
          {/* Safari and others */}
          <div className="infinity">
            <div>
              <span />
            </div>
            <div>
              <span />
            </div>
            <div>
              <span />
            </div>
          </div>
          {/* Stuff */}
          <svg
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
      </div>
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
              <a href="#services" className="nav-link">
                <i className="icon-briefcase" />
                Services
              </a>
            </li>
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
                src="assets/images/avatar-1.svg"
                alt="Bolby"
                className="mb-4"
              />
              {/* info */}
              <h1 className="mb-2 mt-0">Sahil Shaikh</h1>
              <span>
                I'm a{" "}
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
           <div className="parallax" data-relative-input="true" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
  <svg width={27} height={29} data-depth="0.3" className="layer p1" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', display: 'block'}}>
    <path d="M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z" fill="#FFD15C" fillRule="evenodd" />
  </svg>
  <svg width={26} height={26} data-depth="0.2" className="layer p2" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(22.304px, -8.92px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <path d="M13 3.3541L2.42705 24.5h21.1459L13 3.3541z" stroke="#FF4C60" strokeWidth={3} fill="none" fillRule="evenodd" />
  </svg>
  <svg width={30} height={25} data-depth="0.3" className="layer p3" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <path d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z" fill="#44D7B6" fillRule="evenodd" />
  </svg>
  <svg width={15} height={23} data-depth="0.6" className="layer p4" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(66.912px, -26.76px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <rect transform="rotate(30 9.86603 10.13397)" x={7} width={3} height={25} rx="1.5" fill="#FFD15C" fillRule="evenodd" />
  </svg>
  <svg width={15} height={23} data-depth="0.2" className="layer p5" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(22.304px, -8.92px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <rect transform="rotate(30 9.86603 10.13397)" x={7} width={3} height={25} rx="1.5" fill="#6C6CE5" fillRule="evenodd" />
  </svg>
  <svg width={49} height={17} data-depth="0.5" className="layer p6" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(55.76px, -22.3px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <g fill="#FF4C60" fillRule="evenodd">
      <path d="M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z" />
      <path d="M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z" />
    </g>
  </svg>
  <svg width={26} height={26} data-depth="0.4" className="layer p7" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(44.608px, -17.84px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <path d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z" stroke="#FFD15C" strokeWidth={3} fill="none" fillRule="evenodd" />
  </svg>
  <svg width={19} height={21} data-depth="0.3" className="layer p8" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <rect transform="rotate(-40 6.25252 10.12626)" x={7} width={3} height={25} rx="1.5" fill="#6C6CE5" fillRule="evenodd" />
  </svg>
  <svg width={30} height={25} data-depth="0.3" data-depth-y="-1.30" className="layer p9" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(33.456px, -13.38px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <path d="M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z" fill="#6C6CE5" fillRule="evenodd" />
  </svg>
  <svg width={47} height={29} data-depth="0.2" className="layer p10" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(22.304px, -8.92px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
    <g fill="#44D7B6" fillRule="evenodd">
      <path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z" />
      <path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z" />
    </g>
  </svg>
  <svg width={33} height={20} data-depth="0.5" className="layer p11" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(55.76px, -22.3px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block'}}>
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
              <div className="col-md-3">
                <div className="text-center text-md-left">
                  {/* avatar image */}
                  <img src="assets/images/this.png" alt="Bolby" />
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
              </div>
              <div className="col-md-9 triangle-left-md triangle-top-sm">
                <div className="rounded bg-dark shadow-light padding-30">
                  <div className="row">
                    <div className="col-md-6">
                      {/* about text */}
                      <p>
                        I am Sahil, Full stack developer from
                        Maharashtra, India. I have rich experience in web
                        Development and UI/UX and DevOps, also I am currently
                        exploring new things.
                      </p>
                      <div className="mt-3">
                        <a href="https://drive.google.com/file/d/110TbsESYlYfaOmzcwkF_aDKgxfB6xViv/view?usp=sharing" className="btn btn-default">
                          Download CV
                        </a>
                      </div>
                      <div
                        className="spacer d-md-none d-lg-none"
                        data-height={30}
                        style={{ height: 30 }}
                      />
                    </div>
                    <div className="col-md-6">
                      {/* skill item */}
                      <div className="skill-item">
                        <div className="skill-info clearfix">
                          <h4 className="float-left mb-3 mt-0">Development</h4>
                          <span className="float-right">95%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar data-background"
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={85}
                            data-color="#FFD15C"
                            style={{
                              backgroundColor: "rgb(255, 209, 92)",
                              width: "95%",
                            }}
                          ></div>
                        </div>
                        <div
                          className="spacer"
                          data-height={20}
                          style={{ height: 20 }}
                        />
                      </div>
                      {/* skill item */}
                      <div className="skill-item">
                        <div className="skill-info clearfix">
                          <h4 className="float-left mb-3 mt-0">UI/UX design</h4>
                          <span className="float-right">85%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar data-background"
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={95}
                            data-color="#FF4C60"
                            style={{
                              backgroundColor: "rgb(255, 76, 96)",
                              width: "85%",
                            }}
                          ></div>
                        </div>
                        <div
                          className="spacer"
                          data-height={20}
                          style={{ height: 20 }}
                        />
                      </div>
                      {/* skill item */}
                      <div className="skill-item">
                        <div className="skill-info clearfix">
                          <h4 className="float-left mb-3 mt-0">DevOps</h4>
                          <span className="float-right">80%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar data-background"
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={70}
                            data-color="#6C6CE5"
                            style={{
                              backgroundColor: "rgb(108, 108, 229)",
                              width: "80%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
            <div className="spacer" data-height={70} style={{ height: 70 }} />
            <div className="row">
              <div className="col-md-3 col-sm-6">
                {/* fact item */}
                <div className="fact-item">
                  <span className="icon icon-fire" />
                  <div className="details">
                    <h3 className="mb-0 mt-0 number">
                      <em className="count">185+</em>
                    </h3>
                    <p className="mb-0">DSA Problem Solved</p>
                  </div>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
              </div>
              <div className="col-md-3 col-sm-6">
                {/* fact item */}
                <div className="fact-item">
                  <span className="icon icon-cup" />
                  <div className="details">
                    <h3 className="mb-0 mt-0 number">
                      <em className="count">16+</em>
                    </h3>
                    <p className="mb-0">GitHub Repositories</p>
                  </div>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
              </div>
              <div className="col-md-3 col-sm-6">
                {/* fact item */}
                <div className="fact-item">
                  <span className="icon icon-people" />
                  <div className="details">
                    <h3 className="mb-0 mt-0 number">
                      <em className="count">20+</em>
                    </h3>
                    <p className="mb-0">Projects Completed</p>
                  </div>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
              </div>
              <div className="col-md-3 col-sm-6">
                {/* fact item */}
                <div className="fact-item">
                  <span className="icon icon-badge" />
                  <div className="details">
                    <h3 className="mb-0 mt-0 number">
                      <em className="count">100%</em>
                    </h3>
                    <p className="mb-0">Quality Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section services */}
        <section id="services">
          <div className="container">
            {/* section title */}
            <h2
              className="section-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Services
            </h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            <div className="row">
              <div className="col-md-4">
                {/* service box */}
                <div
                  className="service-box rounded data-background padding-30 text-center text-light shadow-blue"
                  data-color="#6C6CE5"
                  style={{ backgroundColor: "rgb(108, 108, 229)" }}
                >
                  <img src="assets/images/service-1.svg" alt="UI/UX design" />
                  <h3 className="mb-3 mt-0">UI/UX design</h3>
                  <p className="mb-0">
                    Ensuring a seamless user experience by optimizing the
                    website/mobile app for all devices and screen sizes.
                  </p>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
              </div>
              <div className="col-md-4">
                {/* service box */}
                <div
                  className="service-box rounded data-background padding-30 text-center shadow-yellow"
                  data-color="#F9D74C"
                  style={{ backgroundColor: "rgb(249, 215, 76)" }}
                >
                  <img src="assets/images/service-2.svg" alt="UI/UX design" />
                  <h3 className="mb-3 mt-0">Web Development</h3>
                  <p className="mb-0">
                    Ensuring the website adheres to industry standards while
                    keeping it properly maintained and up to date.
                  </p>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
              </div>
              <div className="col-md-4">
                {/* service box */}
                <div
                  className="service-box rounded data-background padding-30 text-center text-light shadow-pink"
                  data-color="#F97B8B"
                  style={{ backgroundColor: "rgb(249, 123, 139)" }}
                >
                  <img src="assets/images/service-3.svg" alt="UI/UX design" />
                  <h3 className="mb-3 mt-0">DevOps</h3>
                  <p className="mb-0">
                    Overseeing infrastructure for seamless CI/CD, ensuring
                    system reliability and monitoring and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <p className="mb-0">
                For any query? <a href="#contact">Click here</a> to contact me!
                👋
              </p>
            </div>
          </div>
        </section>

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
              <div className="col-md-6">
                {/* timeline wrapper */}
                <div className="timeline edu bg-dark rounded shadow-light padding-30 overflow-hidden">
                  {/* timeline item */}
                  <div
                    className="timeline-container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="content">
                      <span className="time">2018 - 2019 </span>
                      <h3 className="title">Higher Secondary</h3>
                      <p>
                      Completed my higher secondary education, laying a strong foundation in science and technology.
                      </p>
                    </div>
                  </div>
                  {/* timeline item */}
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
                      <span className="time">2020 - 2024</span>
                      <h3 className="title">Bachelor’s Degree</h3>
                      <p>
                      Pursuing a Bachelor’s in Business and IT, honing my skills in programming, web development, DevOps.
                      </p>
                    </div>
                  </div>
                  {/* timeline item */}
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
                      <span className="time">2024 - Present</span>
                      <h3 className="title">Masters Degree</h3>
                      <p>
                      Developed a solid academic foundation with a focus on analytical skills, and a passion for innovation.
                      </p>
                    </div>
                  </div>
                  {/* main line */}
                  <span className="line" />
                </div>
              </div>
              <div className="col-md-6">
                {/* responsive spacer */}
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height={30}
                  style={{ height: 30 }}
                />
                {/* timeline wrapper */}
                <div className="timeline exp bg-dark rounded shadow-light padding-30 overflow-hidden">
                  {/* timeline item */}
                  <div
                    className="timeline-container wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="content">
                      <span className="time">2024 - Present</span>
                      <h3 className="title">Full-Stack Developer</h3>
                      <p>
                      Currently working as a Full-Stack Developer, building scalable web applications & systems.
                      </p>
                    </div>
                  </div>
                  {/* timeline item */}
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
                      <span className="time">2022 - 2023</span>
                      <h3 className="title">Front-End Developer</h3>
                      <p>
                      Worked as a Front-End Developer, specializing in creating responsive user interfaces using React.
                      </p>
                    </div>
                  </div>
                  {/* timeline item */}
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
                      <span className="time">2023 - 2024</span>
                      <h3 className="title">Back-End Developer</h3>
                      <p>
                      Focused on building robust and efficient server-side applications, managing databases, APIs, DevOps.
                      </p>
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
    <h2 className="section-title wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>Recent works</h2>
    <div className="spacer" data-height={60} style={{height: 60}} />
    {/* portfolio filter (desktop) */}
    <ul className="portfolio-filter list-inline wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
  <li className="list-inline-item current" data-filter="*">All</li>
  <li className="list-inline-item" data-filter=".react">React.js</li>
  <li className="list-inline-item" data-filter=".fullstack">Full Stack</li>  
  <li className="list-inline-item" data-filter=".next">Next.js</li>
  <li className="list-inline-item" data-filter=".htmlwithreact">Frontend</li>
  <li className="list-inline-item" data-filter=".Backend">Backend</li>
</ul>

    {/* portfolio filter (mobile) */}
    <div className="pf-filter-wrapper">
      <select className="portfolio-filter-mobile">
        <option value="*">All</option>
        <option value=".react">React.js</option>
        <option value=".fullstack">Full Stack</option>
        <option value=".next">Next.js</option>
        <option value=".design">Frontend</option>
        <option value=".Backend">Backend</option>
      </select>
    </div>
    {/* portolio wrapper */}
    <div className="row portfolio-wrapper" style={{position: 'relative', height: '892.575px'}}>
      {/* portfolio item */}
      <div className="col-md-4 col-sm-6 grid-item fullstack Backend" style={{position: 'absolute', left: '0%', top: 0}}>
  <a href="http://erp.abstarthr.in/" target="" rel="noopener noreferrer">
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
      <div className="col-md-4 col-sm-6 grid-item creative design react htmlwithreact" style={{position: 'absolute', left: '33.3333%', top: 0}}>
  <a href="https://intellicoder.in/" target="" rel="noopener noreferrer">
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
      <div className="col-md-4 col-sm-6 grid-item branding react htmlwithreact" style={{position: 'absolute', left: '66.6667%', top: 0}}>
  <a href="https://shivkrishna-institute.vercel.app/" target="" rel="noopener noreferrer">
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
      <div className="col-md-4 col-sm-6 grid-item creative react htmlwithreact" style={{position: 'absolute', left: '0%', top: 297}}>
  <a href="https://friends-gym.vercel.app/" target="" rel="noopener noreferrer">
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
      <div className="col-md-4 col-sm-6 grid-item art branding next" style={{position: 'absolute', left: '33.3333%', top: 297}}>
        <a href="https://web-agency-sooty.vercel.app/" target="" rel="noopener noreferrer">
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
      <div className="col-md-4 col-sm-6 grid-item creative design react htmlwithreact" style={{position: 'absolute', left: '66.6667%', top: 297}}>
      <a href="https://creative-agency-sooty-mu.vercel.app/" target="" rel="noopener noreferrer">

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
      <div className="col-md-4 col-sm-6 grid-item art react htmlwithreact" style={{position: 'absolute', left: '0%', top: 595}}>
        <a href="https://sam-portfolio-seven.vercel.app/" target="" rel="noopener noreferrer">
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
      </div><div className="col-md-4 col-sm-6 grid-item creative design react htmlwithreact" style={{position: 'absolute', left: '33.3333%', top: 595}}>
      <a href="https://redux-toolkit-to-do-kappa.vercel.app/" target="" rel="noopener noreferrer">

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
          <a href="#" className="btn btn-default">View on Dribbble</a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 grid-item branding react htmlwithreact" style={{position: 'absolute', left: '66.6667%', top: 595}}>
        <a href="https://portfolio-eight-taupe-19.vercel.app/" target="" rel="noopener noreferrer">
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
      </div>
      <div className="col-md-4 col-sm-6 grid-item fullstack Backend next" style={{position: 'absolute', left: '33.3333%', top: 0}}>
  <a href="#" target="" rel="noopener noreferrer">
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
        <section id="testimonials">
          <div className="container">
            {/* section title */}
            <h2
              className="section-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Testimonials
            </h2>
            <div className="spacer" data-height={60} style={{ height: 60 }} />
            {/* testimonials wrapper */}
            <div
              className="testimonials-wrapper slick-initialized slick-slider slick-dotted"
              role="toolbar"
            >
              {/* testimonial item */}
              <div aria-live="polite" className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 2800,
                    transform: "translate3d(-1400px, 0px, 0px)",
                  }}
                  role="listbox"
                >
                  <div
                    className="testimonial-item text-center mx-auto slick-slide slick-cloned"
                    data-slick-index={-1}
                    aria-hidden="true"
                    style={{ width: 700 }}
                    tabIndex={-1}
                  >
                    <div className="thumb mb-3 mx-auto">
                      <img
                        src="assets/images/avatar-1.svg"
                        alt="customer-name"
                      />
                    </div>
                    <h4 className="mt-3 mb-0">Peter Yetes</h4>
                    <span className="subtitle">
                      Product designer at Dribbble
                    </span>
                    <div className="bg-dark padding-30 shadow-light rounded triangle-top position-relative mt-4">
                      <p className="mb-0">
                        I enjoy working with the theme and learn so much. You
                        guys make the process fun and interesting. Good luck! 🔥
                      </p>
                    </div>
                  </div>
                  <div
                    className="testimonial-item text-center mx-auto slick-slide"
                    data-slick-index={0}
                    aria-hidden="true"
                    style={{ width: 700 }}
                    tabIndex={-1}
                    role="option"
                    aria-describedby="slick-slide00"
                  >
                    <div className="thumb mb-3 mx-auto">
                      <img
                        src="assets/images/avatar-3.svg"
                        alt="customer-name"
                      />
                    </div>
                    <h4 className="mt-3 mb-0">Peter Yetes</h4>
                    <span className="subtitle">
                      Product designer at Dribbble
                    </span>
                    <div className="bg-dark padding-30 shadow-light rounded triangle-top position-relative mt-4">
                      <p className="mb-0">
                        I enjoy working with the theme and learn so much. You
                        guys make the process fun and interesting. Good luck! 👍
                      </p>
                    </div>
                  </div>
                  <div
                    className="testimonial-item text-center mx-auto slick-slide slick-current slick-active"
                    data-slick-index={1}
                    aria-hidden="false"
                    style={{ width: 700 }}
                    tabIndex={-1}
                    role="option"
                    aria-describedby="slick-slide01"
                  >
                    <div className="thumb mb-3 mx-auto">
                      <img
                        src="assets/images/avatar-1.svg"
                        alt="customer-name"
                      />
                    </div>
                    <h4 className="mt-3 mb-0">Peter Yetes</h4>
                    <span className="subtitle">
                    Freelance Client
                    </span>
                    <div className="bg-dark padding-30 shadow-light rounded triangle-top position-relative mt-4">
                      <p className="mb-0">
                      I enjoy working with sahil and learn so much. You
                      guys make the process fun and interesting. Good luck! 🔥
                      </p>
                    </div>
                  </div>
                  <div
                    className="testimonial-item text-center mx-auto slick-slide slick-cloned"
                    data-slick-index={2}
                    aria-hidden="true"
                    style={{ width: 700 }}
                    tabIndex={-1}
                  >
                    <div className="thumb mb-3 mx-auto">
                      <img
                        src="assets/images/avatar-3.svg"
                        alt="customer-name"
                      />
                    </div>
                    <h4 className="mt-3 mb-0">John Doe</h4>
                    <span className="subtitle">
                      Product designer at Dribbble
                    </span>
                    <div className="bg-dark padding-30 shadow-light rounded triangle-top position-relative mt-4">
                      <p className="mb-0">
                        I enjoy working with the theme and learn so much. You
                        guys make the process fun and interesting. Good luck! 👍
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* testimonial item */}
              <ul
                className="slick-dots"
                style={{ display: "block" }}
                role="tablist"
              >
                <li
                  className
                  aria-hidden="true"
                  role="presentation"
                  aria-selected="true"
                  aria-controls="navigation00"
                  id="slick-slide00"
                >
                  <button
                    type="button"
                    data-role="none"
                    role="button"
                    tabIndex={0}
                  >
                    1
                  </button>
                </li>
                <li
                  aria-hidden="false"
                  role="presentation"
                  aria-selected="false"
                  aria-controls="navigation01"
                  id="slick-slide01"
                  className="slick-active"
                >
                  <button
                    type="button"
                    data-role="none"
                    role="button"
                    tabIndex={0}
                  >
                    2
                  </button>
                </li>
              </ul>
            </div>
            
          </div>
        </section>

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
                    <a href="#">
                      <span className="category">Reviews</span>
                    </a>
                    <a href="#">
                      <img src="assets/images/blog/1.svg" alt="blog-title" />
                    </a>
                  </div>
                  <div className="details">
                    <h4 className="my-0 title">
                      <a href="#">
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
                    <a href="#">
                      <span className="category">Tutorial</span>
                    </a>
                    <a href="#">
                      <img src="assets/images/blog/2.svg" alt="blog-title" />
                    </a>
                  </div>
                  <div className="details">
                    <h4 className="my-0 title">
                      <a href="#">Common Misconceptions About Payment</a>
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
                    <a href="#">
                      <span className="category">Business</span>
                    </a>
                    <a href="#">
                      <img src="assets/images/blog/3.svg" alt="blog-title" />
                    </a>
                  </div>
                  <div className="details">
                    <h4 className="my-0 title">
                      <a href="#">3 Things To Know About Startup Business</a>
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
