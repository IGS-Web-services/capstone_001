const Skill = ({ icon, name }) => {
  return (
    <section className="w-full h-full rounded-2xl  flex flex-col gap-1 items-center justify-center px-4">
      <img
        src={icon}
        alt="Alternative image"
        className="rounded-lg w-12 first-letter:tablet:w-16  aspect-square"
      />
      <figcaption className=" text-center text-md capitalize w-full">
        {name}
      </figcaption>
    </section>
  );
};

export default Skill;
