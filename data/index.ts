import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize workplace collaboration and foster open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently, pursuing a Bachelor's degree in Software Engineering at SZABIST Karachi",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Nature Slider",
    des: "The 3D Nature Slider is an interactive and visually stunning web component that showcases breathtaking nature scenes in a 3D environment. The slider features smooth transitions between images with a realistic 3D effect, creating an immersive experience for users. Ideal for portfolios, landing pages, or any project that requires high-impact visual storytelling.",
    img: "/mount.PNG",
    iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/icons8-javascript.svg"],
    link: "https://github.com/abdulbasitbintory/Web_Development_Front_End_Projects/tree/main/projects_30/Weather%20App",
  },
  {
    id: 2,
    title: "Random Password Generator App",
    des: "The Random Password Generator App is a secure and easy-to-use tool designed to create strong, random passwords for enhanced online security. With customizable options for length and character types, users can generate passwords tailored to their needs, ensuring safety for sensitive accounts and information.",
    img: "/pass.PNG",
    iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/icons8-javascript.svg"],
    link: "https://github.com/abdulbasitbintory/Web_Development_Front_End_Projects/tree/main/projects_30/Password_Generator_App",
  },
  {
    id: 3,
    title: "QR Code Generator App",
    des: "The QR Code Generator App is a fast and user-friendly tool designed to instantly create custom QR codes. It allows users to input text, URLs, or other data, and generate a downloadable QR code image. Whether you want to share a link, text, or contact information, this app provides a quick and seamless solution for generating scannable codes.",
    img: "/qr.PNG",
    iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/icons8-javascript.svg"],
    link: "https://github.com/abdulbasitbintory/Web_Development_Front_End_Projects/tree/main/projects_30/QR_code_generator",
  },
  {
    id: 4,
    title: "Weather App",
    des: "The Weather App is a simple yet powerful application that provides users with real-time weather information for any location. Using an intuitive and clean interface, the app delivers essential weather data such as current temperature, humidity, wind speed, and a 7-day forecast. Built with API integration for accurate weather updates, the app ensures users stay informed about weather conditions in their area or any location worldwide.",
    img: "/weather.PNG",
    iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/icons8-javascript.svg"],
    link: "https://github.com/abdulbasitbintory/Web_Development_Front_End_Projects/tree/main/projects_30/Nature%20Slider",
  },
];

export const testimonials = [
  {
    quote:
      "I am writing to refer Abdul Basit, for a software developer . With a strong background in computer science, extensive experience in teaching, and a keen interest in emerging technologies such as AI, Web3, and the Metaverse, I believe I would be an excellent fit for this role.",
    name: "Rafay Ghani",
    title: "Accountant at Hotspex",
  },
  {
    quote:
      "I am pleased to recommend Abdul Basit for the position of Front End Developer. With a solid foundation in computer science and a wealth of experience in teaching, Abdul has demonstrated a strong ability to communicate complex concepts effectively. His enthusiasm for innovative technologies, particularly in areas like AI, Web3, and the Metaverse, positions him as a valuable asset for any team. I am confident that his skills and dedication will contribute significantly to the success of your organization.",
    name: "Rayyan Ahmed",
    title: "Software Engineering Intern at Electronic Arts (EA)",
  }
];

export const companies = [
  {
    id: 1,
    name: "C",
    img: "/c.svg",
    nameImg: "/cnew5.svg",
  },
  {
    id: 2,
    name: "Python",
    img: "/icons8-python.svg",
    nameImg: "/pys.svg",
  },
  {
    id: 3,
    name: "Javascipt",
    img: "/icons8-javascript.svg",
    nameImg: "/jsnew1.svg",
  },
  {
    id: 4,
    name: "React",
    img: "icons8-react-js.svg",
    nameImg: "/reactnew.svg",
  },
  {
    id: 5,
    name: "Next.Js",
    img: "nextjs.svg",
    nameImg: "/next3.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    img: "ts.svg",
    nameImg: "/tsname.svg",
  },

];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/abdulbasitbintory",
  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/EPHb47tcGh/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
  },
];