import { useState } from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const AboutMeImage = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="../../../public/images/Kumaravel.jpg"
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
