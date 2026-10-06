import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Social Sense AI",
    category: "PRODUCT · GENERATIVE AI",
    eyebrow: "HaX Lab · Team of 4",
    badge: "1st Place · PROPEL Tech National Innovation Challenge",
    tagline: "Real-world social confidence, practiced in a safe space.",
    description:
      "A privacy-first Apple ecosystem app using generative AI to help people with social anxiety practice conversations in a safe environment.",
    details:
      "Owned product vision and UX, integrated Apple Maps API into the matching experience, wrote and directed the submission video, and led final-round pitch development and slide design.",
    impact:
      "1st out of 1,100+ student competitors nationally · $35,000 prize",
    tools: [
      "Unity",
      "Generative AI",
      "Apple Maps API",
      "React + Vite",
      "Supabase",
      "AssemblyAI",
    ],
    image: "/propel-win.jpeg",
    imageAlt: "HaX Lab team winning the PROPEL Tech Innovation Challenge",
    featured: true,
    links: [
      { label: "Pitch video", href: null },
      { label: "Full story", href: null },
    ],
  },

  {
    number: "02",
    title: "VerseMate",
    category: "AI · RESEARCH",
    eyebrow: "HaX Lab · Solo Project",
    badge: "Research in Progress",
    tagline: "An AI companion for daily devotion and reflection.",
    description:
      "A conversational AI companion connecting real-life situations and emotions to relevant scripture through personalized conversations.",
    details:
      "Built end-to-end from a FastAPI backend to a web frontend deployed on Vercel. I am preparing an IRB-reviewed user study to examine how conversational AI may shape spiritual engagement and reflection.",
    impact:
      "Preparing for an IRB-reviewed user study and future publication.",
    tools: ["Python", "FastAPI", "JavaScript", "Vercel"],
    image: "/versemate.png",
    imageAlt: "VerseMate AI companion home screen",
    links: [
      {
        label: "Try VerseMate",
        href: "https://verse-mate-vercel-17w2-pbhyfrcix-feaakin-7041s-projects.vercel.app",
      },
    ],
  },

  {
    number: "03",
    title: "SAGE",
    category: "HEALTH · AI",
    eyebrow: "HaX Lab · Team of 4 · Project Lead",
    badge: "Project Lead",
    tagline: "Substance use screening that explains itself in plain language.",
    description:
      "A patient-centered screening experience designed to make substance use screening feel less clinical and more understandable.",
    details:
      "Led the team from kickoff to final prototype, established timelines and deliverables, opened the literature review, coordinated AUDIT and DAST research, and merged the team's work into one cohesive experience.",
    impact:
      "Interactive prototype covering onboarding, screening, plain-language results, AI-guided brief intervention, local resources, and a clinician portal.",
    tools: ["Figma", "LLM-guided conversation design"],
    image: "/sage.png",
    imageAlt: "SAGE substance use screening prototype",
    links: [
      {
        label: "View Figma prototype",
        href: "https://www.figma.com/design/HDEFIucJSGQyhPzrsqAu7V/SAGE---Screening?node-id=11-81&t=10uK8yTkYKEttVG1-1",
      },
    ],
  },

  {
    number: "04",
    title: "Neurova",
    category: "EEG · RESEARCH",
    eyebrow: "HaX Lab · Solo Project",
    badge: "Early Research Prototype",
    tagline: "Detecting pain in patients who can't tell you they're hurting.",
    description:
      "A research prototype exploring whether EEG signals can provide a continuous indicator of pain for patients who cannot reliably communicate using traditional pain scales.",
    details:
      "Built the EEG streaming pipeline, signal processing workflow, live dashboard, and pain stimulus experiment using consumer EEG hardware and Python-based analysis.",
    impact:
      "Early-stage research prototype. Not clinically validated and not intended to diagnose or replace licensed professionals.",
    tools: [
      "Muse 2 EEG",
      "Python",
      "muselsl",
      "NumPy",
      "pandas",
      "SciPy",
      "Matplotlib",
    ],
    image: "/neurova.png",
    imageAlt: "Neurova EEG pain detection research prototype",
    imageFit: "contain",
    imagePosition: "center center",
    imageBackground: "#f4f1eb",
    links: [
      { label: "Demo", href: null },
      { label: "GitHub", href: null },
    ],
  },

  {
    number: "05",
    title: "AI Release Documentation System",
    category: "ENTERPRISE · AI",
    eyebrow: "Markel Insurance · Business Systems Analyst",
    badge: "Internship",
    tagline: "Release summaries that document themselves.",
    description:
      "An AI-assisted system designed to connect implementation evidence across development and project-management systems and turn it into traceable technical release documentation.",
    details:
      "Built a workflow that retrieves evidence from Azure DevOps and Jira, validates relationships between implementation and work items, and generates structured technical summaries. Also built an agentic AI workflow inside Jira to automate PM tasks.",
    impact:
      "Presented the solution and its future-state workflow to senior leadership.",
    tools: [
      "Azure DevOps",
      "Jira MCP",
      "Claude Code",
      "Streamlit",
      "Prompt Engineering",
    ],
    image: "/markel.png",
    imageAlt: "Markel Insurance logo",
    markel: true,
    links: [],
  },

  {
    number: "06",
    title: "PM Everywhere",
    category: "AGENTIC AI · PRODUCT",
    eyebrow: "VISTA Agentic AI Hackathon × InternXL · Team of 5",
    badge: "Product Owner",
    tagline: "Manage your projects by just asking.",
    description:
      "An agentic AI layer that allows project managers to interact with their project tools using plain-language requests instead of manually updating each system.",
    details:
      "Served as product owner, wrote user stories, shaped the product vision, and refined the final presentation. The team connected Smartsheet, Google Sheets, and Jira into one conversational workflow.",
    impact:
      "Designed to reduce duplicate project updates and simplify cross-platform project management.",
    tools: [
      "Agentic AI",
      "Smartsheet",
      "Google Sheets",
      "Jira APIs",
    ],
    image: "/vista-hackathon.png",
    imageAlt: "VISTA Agentic AI Hackathon",
    links: [
      { label: "Demo", href: null },
      { label: "GitHub", href: null },
    ],
  },
];
const experience = [
  {
    year: "JUN — AUG 2026",
    title: "Business Systems Analyst Intern",
    organization: "Markel Insurance",
    location: "Richmond, VA",
    description:
      "Built an AI release documentation system and agentic AI workflow in Jira. Presented both solutions and the future-state workflow to senior leadership.",
    brand: "MARKEL",
    type: "markel",
  },

  {
    year: "NOV 2025 — PRESENT",
    title: "Undergraduate Researcher",
    organization: "HaX Lab · Morgan State University",
    location: "Baltimore, MD",
    description:
      "Designing and building human-centered AI products including SAGE, VerseMate, Neurova, and Social Sense AI, with a focus on communities technology often overlooks.",
    brand: "HAX LAB",
    type: "hax",
  },

  {
    year: "MAY — AUG 2025",
    title: "AI & Machine Learning Research Intern",
    organization: "CEAMLS AI Research Institute",
    location: "Baltimore, MD",
    description:
      "Developed and evaluated Random Forest, SVM, and neural network models while applying preprocessing and time-series techniques to 35,000+ observations across two environmental datasets.",
    brand: "CEAMLS",
    type: "ceamls",
  },
];

const leadership = [
  {
    title: "Founder & President",
    organization:
      "Project Management Organization · Morgan State University",
    date: "MAY 2025 — PRESENT",
    description:
      "Founded Morgan State's first Project Management Organization. Built a 60+ member community and organized professional development and networking experiences.",
  },

  {
    title: "Vice President",
    organization: "Association of Information Technology Society",
    date: "MAY 2026 — PRESENT",
    description:
      "Lead technology initiatives across AI, information systems, and emerging technology while connecting student development to career opportunities.",
  },

  {
    title: "Student Affairs Coordinator",
    organization: "Morgan State University Investment Club",
    date: "OCT 2025 — PRESENT",
    description:
      "Support student engagement and organizational programming within the investment community.",
  },

  {
    title: "Board Member",
    organization:
      "Graves School of Business Dean's Student Advisory Board",
    date: "MAY 2026 — PRESENT",
    description:
      "Represent student perspectives and contribute to conversations around the student experience within the business school.",
  },
];

const awards = [
  {
    title: "Martin D. Jenkins Scholar",
    organization: "Full-Ride Scholarship",
    highlight: "Full-ride scholarship · 4-year commitment",
    year: "2024",
    artifact: "/jenkins-scholarship.jpeg",
    artifactAlt: "Martin D. Jenkins Scholar recognition",
  },

  {
    title: "1st Place",
    organization: "Inaugural HBCU Brain Drone Race",
    highlight: "Winner · $1,000 prize",
    year: "2025",
    artifact: "/brain-drone-race.jpeg",
    artifactAlt: "HBCU Brain Drone Race first place recognition",
  },

  {
    title: "2nd Place",
    organization:
      "HBCU Career Development Marketplace Oratorical Competition",
    highlight: "National student speaking competition",
    year: "2025",
    artifact: "/oratorical-competition.jpeg",
    artifactAlt:
      "HBCU Career Development Marketplace Oratorical Competition recognition",
  },

  {
    title: "JPMorgan Chase / SYE Scholar",
    organization: "Scholarship for Student Leaders",
    highlight: "Student leadership scholarship · $2,500",
    year: "2025",
    artifact: "/jpmorgan-scholarship.png",
    artifactAlt: "JPMorgan Chase and SYE Scholar recognition",
  },

  {
    title: "Causeway Capital Management Mentorship",
    organization: "Causeway Capital Management",
    highlight: "Mentorship sponsorship · $500",
    year: "2025",
    artifact: null,
  },

  {
    title: "2nd Year Outstanding Student",
    organization: "Morgan State University",
    highlight: "Campus recognition for student excellence",
    year: "2026",
    artifact: null,
  },

  {
    title: "Dean's List",
    organization: "Morgan State University",
    highlight: "4-time academic recognition",
    year: "2024 — 2026",
    artifact: null,
  },
];

