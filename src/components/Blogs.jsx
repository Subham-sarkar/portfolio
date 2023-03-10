import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { tldricon } from "../assets";
import { SectionWrapper } from "../hoc";
import { blogs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { tldr } from "../assets";

const BlogCard = ({
  index,
  name,
  description,
  tags,
  image,
  blog_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(blog_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={tldricon}
                alt='blog link'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <div>
        <p className={`${styles.sectionSubText}`}>My Blog</p>
        <a href="https://tldrthis.hashnode.dev/" target="_blank">
          <img src={tldr} alt="TLDR" className="w-[18rem] h-[5rem] mr-2 mt-6 md:mt-10 sm:mt-8 xs:mt-6 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px hover:opacity-75 transition-opacity duration-300" />
        </a>
      </div>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Ready to dive into the exciting world of tech with me? Welcome to my tech blog, where I indulge in my favorite pastime: unraveling the mysteries of technology! As tech enthusiasts, me and my friend started this blog to constantly learn new things and discover exciting innovations. And what better way to share our love for all things tech than by writing about them? Step right up and get a load of these tech-tastic articles we've cooked up for you! 🚀
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-6'>
        {blogs.map((project, index) => (
          <BlogCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");