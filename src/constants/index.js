import assessment from "../assets/image/projects/assessment.png";
import githubProfile from "../assets/image/projects/githubProfile.png";
import aktasplastic from "../assets/image/projects/aktasplastik.png";
import minorgroup from "../assets/image/projects/minorgroup.png";
import flags from "../assets/image/projects/flags.png";

export const HERO_CONTENT = `I am proficient in HTML, CSS, JavaScript and React with expertise in modern libraries and frameworks. Renowned for my creative and analytical problem-solving skills, I bring attention to detail to every project. As a collaborative team player, I actively contribute to the success and innovation of projects, ensuring quality and efficiency.

 `;

export const EXPERIENCES = [
  {
    year: "27.08.2024 - 27.11.2024",
    role: "Frontend Developer Intern",
    company: "Kvadrat MMC",
    description: `Worked closely with backend developers to integrate frontend components with APIs.Collaborating with the team on various stages of projects using React and Tailwind CSS.Expertise in creating efficient and high-performance web applications using Next.js.
`,
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    year: "04.03.2024 - 04.08.2024",
    role: "Frontend Developer Intern",
    company: "Khan Buta Group MMC",
    description: `Practices to improve the appearance of websites and solve errors.Updating the sites according to the customer's request.`,
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
  },
  {
    year: "30.06.2023 - 30.09.2023",
    role: "Frontend Developer Intern",
    company: "Proton MMC",
    description: `Built responsive and accessible websites using Bootstrap, CSS, SCSS/SASS resulting in improved user engagement and experience.Created interactive web components and animations using JavaScript, resulting in visually appealing designs.`,
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
  },
];

export const PROJECTS = [
  {
    image: flags,
    title: "Country Flags",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["#react", "#css"],
    deploy: "https://flags-route.vercel.app/",
    github: "https://github.com/AytajGahramanova/flags-route",
  },
  {
    title: "Github Profile",
    image: githubProfile,
    description:
      "An application for managing tasks and projects, with features such as task assignment, and progress tracking.",
    technologies: ["#html", "#css", "#javascript"],
    deploy: "https://create-git-hub.vercel.app/",
    github: "https://github.com/AytajGahramanova/createGitHub",
  },
  {
    title: "Assessment",
    image: assessment,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["#react", "#css"],
    deploy: "https://custom-hooks-beta.vercel.app/",
    github: "https://github.com/AytajGahramanova/customHooks",
  },
  {
    title: "Stuhmer",
    // image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["#html", "#css", "#bootstrap", "#javascript"],
    deploy: "",
    github: "",
  },
  {
    title: "Yumshah",
    // image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["#html", "#css", "#bootstrap", "#javascript"],
    deploy: "",
    github: "",
  },
  {
    title: "İpotekAl",
    // image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["#html", "#css", "#bootstrap", "#javascript"],
    deploy: "",
    github: "",
  },
  {
    title: "Minor Group",
    image: minorgroup,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["#react", "#scss"],
    deploy: "https://minorgroup.az/",
    github: "https://github.com/gurularavel/minorfrontnew",
  },
  {
    title: "Aktas Plastik",
    image: aktasplastic,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["#html", "#css", "#bootstrap", "#javascript"],
    deploy: "https://aktasplastik.az/az",
    github: "https://github.com/gurularavel/aktasplastik",
  },
];

export const CONTACT = {
  phoneNo: "+994 55 715 05 40 ",
  email: "aytac2003qehremanova@gmail.com",
};
