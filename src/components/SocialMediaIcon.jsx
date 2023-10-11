const SocialMediaIcon = ({ icon, link }) => {
  return (
    <a href={link}>
      <img
        src={icon}
        alt="Alternative image"
        className="w-10 tablet:w-12 laptop:w-14 aspect-square  flex flex-col items-center justify-center bg-slate-300/50 p-2.5 my-1 z-50 rounded-tr-lg rounded-bl-lg  backdrop-blur-sm "
      />
    </a>
  );
};

export default SocialMediaIcon;
