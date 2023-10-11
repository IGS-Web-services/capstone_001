import { SectionHeading, Skill, Experience } from "../components";

// SKILLS
import aws from "../assets/amazon.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import astro from "../assets/astro.png";
import nextJS from "../assets/Nextjs.png";
import mongodb from "../assets/mongoDB.png";
import express from "../assets/express.png";
import react from "../assets/react.png";
import nodeJS from "../assets/node.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import tailwindcss from "../assets/tailwindcss.png";
import javascript from "../assets/javascript.png";
import typeScript from "../assets/typescript_logo.png";

const Skills = () => {
  return (
    <article
      id="skills"
      className=" relative w-full  bg-slate-100  flex flex-col items-center justify-start py-16 laptop:pb-32 min-h-screen"
    >
      <SectionHeading subTitle="skills & experiences" title="Tools of work" />
      <section className="flex flex-col laptop:flex-row  items-center justify-center laptop:justify-between laptop:px-10 w-full gap-3 tablet:gap-10  laptop:h-[450px]">
        <section className="section_hidden grid skill grid-cols-3 tablet:grid-cols-4 gap-3 p-3 h-full ">
          <Skill icon={git} name="git" />
          <Skill icon={figma} name="figma" />
          <Skill icon={aws} name="aws services" />
          <Skill icon={astro} name="astro" />
          <Skill icon={nextJS} name="nextJS" />
          <Skill icon={mongodb} name="mongodb" />
          <Skill icon={express} name="express" />
          <Skill icon={react} name="react" />
          <Skill icon={nodeJS} name="nodeJS" />
          <Skill icon={html} name="html" />
          <Skill icon={sass} name="sass" />
          <Skill icon={css} name="css" />
          <Skill icon={tailwindcss} name="tailwindcss" />
          <Skill icon={javascript} name="javascript" />
          <Skill icon={typeScript} name="typescript" />
        </section>
        <section className="section_hidden skill experiences rounded-lg flex flex-col px-5 py-3 tablet:px-10 gap-1 h-full">
          <Experience />
        </section>
      </section>

      <div className="custom-shape-divider-bottom-1694799701">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </article>
  );
};

export default Skills;
