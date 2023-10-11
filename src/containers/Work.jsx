import { SectionHeading, WorkCard } from "../components";
import ChurchApp from "../assets/Church_App.png";
import ElimuHub from "../assets/Elimu_Mkononi.png";
import FrancisPortfolio from "../assets/Francis_Portfolio.png";

const Work = () => {
  return (
    <article id="projects" className=" relative w-full py-16  ">
      <SectionHeading subTitle="projects" title="featured work" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 p-4 place-items-center px-5 tablet:px-10 laptop:px-15">
        <WorkCard
          status="version 1.0"
          link="https://elimu-mkononi.netlify.app/"
          image={ElimuHub}
          name="Elimu Hub"
          description="An e-learning platform with analytics and custom authentication"
        />
        <WorkCard
          status="under construction"
          link="https://aipca-app.vercel.app/"
          image={ChurchApp}
          name="AIPCA Nyahururu"
          description="A church application meant to simplify communication and automate record keeping"
        />
        <WorkCard
          status="version 1.0"
          link="https://francisgitau.vercel.app/"
          image={FrancisPortfolio}
          name="Portfolio"
          description="A portfolio website for skills display"
        />
      </section>
      <div className="custom-shape-divider-bottom-1694798741">
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

export default Work;
