import { FaCode, FaPaintBrush, FaWordpress, FaBullhorn } from "react-icons/fa";

const servicesData = [
  {
    title: "web development",
     icon: <FaCode />,
    info: [
      {
        title: "Frontend Development",
        description: "React, Next.js, Tailwind CSS based modern UI development",
      },
      {
        title: "Backend Integration",
        description: "API integration, authentication & database handling",
      },
      {
        title: "Responsive Design",
        description: "Mobile-friendly and cross-browser compatible websites",
      },
    ],
  },
  {
    title: "ui/ux design",
    icon: <FaPaintBrush></FaPaintBrush>,
    info: [
      {
        title: "Figma Design",
        description: "Modern UI/UX design using Figma",
      },
      {
        title: "Wireframing",
        description: "User flow and layout planning",
      },
      {
        title: "Prototyping",
        description: "Interactive design previews",
      },
    ],
  },
  {
    title: "wordpress",
     icon: <FaWordpress></FaWordpress>,
    info: [
      {
        title: "Custom Themes",
        description: "Build custom WordPress themes",
      },
      {
        title: "Plugin Setup",
        description: "Install & configure plugins",
      },
      {
        title: "SEO Optimization",
        description: "Improve site ranking and performance",
      },
    ],
  },
  {
    title: "branding",
    icon: <FaBullhorn></FaBullhorn>,
    info: [
      {
        title: "Logo Design",
        description: "Professional brand logo creation",
      },
      {
        title: "Visual Identity",
        description: "Color, typography & brand consistency",
      },
      {
        title: "Social Media Design",
        description: "Creative posts and banners",
      },
    ],
  },
];

const Services = () => {
  return <div>Services</div>;
};

export default Services;


