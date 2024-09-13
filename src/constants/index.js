import {
  tic,
  mojag,
  retro,
  lia,
  krogare,
  chuck,
  protech,
  boras,
  snake,
  yrgo,
  scaffcalc,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,  
  anki,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },  
];

const experiences = [
  {
    title: "Nursing Assistant",
    company_name: "Östra Sjukhuset",
    icon: snake,
    iconBg: "#383E56",
    date: "March 2004 - April 2010",
    points: [
      "Assisting patients with daily activities such as bathing, dressing, and eating.",
      "Standard medical procedures such as taking vital signs, administering medication, and changing bandages and taking blood samples.",
      "Working in multidisciplinary teams to provide comprehensive care to patients.",      
    ],
  },
  {
    title: "Fil. Kand. Nursing",
    company_name: "Borås Högskola",
    icon: boras,
    iconBg: "#E6DEDD",
    date: "Sep 2010 - Jun 2013",
    points: [
      "Nursing theory and practice.",
      "Medical and surgical nursing.",
      "Nursing research.",
      "Pharmacology.",
      "Caring science.",
    ],
  },
  {
    title: "Reg. Nurse",
    company_name: "Östra Sjukhuset",
    icon: snake,
    iconBg: "#383E56",
    date: "Jun 2013 - Jan 2016",
    points: [
      "Providing direct patient care, including administering medication, dressing wounds, and monitoring vital signs.",
      "Collaborating with other healthcare professionals to develop and implement care plans.",
      "Educating patients and their families about their conditions and treatment options.",
      "Maintaining accurate medical records and ensuring patient confidentiality",
      "Supervising nursing assistants and other support staff.",
      "In Intensive care unit for heart patiences with intensive and urgent cardio treatments such as 'Simdax', 'Corotrop' etc .",
    ],
  },
  {
    title: "Fil. Mag. Aneasthesic Nurse",
    company_name: "Borås Högskola",
    icon: boras,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Dec 2023",
    points: [
     "Learning Anesthesic care.",
      "How to administering anesthesia and monitoring patients during surgery.",
      "How to provide post-operative care and pain management.",
      "Learn to collaborating with surgeons, anesthesiologists, and other healthcare professionals to ensure patient safety.",
      
    ],
  },
  {
    title: "Aneasthesic Nurse",
    company_name: "Sahlgrenska Sjukhuset, Region Halland, Kålltorps Hospice",
    icon: snake,
    iconBg: "#383E56",
    date: "Jan 2016 - Dec 2023",
    points: [
     "Anesthesia care for patients undergoing surgery.",
      "Administering anesthesia and monitoring patients during surgery.",
      "Providing post-operative care and pain management.",
      "Collaborating with surgeons, anesthesiologists, and other healthcare professionals to ensure patient safety.",
      "Participating in emergency response teams to provide critical care in life-threatening situations.",
      "Caring for patients at the end of life in hospice care.",
    ],
  },
  {
    title: "Fullstack Developer program",
    company_name: "Yrgo",
    icon: yrgo,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jun 2025",
    points: [
      "Frontend development using HTML, CSS, and JavaScript.",
      "Backend development using Node.js and Express, PHP etc.",
      "Database management with both relational and non-relational databases.",
      "Version control with Git and GitHub.",
      "Building and deploying web applications.",
      "Working with APIs and third-party services.",
      "Creating responsive and accessible user interfaces.",
      "Testing and debugging code.",
      "Using librarys and frameworks such as React, Next, Tailwind, Redux, Three.js, Laravel etc.",
    ],
  },
  {
    title: "Fullstack Developer Internship",
    company_name: "Scaffcalc",
    icon: scaffcalc,
    iconBg: "#383E56",
    date: "Nov 2024 - Mar 2025",
    points: [
     "Developing and maintaining scaffolding software. Built in react with three.js for 3d modeling alongside three/fiber, three/drei etc.",
     "Working with a team of developers to create new features and improve existing ones.",
      "Writing clean, efficient code that meets project requirements.",
      "Testing and debugging code to ensure it works correctly.",
      "State management with Zustand Toolkit.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Grymt jobbat! Så glad över det ni har åstadkommit! 😊 Vi är så glada över vår nya sida.",
    name: "Anja Nerhall",
    designation: "Head of Purchase Analysis",
    company: "Svenska Krögare",
    image: "https://www.krogare.se/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fixwfuyd01yvl%2F5h2NpgygBwiZcmfsASIRXH%2F62a143a0fe75cda92687443a358b836e%2FAnja_Nerhall.jpg&w=384&q=75",
  },
  {
    testimonial:
      "Jag fick mer än vad jag bad om. Hannes gick in 100% för att skapa en sida där jag kan göra mer än bara visa upp mina produkter. Jag fick ett eget litet hem på internet!",
    name: "Annika Alexandersson",
    designation: "Creator",
    company: "Mormorochjag",
    image: anki,
  },
  {
    testimonial:
      "Efter att Hannes hjälpte oss så känner vi oss väldigt, väldigt, tacksamma!",
    name: "Ewa Josefsson",
    designation: "Member",
    company: "44833 Ricklevägen",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mormorochjag",
    description:
      "Combined website for displaying and selling homemade products, with a blog and a gallery section.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },      
    ],
    image: mojag,
    source_code_link: "https://github.com/HannesAlexandersson/Mormorochjag",
    link: "https://mormorochjag.vercel.app/",
  },
  {
    name: "Svenska Krögare",
    description:
      "Full reworked website for a restaurant association, with a member section and a newsletter. Web-to-leads integration with Salesforce and mailchimp.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Contentful CMS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: krogare,
    source_code_link: "https://github.com/krogare/krogare",
    link: "https://www.krogare.se/",
  },
  {
    name: "LIA meetup",
    description:
      "An event site for the LIA meetup event. Lets the students and companies matchmake based on preferences. A school assignment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
    ],
    image: lia,
    source_code_link: "https://github.com/HannesAlexandersson/Branshevent",
    link: "https://liameetup.vercel.app/",
  },
  {
    name: "Protech",
    description:
      "A school project where we teamed up with the Digital Design students to create a fictive landing page for a fictive product.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
    ],
    image: protech,
    source_code_link: "https://github.com/HannesAlexandersson/Protech",
    link: "https://alexanderochson.se/Protech/",
  },
  {
    name: "Chuck Norris joke generator",
    description:
      "As our first react assignment we where to write an simple app that uses a open API. We choose to create a Chuck Norris joke generator.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },      
    ],
    image: chuck,
    source_code_link: "https://github.com/HannesAlexandersson/The-Chuck-Norris-generator",
    link: "https://the-chuck-norris-generator.vercel.app/",
  },
  {
    name: "Retronautica",
    description:
      "One of the very first school projects. Its a landing page and a detail page for a fictive cinema. We choose a theme of sci-fi and retro.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "vanilla js",
        color: "pink-text-gradient",
      },      
    ],
    image: retro,
    source_code_link: "https://github.com/HannesAlexandersson/Retronautica",
    link: "https://alexanderochson.se/Retronautica/",
  },
  {
    name: "Tick Tack Toe",
    description:
      "The very first typescript assignment. I made a simple tic tac toe game, complete with AI and multiplayer modes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },      
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },      
    ],
    image: tic,
    source_code_link: "https://github.com/HannesAlexandersson/typescriptProject",
    link: "https://typescript-project-three.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };