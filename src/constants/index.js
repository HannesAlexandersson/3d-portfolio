import {
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    icon: starbucks,
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
    icon: tesla,
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
    icon: shopify,
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
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Dec 2023",
    points: [
     "Anesthesia care for patients undergoing surgery.",
      "Administering anesthesia and monitoring patients during surgery.",
      "Providing post-operative care and pain management.",
      "Collaborating with surgeons, anesthesiologists, and other healthcare professionals to ensure patient safety.",
      "Participating in emergency response teams to provide critical care in life-threatening situations.",
    ],
  },
  {
    title: "Fullstack Developer program",
    company_name: "Yrgo",
    icon: meta,
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
    icon: meta,
    iconBg: "#E6DEDD",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
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
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };