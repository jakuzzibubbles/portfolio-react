import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaCloud, FaProjectDiagram } from "react-icons/fa";
import { GiSprint } from "react-icons/gi";

export const PROFILE_DATA = {
    name: "Linh Nguyen",
    tagLine: `Dedicated Project Manager, exploring the Cloud and DevOps practices. Passionate about driving Digital Transformation, with lots of energy and a sense of humor.`,
    jobTitle: "Project Manager",
    location: "Berlin",
    yearsOfExperience: 10,
    skills: [
        "Digital Project Management",
        "Agile Methologies & Scrum",
        "Cloud Computing",
        "Linux Essentials",
        "Web Development Basics",
        "DataBase Management",
        "React"
    ],
    githubUrl: "https://github.com/jakuzzibubbles",
    linkedinUrl: "https://www.linkedin.com/in/jakuzzibubbles/",
    email: "jakuzzi263@icloud.com",
    phone: "+49123456789",
};

export const SKILLS = [
    {
        id: "01",
        icon: FaCloud,
        title: "Cloud Computing",
        comment: "Transforming clouds into seamless solutions—no rainy days here! Cloud computing is at the heart of digital transformation, providing flexible, scalable, and cost-effective infrastructure. By leveraging the power of the cloud, I ensure businesses can run efficiently and securely, even during high-demand periods. With expertise across various platforms, I aim to make the cloud accessible and productive for any organization.",
    },
    {
        id: "02",
        icon: FaProjectDiagram,
        title: "Digital Project Management",
        comment: "Guiding projects to success while keeping the team engaged and motivated. Digital project management requires balancing deadlines, resources, and communication to drive results. I ensure that all stakeholders stay aligned, from inception to delivery, while fostering a collaborative environment. My focus is on maximizing efficiency and ensuring that every project runs smoothly from start to finish.",
    },
    {
        id: "03",
        icon: GiSprint,
        title: "Agile Methodologies & Scrum",
        comment: "Embracing agility like a pro—quick on my feet and faster with coffee! Agile methodologies empower teams to adapt quickly to changes and deliver iterative value. With extensive experience in Scrum, I lead sprints that drive consistent progress while maintaining flexibility. Whether it’s managing backlogs or facilitating stand-ups, I prioritize continuous improvement and team empowerment.",
    },
    {
        id: "04",
        icon: IoLogoReact,
        title: "React",
        comment: "Building interactive UIs that keep users engaged—like a good book! React enables me to create responsive, dynamic user interfaces that adapt to user behavior in real-time. By using component-based architecture, I ensure scalability and maintainability in web applications. My goal is to deliver smooth, intuitive experiences that keep users coming back.",
    },
    {
        id: "05",
        icon: IoLogoNodejs,
        title: "Node.js",
        comment: "Creating efficient backends that handle requests with ease and speed! Node.js is key to building fast, scalable, and real-time backends for modern web applications. I focus on optimizing server-side logic and managing large numbers of requests without compromising on performance. The asynchronous nature of Node.js allows me to develop services that are lightweight and capable of handling high-traffic environments.",
    },
    {
        id: "06",
        icon: SiMongodb,
        title: "MongoDB",
        comment: "Managing data like a pro—keeping everything organized, even when it wants to party! 🎉 MongoDB offers the flexibility to handle diverse data types and unstructured data efficiently. I use this NoSQL database to store and retrieve data quickly, enabling high-performance applications. With a focus on scalability and availability, I ensure that data is organized and ready to support robust application needs.",
    },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "jakuzzi263",
    position: "Business Owner",
    duration: "November 2021 - October 2024",
    description: [
      "Partnering with businesses to achieve their digital goals. Optimizing workflows and processes to boost efficiency. I provide customized and streamlined project management solutions. Delivered remotely. ",
      "Led cross-functional teams in the successful execution of digital projects, delivering projects on time and within budget. ",
      "Managed all aspects of project planning, including scope definition, resource allocation, and risk management. ",
      "Oversaw the development and implementation of digital strategies, optimizing user experience and driving engagement. ",
      "Collaborated with stakeholders to define project goals and deliverables, ensuring alignment with business objectives and KPIs.",
    ],
    offerings: [
      "Strategic project management",
      "Streamlined task organization",
      "Clear communication",
      "Data-driven insights",
      "Technical proficiency in German and English",
    ],
  },
  {
    id: "02",
    company: "dreistrom.land AG",
    position: "Quality Manager | Project Assistant",
    duration: "April 2023 - May 2023",
    description: [
      "Supported quality management for web portal projects targeting public institutions, employing agile methodologies.",
      "Assisted product owners and stakeholders in requirement alignment and internal communication.",
      "Collaborated with application engineers to optimize task completion timelines.",
    ],
  },
  {
    id: "03",
    company: "Matok V'Kal Ltd",
    position: "Business Development DACH",
    duration: "June 2022 - November 2022",
    description: [
      "Conducted thorough competitive analyses to identify market opportunities and gain insights into the confectionery industry landscape in the DACH region.",
      "Generated high-quality leads through targeted outreach and networking efforts.",
      "Facilitated meetings between main decision-makers, ensuring alignment with company objectives.",
    ],
  },
  {
    id: "04",
    company: "xtraz digital UG (haftungsbeschränkt)",
    position: "Online Project Manager",
    duration: "July 2022 - September 2022",
    description: [
      "Introduced and facilitated daily meetings to foster alignment among team members, ensuring efficient collaboration and project progress tracking.",
      "Implemented a specialized task management board in project management software, streamlining workflow and enhancing team productivity.",
      "Communicated with stakeholders to ensure alignment with project objectives and service delivery.",
    ],
  },
  {
    id: "05",
    company: "XWECAN",
    position: "Operations DACH",
    duration: "December 2021 - May 2022",
    description: [
      "Started as a research assistant, swiftly transitioning to oversee tools and operations.",
      "Collaborated closely with the DACH account team and CEO, facilitating cross-team communication and ensuring seamless workflow.",
      "Supported the team with content creation based on data, contributing to the company's PR and marketing efforts.",
    ],
  },
];

export const ABOUT_ME_DATA = {
    introduction: "Skilled and dedicated project manager with a diverse professional background, constantly seeking self-improvement. Motivated to deliver exceptional results, ensure seamless processes, and find innovative solutions that boost efficiency.",
    background: "Experience in digital project management, agile methodologies, and business development across various industries. Strong in driving digital transformation by utilizing cloud technologies.",
    skills: "Top skills include Digital Project Management, Linux Essentials, Agile Methodologies, and Cloud Computing. Proficient in tools such as JIRA and Asana.",
    projects: "Have worked on various projects, including web portal quality management, business development in the DACH region, and team operations management.",
    interests: "Passionate about technology, continuous learning, and exploring new tools to streamline processes.",
    careerGoals: "Aim to deepen expertise in Cloud Computing and DevOps while leading transformative projects in digital innovation.",

        stats: {
            yearsOfExperience: '10+',
            certificationsEarned: 4,
        },
};

export const LANGUAGES = [
    { language: "Vietnamese", proficiency: "Native or Bilingual" },
    { language: "English", proficiency: "Full Professional" },
    { language: "Mandarin", proficiency: "Limited Working" },
    { language: "Latin", proficiency: "Elementary" },
    { language: "German", proficiency: "Native or Bilingual" },
];

export const CERTIFICATIONS = [
    "Linux Professional Institute Linux Essentials",
    "AWS Certified Cloud Practitioner",
    "Project Management with Scrum",
    "Asana Ambassador",
];

