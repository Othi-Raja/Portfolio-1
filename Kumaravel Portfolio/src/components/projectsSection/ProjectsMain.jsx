import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Foodie",
    year: "Jan2025",
    align: "right",
    image: "https://ik.imagekit.io/11ie2ifrf/Foodie.png",
    link: "https://foodiee-wheat.vercel.app/",
  },
  {
    name: "Food Munch",
    year: "Nov2024",
    align: "left",
    image: "https://ik.imagekit.io/11ie2ifrf/Food-Munch.png",
    link: "https://kumaravel4502.github.io/Food-Munch/",
  },
  {
    name: "CiniFlix",
    year: "Dec2024",
    align: "right",
    image: "https://ik.imagekit.io/11ie2ifrf/CiniFlix.png",
    link: "https://kumaravel4502.github.io/Movie-Website/",
  },
  {
    name: "Incredible India",
    year: "May2024",
    align: "left",
    image: "https://ik.imagekit.io/11ie2ifrf/Incredible%20India.png",
    link: "https://kumaravel4502.github.io/Responsive-Webpage/",
  },
  {
    name: "Cat and Bulb",
    year: "Oct2024",
    align: "right",
    image: "https://ik.imagekit.io/11ie2ifrf/Cat%20and%20Bulb.png",
    link: "https://kumaravel4502.github.io/Cat-and-Bulb/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
