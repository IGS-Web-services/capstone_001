// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import FrontEnd from "../assets/Front_End Dev.png";
import MernStack from "../assets/MERN_Dev.png";
import WebDesign from "../assets/Web Design.jpeg";
import Backend from "../assets/Backend_Dev.jpg";

const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-slate-100 py-16 service"
    >
      <SectionHeading subTitle="About" title="Services offered" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 place-items-center px-5 tablet:px-10 laptop:px-15">
        <ServiceCard
          image={FrontEnd}
          heading="Front End Excellence"
          body="Crafting captivating and interactive web experiences with precision."
        />

        <ServiceCard
          image={Backend}
          heading="Backend Mastery"
          body="Architecting robust and scalable backend systems for optimal performance."
        />

        <ServiceCard
          image={MernStack}
          heading="Fullstack Expertise"
          body="Delivering tailor-made, fully functional applications to meet your unique requirements."
        />

        <ServiceCard
          image={WebDesign}
          heading="Website Enhancement"
          body="Elevating and rejuvenating previously developed websites for a modern edge."
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

export default Services;
