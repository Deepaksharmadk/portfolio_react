import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
const Info = {
  name: "Deepak Sharma",
  stack: ["Mern Stack Developer", "Full Stack Developer", "Software Engineer"],
  bio: "I'm a passionate MERN Stack Developer with strong foundation in web development technologies.Currently a final year B.tech student,i am always excited to learn and explore new technologies.",
};

const ProjectInfo = [
  {
    title: "Like Hotel Booking app",
    desc: "User Registration/Login: Users create an account or log in to access booking features.Search for Hotels: Users search for hotels based on their desired location and dates.View Hotel Details: Users can click on a hotel to view more details, including photos, amenities, and reviews.Make a Booking: Users select their desired dates and proceed to book the hotel.Payment Processing: Users enter payment information to complete the booking.Confirmation: Users receive a confirmation of their booking via email and in-app notifications.Manage Bookings: Users can view and manage their bookings through their profile..",
    image:
      "https://raw.githubusercontent.com/Deepaksharmadk/portfolio_react/main/public/room1.svg",

    live: true,
    technologies: [
      "React",
      "MongoDB",
      "Express",
      "React Query",
      "context API",
      "tailwind ",
    ],
    link: "https://roombookingdot.onrender.com",
    github: "https://github.com/Deepaksharmadk/hotelbooking_plateform",
  },
  {
    title: "Like LMS SYSTEM",
    desc: "LMS: Like Library Management System is a web application that allows users to manage their library. It provides features such as user signup,login,logout,course create,payment configration.",
    image:
      "https://raw.githubusercontent.com/Deepaksharmadk/portfolio_react/main/public/lms.svg",

    live: true,
    technologies: ["React", "MongoDB", "Express", "Node.js", "redux-toolkit"],
    link: "https://lms-deepaksharmadks-projects.vercel.app/",
    github: "https://github.com/Deepaksharmadk/lms",
  },
];

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux-toolkit",
  "NextJS",
  "Tailwind",
  "MongoDB",
  "MySQL",

  "Git",

  "Bootstrap",

  "MaterialUI",
];

// AVAILABLE SKILLS

/* 
  HTML
  CSS
  JS 
  React
  Next JS
  Nuxt JS
  Node JS
  Vue
  Angular
  Docker
  Photoshop
  Illustrator
  Svelte
  GCP
  Azure
  Fastify
  Haxe
  Ionic
  Markdown
  Microsoft Office
  Picsart
  Sketch
  Unity
  WolframAlpha
  Adobe XD
  After Effects
  Bootstrap
  Bulma
  CapacitorJs
  Coffeescript
  MemSQL
  C
  C++
  C#
  Python
  Java
  Julia
  Matlab
  Swift
  Ruby
  Kotlin
  Go
  PHP
  Flutter
  Dart
  Typescript
  Swift
  Git
  Figma
  Canva
  Ubuntu
  Bootstrap
  MongoDB
  Tailwind
  ViteJS
  VuetifyJS
  MySQL
  PostgreSQL
  AWS
  Firebase
  Blender
  Premiere Pro
  Adobe Audition
  Deno
  Django
  Gimp
  Graphql
  Lightroom
  MaterialUI
  Nginx
  Numpy
  OpenCV
  Pytorch
  Selenium
  Strapi
  Tensorflow
  Webex
  Wordpress
*/

const socialLinks = [
  { link: "https://github.com/deepaksharmadk", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/deepaksharmadk",
    icon: IconBrandLinkedin,
  },
];

// const ExperienceInfo = [
//   {
//     role: "Junior Web Developer",
//     company: "Wipro",
//     image_url:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/330px-Wipro_Primary_Logo_Color_RGB.svg.png",
//     date: "Jul 2023 - Jan 2024",
//     desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
//     skills: [
//       "HTML/CSS",
//       "Javascript",
//       "Typescript",
//       "React",
//       "Node,js",
//       "Express.js",
//       "RestFull API's",
//       "MongoDB",
//     ],
//   },
// ];

export const EducationInfo = [
  {
    id: 0,
    img: "iitm.jpg",
    school: "Gandi institue for education and technology, Baniatangi,khurda",
    date: "May 2023 - April 2027",
    desc: "I am currently pursuing a Bachelor of Technology in Computer Science with a CGPA of 7.5",
  },
  {
    id: 1,
    img: "download.jpg",
    school: "",
    date: "2019 – 2021",
    desc: "I completed my class 12 education at in L.C.S COLLEGE, DARBHANGA .",
    degree: "Higher Secondary Certificate (Class 12) - Percentage - 71.4",
  },
  {
    id: 2,
    img: "h.jpg",
    school: "",
    date: "May 2011 - Apr 2021",
    desc: "UTKRAMIT MS PATANIA, BIRAUL DARBHANGA",
    degree: "MATRICULATION (10TH) - Percentage - 72.6",
  },
];

export { Info, ProjectInfo, socialLinks, skillsData };
