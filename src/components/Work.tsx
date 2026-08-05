import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkImage from "./WorkImage";
import "./styles/Work.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    id: 1,
    title: "Wells Fargo Enterprise Onboarding",
    image: "/images/wellsfargo.png",
    company: "Persistent Systems • Wells Fargo",
    duration: "Jul 2025 – Present",
    category: "Enterprise Document Management",

    description:
      "Built an enterprise onboarding platform using React.js and Micro Frontend Architecture. Developed reusable components, dynamic forms, document upload workflows and REST API integrations while migrating legacy RIA-3 modules to Pioneer Design System.",

    tools: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Micro Frontend",
      "REST APIs",
      "Jest",
      "RTL"
    ],

    responsibilities: [
      "Reusable UI Components",
      "Document Upload Workflow",
      "Pioneer Design Migration",
      "REST API Integration",
      "Performance Optimization"
    ]
  },

  {
    id:2,
    title:"Builder.ai Booking Platform",
    image:"/images/Builder.png",
    company:"Apexon • Builder.ai",
    duration:"Aug 2024 – Jun 2025",
    category:"Booking Platform",

    description:
      "Developed customer-facing booking experiences using React.js and Next.js with responsive UI, reusable components and optimized REST API integrations.",

    tools:[
      "React.js",
      "Next.js",
      "TypeScript",
      "Axios",
      "REST APIs"
    ],

    responsibilities:[
      "Responsive UI",
      "Reusable Components",
      "API Integration",
      "Performance",
      "Accessibility"
    ]
  },

  {
    id:3,
    title:"HDFC MyCards",
    image:"/images/MyCards.png",
    company:"Reward360 • HDFC",
    duration:"Sep 2022 – Feb 2024",
    category:"Enterprise Banking PWA",

    description:
      "Built a Progressive Web Application for HDFC MyCards featuring authentication, rewards, transactions, secure APIs and customer dashboard.",

    tools:[
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "JWT",
      "REST APIs"
    ],

    responsibilities:[
      "Authentication",
      "Rewards Module",
      "Transactions",
      "Dashboard",
      "PWA"
    ]
  },

  {
    id:4,
    title:"Asian Paints Dashboard",
    image:"/images/Asian.png",
    company:"doodleblue • Asian Paints",
    duration:"Jul 2021 – Sep 2021",
    category:"Business Dashboard",

    description:
      "Created interactive sales dashboards using React.js and Chart.js with real-time analytics, reports and responsive layouts.",

    tools:[
      "React.js",
      "Chart.js",
      "REST APIs",
      "JavaScript"
    ],

    responsibilities:[
      "Sales Analytics",
      "Interactive Charts",
      "REST APIs",
      "Responsive Dashboard"
    ]
  },

  {
    id:5,
    title:"Airline Reservation System",
    image:"/images/Airline.png",
    company:"Cod4Solutions",
    duration:"Jan 2018 – Dec 2020",
    category:"Flight Booking Platform",

    description:
      "Developed airline booking and reservation workflows including flight search, passenger management and online reservation modules.",

    tools:[
      "React.js",
      "Redux",
      "JavaScript",
      "REST APIs"
    ],

    responsibilities:[
      "Flight Search",
      "Booking Workflow",
      "Passenger Module",
      "Redux",
      "REST APIs"
    ]
  }
];
const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track) return;

      const media = gsap.matchMedia();

      const distance = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth);

      media.add("(min-width:1025px)", () => {
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.kill();
      });

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="work-section" ref={sectionRef} id="work">
      <div className="work-heading">
        <h2>
          My <span>Projects</span>
        </h2>
      </div>

      <div className="work-viewport" ref={viewportRef}>
        <div className="work-flex" ref={trackRef}>
          {projects.map((project, index) => (
            <article className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <div className="work-meta">
                  <p>
                    <strong>Company :</strong> {project.company}
                  </p>

                  <p>
                    <strong>Duration :</strong> {project.duration}
                  </p>
                </div>

                <p className="work-description">{project.description}</p>

                <h4>Technology Stack</h4>

                <div className="tool-list">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tool-badge">
                      {tool}
                    </span>
                  ))}
                </div>

                <h4>Key Responsibilities</h4>

                <ul className="responsibility-list">
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;