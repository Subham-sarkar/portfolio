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
  python,
  k8,
  cft,
  jenkins,
  tailwind,
  nodejs,
  git,
  docker,
  aws,
  datagrokr,
  awsarch,
  dockerblog,
  render,
  rest,
  tacobell,
  webpack,
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
    id: "blogs",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AWS Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Kubernetes",
    icon: k8,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Cloud Formation",
    icon: cft,
  },
  {
    name: "Jenkins",
    icon: jenkins,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "AWS",
    icon: aws,
    iconBg: "#232F3E",
    date: "2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "DataGrokr",
    icon: datagrokr,
    iconBg: "#E6DEDD",
    date: "2020 - 2023",
    points: [
      "Established best practices for infrastructure configuration and management using Ansible.",
      "Implemented infrastructure as code using AWS CloudFormation and gained proficiency in the three-tier architecture of AWS.",
      "Worked collaboratively with the Cloud Architecture and Compliance teams to manage development and deployment strategies on AWS.",
      "Developed automated solutions for deployment and build scripts using Python and shell scripting.",
      "Ensured high-quality and timely delivery of builds and releases through close collaboration with teams."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "DataGrokr",
    icon: datagrokr,
    iconBg: "#E6DEDD",
    date: "2020 - 2020",
    points: [
      "As a member of the Data Engineering and Cloud Architecture teams, I gained valuable experience in database and data warehousing using Snowflake and Microsoft SQL Server.",
      "Developed expertise in ETL solutions platforms to facilitate data integration and transformation.",
      "Acquired proficiency in infrastructure as code (IAC) using CloudFormation for automating the creation, updating, and deletion of resources in cloud environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Subham proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He is one of the engineers who is highly knowledgeable and genuinely invested in the success of their clients.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thanks to Subham's thoughtful infrastructure optimization, we were able to significantly increase our efficiency while reducing overheads. We are incredibly grateful to him.",
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

const blogs = [
  {
    name: "AWS 3-Tier Architecture",
    description:
      "Designing a Robust Cloud Infrastructure with AWS Three-Tier Architecture",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "cloudformation",
        color: "green-text-gradient",
      },
    ],
    image: awsarch,
    blog_link: "https://tldrthis.hashnode.dev/aws-three-tier-architecture",
  },
  {
    name: "Taco Bell's Middleware",
    description:
      "Streamlining Food Delivery with AWS. Overview of its Order Handling.",
    tags: [
      {
        name: "event-driven-architecture",
        color: "blue-text-gradient",
      },
      {
        name: "api gateway",
        color: "green-text-gradient",
      },
      
    ],
    image: tacobell,
    blog_link: "https://tldrthis.hashnode.dev/taco-bells-order-middleware",
  },
  {
    name: "Docker Containers",
    description:
      "Understanding The ins and outs of Docker Containers.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "devops",
        color: "green-text-gradient",
      },
      {
        name: "containers",
        color: "pink-text-gradient",
      },
    ],
    image: dockerblog,
    blog_link: "https://tldrthis.hashnode.dev/understanding-the-ins-and-outs-of-docker-containers",
  },
  {
    name: "REST APIs",
    description:
      "REST Easy: A Comprehensive Introduction to REST APIs 🤖",
    tags: [
      {
        name: "rest",
        color: "blue-text-gradient",
      },
      {
        name: "web development",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: rest,
    blog_link: "https://tldrthis.hashnode.dev/introduction-to-rest-apis",
  },
  {
    name: "Rendering Method",
    description:
      "Choosing the Right Rendering Method for Your Website ⚛︎",
    tags: [
      {
        name: "client side",
        color: "blue-text-gradient",
      },
      {
        name: "server side",
        color: "green-text-gradient",
      },
    ],
    image: render,
    blog_link: "https://tldrthis.hashnode.dev/choosing-the-right-rendering-method-for-your-website",
  },
  {
    name: "Webpack and Babel",
    description:
      "The Ultimate Dynamic Duo for JavaScript Optimization",
    tags: [
      {
        name: "babel",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "green-text-gradient",
      },
    ],
    image: webpack,
    blog_link: "https://tldrthis.hashnode.dev/webpack-and-babel",
  },
];

export { services, technologies, experiences, testimonials, projects, blogs };