const programs = [
  {
    title: "TMCF Leadership Institute",
    organization: "Student Leader · Washington, DC",
    detail:
      "Selected through every stage of a competitive process: 1 of 500 scholars selected from 3,000+ applicants, then 1 of 30 student leaders, and finally 1 of 10 selected for the VIP reception at the Smithsonian's National Museum of African American History and Culture.",
    year: "SEP 2026",
    selection: "3,000+ → 500 → 30 → 10",
    standout: true,
  },

  {
    title: "VISTA Agentic AI Hackathon",
    organization: "Fellow · Scottsdale, AZ",
    detail:
      "Selected from a competitive national pool as 1 of 12 students nationwide. I joined Team Smartsheet, where I worked alongside industry professionals from Smartsheet to build PM Everywhere, an agentic AI solution designed to simplify how project managers interact with their project management tools.",
    year: "2026",
    selection: "1 of 12 nationwide",
    standout: true,
  },

  {
    title: "Boeing Immersion Scholar × TMCF",
    organization: "Scholar · St. Louis, MO",
    detail:
      "Selected from a competitive national pool as 1 of 50 scholars nationwide for executive engagement, aerospace innovation, and immersive professional development.",
    year: "JUN 2026",
    selection: "1 of 50 nationwide",
  },

  {
    title: "UNCF STEM Innovation Conference",
    organization: "Scholar · San Francisco, CA",
    detail:
      "Selected from a competitive national pool as 1 of 50 scholars nationwide. Built an AI prototype and completed an AI session through SJECCD.",
    year: "MAR 2026",
    selection: "1 of 50 nationwide",
    standout: true,
  },

  {
    title: "DevCon Scholar × TMCF",
    organization: "Scholar · Washington, DC",
    detail:
      "Selected for a competitive professional development experience focused on technology industry navigation, public speaking, and career development.",
    year: "FEB 2026",
    selection: "Competitive selection",
  },

  {
    title: "Google Cloud Career Launchpad × TMCF",
    organization: "Scholar",
    detail:
      "Selected for hands-on cloud computing and generative AI training through a competitive scholar cohort.",
    year: "JAN — JUN 2026",
    selection: "Competitive selection",
  },

  {
    title: "Management Leadership for Tomorrow",
    organization: "Career Preparation Fellow · Software Engineering Track",
    detail:
      "Selected as a Career Preparation Fellow for MLT's competitive 18-month program. Also selected from the cohort to attend MLT's Summer Seminar at Deloitte University in Dallas, Texas, in August 2026.",
    year: "OCT 2025 — PRESENT",
    selection: "Selected Fellow · Summer Seminar",
    standout: true,
  },

  {
    title: "HBCU IMPACT",
    organization: "Selected Scholar · Pittsburgh, PA / Charlotte, NC",
    detail:
      "Selected to attend HBCU IMPACT in Pittsburgh in September 2025, then selected again as an alum to return for the September 2026 experience in Charlotte, North Carolina.",
    year: "SEP 2025 · SEP 2026",
    selection: "Selected twice",
  },

  {
    title: "Deloitte Accounting Leadership Summit",
    organization: "Selected Participant · Deloitte University · Dallas, TX",
    detail:
      "Selected to attend an immersive leadership experience at Deloitte University focused on learning about the accounting profession, networking with Deloitte professionals, and exploring how different majors and career aspirations can connect to the industry.",
    year: "2026",
    selection: "Competitive selection",
  },

  {
    title: "HBCU Battle of the Brains",
    organization: "Selected Team Member · Team of 5",
    detail:
      "Selected through a rigorous interview process to represent Morgan State on a five-person team in a cross-disciplinary competition centered on developing and pitching a solution to a complex challenge.",
    year: "2026",
    selection: "Rigorous team selection",
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

function BrandMark({ type, brand }) {
  const logos = {
    markel: "/markel.png",
    hax: "/hax-lab.png",
    ceamls: "/ceamls.png",
  };

  return (
    <div className={`brand-mark brand-${type}`}>
      <img src={logos[type]} alt={`${brand} logo`} />
      <span>{brand}</span>
    </div>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>

      <h2>{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`project-card ${
        project.featured ? "project-featured" : ""
      }`}
    >
      {project.image && (
        <div
          className="project-image-wrap"
          style={
            project.imageBackground
              ? { background: project.imageBackground }
              : undefined
          }
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="project-image"
            style={{
              objectFit: project.imageFit || "cover",
              objectPosition:
                project.imagePosition || "center center",
            }}
          />

          <div className="project-number">
            {project.number}
          </div>
        </div>
      )}

      {!project.image && (
        <div
          className={`project-visual ${
            project.markel ? "project-markel" : ""
          }`}
        >
          <div>
            <span className="project-number-static">
              {project.number}
            </span>

            <p className="visual-small">
              {project.markel
                ? "MARKEL INSURANCE"
                : project.eyebrow}
            </p>

            <p className="visual-large">
              {project.title}
            </p>
          </div>
        </div>
      )}

      <div className="project-content">
        <div className="project-meta-row">
          <p className="project-eyebrow">
            {project.eyebrow}
          </p>

          <span className="project-badge">
            {project.badge}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-tagline">
          {project.tagline}
        </p>

        <p className="project-description">
          {project.description}
        </p>

        <button
          className="details-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open
            ? "Hide project details"
            : "View project details"}

          <span className={open ? "rotate-arrow" : ""}>
            <ArrowDown />
          </span>
        </button>

        {open && (
          <div className="project-details">
            <p>{project.details}</p>

            <div className="impact-block">
              <span>IMPACT / STATUS</span>
              <p>{project.impact}</p>
            </div>

            <div className="tool-list">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        )}

        {project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {link.label}
                  <ArrowUpRight />
                </a>
              ) : (
                <span
                  key={link.label}
                  className="project-link project-link-disabled"
                >
                  {link.label}

                  <span className="coming-soon">
                    Coming soon
                  </span>
                </span>
              )
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);


  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <nav className="nav floating-nav">
        <a
          href="#top"
          className="nav-logo"
          onClick={closeMobile}
        >
          FA<span>.</span>
        </a>

        <div
          className={`nav-links ${
            mobileOpen ? "nav-open" : ""
          }`}
        >
          <a href="#about" onClick={closeMobile}>
            About
          </a>

          <a href="#work" onClick={closeMobile}>
            Work
          </a>

          <a href="#experience" onClick={closeMobile}>
            Experience
          </a>

          <a href="#leadership" onClick={closeMobile}>
            Leadership
          </a>

          <a href="#contact" onClick={closeMobile}>
            Contact
          </a>

          <a
            href="/Fikewa%20Akindolire-%20Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
            onClick={closeMobile}
          >
            Resume <ArrowUpRight />
          </a>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <main id="top">
        {/* HERO */}

        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">
              AI / ML PRODUCT · LEADERSHIP · INNOVATION
            </p>

            <h1>
              Lead with vision.
              <br />
              <em>Strike with impact.</em>
            </h1>

            <p className="hero-intro">
              I'm Fikewa Akindolire, an honors junior studying
              Information Science and Systems at Morgan State
              University and an aspiring AI/ML product manager
              building technology for the people it too often
              overlooks.
            </p>

            <div className="hero-credentials">
  <a
    href="#work"
    className="hero-credential-card"
  >
    <span>
      1st Place, PROPEL Tech National Innovation Challenge
    </span>

  </a>

  <a
    href="#awards"
    className="hero-credential-card"
  >
    <span>
      Full-Ride Martin D. Jenkins Scholar
    </span>
  </a>

  <a
    href="#leadership"
    className="hero-credential-card"
  >
    <span>
      Founder, Morgan State Project Management Organization
    </span>
  </a>
</div>

            <div className="hero-actions">
              <a
                href="#work"
                className="button button-dark"
              >
                See my work
                <ArrowUpRight />
              </a>

              <a
                href="/Fikewa%20Akindolire-%20Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                Download resume
                <ArrowUpRight />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img
                src="/fikewa.png"
                alt="Fikewa Akindolire"
                className="hero-photo"
              />
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <span>Scroll to explore</span>
            <ArrowDown />
          </a>
        </section>

        {/* ABOUT */}

        <section
          id="about"
          className="about-section section-pad"
        >
          <SectionIntro
            eyebrow="ABOUT"
            title="A product mind with a purpose bigger than the product."
            description="I care about what we build, who we build it for, and what happens when someone finally feels seen by the technology in front of them."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p className="about-lead">
                I'm a visionary at heart, and I strive for
                excellence in everything I do.
              </p>

              <p>
                I grew up in a Nigerian household, raised by
                parents who immigrated to America in search of
                better opportunities. They instilled in me a
                deep sense of purpose and a drive to make the
                most of every door they worked so hard to open.
              </p>

              <p>
                But my purpose truly began to reveal itself
                when I gave my life to Christ and let Him lead
                my path, a lamp unto my feet. I began to see how
                God uniquely crafted me in His image and for His
                glory, and how the gifts He's given me were meant
                to be used. As I followed His lead, doors
                started to open, and He showed me the power in
                my voice. Today I use that voice to pitch
                products, lead teams, and advocate for the
                people I build for.
              </p>

              <p>
                That drive shows up in both my student
                leadership and my career in AI/ML product
                management. I founded Morgan State's first
                Project Management Organization, and through my
                research and internships, I focus on building AI
                products that serve communities technology often
                overlooks, from people living with social
                anxiety to patients who can't speak for
                themselves.
              </p>

              <p>
                Outside of work, missionary work and sharing the
                gospel around the world are close to my heart.
                I've played lacrosse for over four years and
                competed in the high jump in track. More than
                anything, I love being a servant leader: meeting
                people where they are and using what I've been
                blessed with to help someone else rise.
              </p>

              <p className="about-closing">
                I lead with vision and strike with impact.
              </p>
            </div>

            <div className="about-photo-column">
              <div className="about-photo-main">
                <img
                  src="/fikewa2.jpeg"
                  alt="Fikewa Akindolire"
                />
              </div>

              <div className="about-note">
                <span>MY GUIDING PRINCIPLE</span>

                <p className="about-verse">
                  “I can do all things through Christ who
                  strengthens me.”
                </p>

                <small>Philippians 4:13</small>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}

        {/* WORK */}

        {/* WORK */}

                {/* WORK */}

        <section
          id="work"
          className="work-section section-pad"
        >
          <SectionIntro
            eyebrow="SELECTED WORK"
            title="Ideas are easy. I care about what happens next."
            description="From research prototypes to competition-winning products, I like taking an idea from a problem worth solving to something people can actually experience."
          />

          {/* FEATURED / FIRST THREE PROJECTS */}

          <div className="projects-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>

          {/* MORE WORK TEASER */}

          {!showAllProjects && (
            <div className="more-work-teaser">
              <div className="more-work-heading">
                <span>MORE SELECTED WORK</span>

                <p>
                  Three more projects across research,
                  enterprise AI, and product development.
                </p>
              </div>

              <div className="more-work-preview-grid">
                {projects.slice(3).map((project) => (
                  <button
                    type="button"
                    className="more-work-preview"
                    key={project.title}
                    onClick={() => setShowAllProjects(true)}
                  >
                    <div className="more-work-preview-image">
                      <img
                        src={project.image}
                        alt=""
                        style={{
                          objectFit:
                            project.imageFit || "cover",
                          objectPosition:
                            project.imagePosition ||
                            "center center",
                          background:
                            project.imageBackground ||
                            "transparent",
                        }}
                      />

                      <div className="more-work-preview-overlay" />

                      <span className="more-work-preview-number">
                        {project.number}
                      </span>
                    </div>

                    <div className="more-work-preview-info">
                      <span>
                        {project.title}
                      </span>

                      <ArrowUpRight />
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="more-work-toggle"
                onClick={() => setShowAllProjects(true)}
              >
                <span className="more-work-toggle-small">
                  CONTINUE EXPLORING
                </span>

                <strong>
                  Explore more work
                </strong>

                <span className="more-work-toggle-arrow">
                  ↓
                </span>
              </button>
            </div>
          )}

          {/* EXPANDED PROJECTS */}

          {showAllProjects && (
            <div className="more-work-expanded">
              <div className="more-work-expanded-heading">
                <span>MORE SELECTED WORK</span>

                <div className="more-work-expanded-line" />
              </div>

              <div className="projects-grid">
                {projects.slice(3).map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ))}
              </div>

              <button
                type="button"
                className="more-work-collapse"
                onClick={() => {
                  setShowAllProjects(false);

                  document
                    .getElementById("work")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                <span>Show less</span>
                <span>↑</span>
              </button>
            </div>
          )}
        </section>


        {/* EXPERIENCE */}

        <section
          id="experience"
          className="experience-section section-pad"
        >
          <SectionIntro
            eyebrow="EXPERIENCE"
            title="Where I turn curiosity into capability."
            description="A growing body of work across AI research, product development, and business systems."
          />

          <div className="experience-list">
            {experience.map((item) => (
              <article
                className="experience-item"
                key={item.organization}
              >
                <div className="experience-year">
                  {item.year}
                </div>

                <BrandMark
                  type={item.type}
                  brand={item.brand}
                />

                <div className="experience-main">
                  <h3>{item.title}</h3>

                  <p className="experience-org">
                    {item.organization}
                  </p>

                  <p className="experience-location">
                    {item.location}
                  </p>

                  <p>{item.description}</p>
                </div>

                <span className="experience-arrow">
                  <ArrowUpRight />
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}

        {/* LEADERSHIP */}

        <section
          id="leadership"
          className="leadership-section"
        >
          <div className="leadership-photo">
            <img
              src="/fikewa3.png"
              alt="Fikewa Akindolire"
            />

            <div className="leadership-photo-overlay"></div>

            <div className="leadership-photo-caption">
              <span>LEADERSHIP</span>
              <p>Creating rooms worth being in.</p>
            </div>
          </div>

          <div className="leadership-content section-pad">
            <p className="eyebrow">
              LEADERSHIP & RECOGNITION
            </p>

            <h2>
              I don't just join rooms. I create them.
            </h2>

            <div className="leadership-list">
              {leadership.map((item) => (
                <article
                  className="leadership-item"
                  key={item.title + item.organization}
                >
                  <div>
                    <span className="leadership-date">
                      {item.date}
                    </span>

                    <h3>{item.title}</h3>

                    <p className="leadership-org">
                      {item.organization}
                    </p>
                  </div>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

     {/* AWARDS */}

<section
  id="awards"
  className="recognition-section section-pad"
>
  <div className="recognition-heading">
    <div>
      <p className="eyebrow">
        AWARDS & HONORS
      </p>

      <h2>
        Proof points, not just titles.
      </h2>
    </div>

    <p>
      The opportunities below reflect a pattern I
      care about: showing up prepared, creating value,
      and earning the trust to do more.
    </p>
  </div>

  <div className="awards-grid">
    {awards.map((award) => (
      <article
        className="award-card"
        key={award.title + award.organization}
      >
        <div className="award-topline">
          <span>{award.year}</span>
          <b>HONOR</b>
        </div>

        <h3>{award.title}</h3>

        <p>{award.organization}</p>

        <div className="award-highlight">
          {award.highlight}
        </div>

        {award.artifact && (
          <button
            type="button"
            className="award-artifact-button"
            onClick={() => setSelectedAward(award)}
          >
            <span>View recognition</span>
            <ArrowUpRight />
          </button>
        )}
      </article>
    ))}
  </div>
</section>

{/* AWARD ARTIFACT LIGHTBOX */}

{selectedAward && (
  <div
    className="award-lightbox"
    role="dialog"
    aria-modal="true"
    aria-label={`${selectedAward.title} recognition`}
    onClick={() => setSelectedAward(null)}
  >
    <div
      className="award-lightbox-inner"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="award-lightbox-close"
        onClick={() => setSelectedAward(null)}
        aria-label="Close recognition"
      >
        <CloseIcon />
      </button>

      <div className="award-lightbox-media">
        <img
          src={selectedAward.artifact}
          alt={selectedAward.artifactAlt}
        />
      </div>

      <div className="award-lightbox-caption">
        <div>
          <span>
            {selectedAward.year} · RECOGNITION
          </span>

          <h3>{selectedAward.title}</h3>

          <p>{selectedAward.organization}</p>
        </div>

        <div className="award-lightbox-highlight">
          {selectedAward.highlight}
        </div>
      </div>
    </div>
  </div>
)}
        {/* PROGRAMS */}

        <section className="programs-section section-pad">
          <div className="recognition-heading">
            <div>
              <p className="eyebrow">
                SELECTED OPPORTUNITIES
              </p>

              <h2>
                Rooms I was invited into.
              </h2>
            </div>

            <p>
              Every opportunity below was a competitive selection.
              Together, they reflect the rooms I've been trusted
              to enter, learn in, and contribute to.
            </p>
          </div>

          {/* FIRST 6 OPPORTUNITIES */}

          <div className="programs-grid programs-main-grid">
            {programs.slice(0, 6).map((program) => (
              <article
                className={`program-card ${
                  program.standout
                    ? "program-standout"
                    : ""
                }`}
                key={program.title}
              >
                <div className="program-top">
                  <span>{program.year}</span>

                  <b>{program.selection}</b>
                </div>

                <h3>{program.title}</h3>

                <p className="program-org">
                  {program.organization}
                </p>

                <p className="program-detail">
                  {program.detail}
                </p>
              </article>
            ))}
          </div>

          {/* TEASER STACK */}

          {!showAllPrograms && (
            <div className="program-discovery">
              <div className="program-stack">
                {programs.slice(6, 9).map((program, index) => (
                  <button
                    type="button"
                    className={`program-preview-card program-preview-${
                      index + 1
                    }`}
                    key={program.title}
                    onClick={() => setShowAllPrograms(true)}
                    aria-label={`Explore more opportunities, including ${program.title}`}
                  >
                    <div className="program-preview-top">
                      <span>{program.year}</span>

                      <span className="program-preview-number">
                        0{index + 7}
                      </span>
                    </div>

                    <div className="program-preview-content">
                      <h3>{program.title}</h3>

                      <p>{program.selection}</p>
                    </div>
                  </button>
                ))}

                <button
                  type="button"
                  className="program-stack-more"
                  onClick={() => setShowAllPrograms(true)}
                >
                  <span>+</span>
                  <small>
                    {programs.length - 9} MORE
                  </small>
                </button>
              </div>

              <div className="program-discovery-copy">
                <span className="program-discovery-eyebrow">
                  MORE ROOMS TO EXPLORE
                </span>

                <h3>
                  The story continues.
                </h3>

                <p>
                  There are {programs.length - 6} more selected
                  opportunities behind this stack.
                </p>

                <button
                  type="button"
                  className="program-explore-button"
                  onClick={() => setShowAllPrograms(true)}
                  aria-expanded={showAllPrograms}
                >
                  <span>Explore more rooms</span>

                  <span className="program-explore-arrow">
                    <ArrowDown />
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* REVEALED OPPORTUNITIES */}

          {showAllPrograms && (
            <div className="program-expanded-area">
              <div className="program-expanded-heading">
                <div>
                  <span>MORE SELECTED OPPORTUNITIES</span>

                  <h3>
                    More rooms. More perspective.
                  </h3>
                </div>

                <p>
                  Each experience added another perspective to
                  how I approach technology, leadership, and
                  problem solving.
                </p>
              </div>

              <div className="programs-grid program-reveal-grid">
                {programs.slice(6).map((program) => (
                  <article
                    className={`program-card ${
                      program.standout
                        ? "program-standout"
                        : ""
                    }`}
                    key={program.title}
                  >
                    <div className="program-top">
                      <span>{program.year}</span>

                      <b>{program.selection}</b>
                    </div>

                    <h3>{program.title}</h3>

                    <p className="program-org">
                      {program.organization}
                    </p>

                    <p className="program-detail">
                      {program.detail}
                    </p>
                  </article>
                ))}
              </div>

              <div className="program-collapse-wrap">
                <button
                  type="button"
                  className="program-collapse-button"
                  onClick={() => setShowAllPrograms(false)}
                  aria-expanded={showAllPrograms}
                >
                  <span>Show fewer opportunities</span>

                  <span className="program-collapse-arrow">
                    <ArrowDown />
                  </span>
                </button>
              </div>
            </div>
          )}
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="contact-section section-pad"
        >
          <div className="contact-inner">
            <p className="eyebrow">
              LET'S CONNECT
            </p>

            <h2>
              Let's build something
              <br />
              <em>that matters.</em>
            </h2>

            <p className="contact-copy">
              I'm open to AI/ML product management
              opportunities, research collaborations, and
              conversations about building technology for
              overlooked communities.
            </p>

            <div className="contact-links">
              <a
                href="mailto:Fea.akin@gmail.com"
                className="contact-link"
              >
                <span>Email</span>
                <span>Fea.akin@gmail.com</span>
                <ArrowUpRight />
              </a>

              <a
                href="https://www.linkedin.com/in/fikewa-akindolire"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>LinkedIn</span>
                <span>/fikewa-akindolire</span>
                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/Fikewa-Akindolire"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>GitHub</span>
                <span>/Fikewa-Akindolire</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>
            FA<span>.</span>
          </strong>

          <p>
            Lead with vision. Strike with impact.
          </p>
        </div>

        <p>
          © {new Date().getFullYear()} Fikewa Akindolire
        </p>

        <a href="#top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
