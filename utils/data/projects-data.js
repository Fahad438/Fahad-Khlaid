import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "A Codex website",
    description:
      "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
    tools: [

      "NextJS",
      "Tailwind CSS",
      "TypeScript",


    ],
    role: "Frontend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: " Resort reservation system",
    description:
      " The project is a web page where the user can view the existing resorts and the admin can enter the resorts such as their name, pictures of them.",
    tools: [
      "php",
      "Laravel",
      " Laravel livewire",
      "Tailwind CSS",
      "MySQL",

    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: " United Construction Project - Website with Dashbord",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
      "Express",
      "TypeScript",
      "Firebase",

    ],
    code: "",
    role: "Full Stack Developer",
    demo: "ucp.sa",
    image: realEstate,
  },

];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
