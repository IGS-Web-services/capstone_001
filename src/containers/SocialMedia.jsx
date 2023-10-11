import { SocialMediaIcon } from "../components";
import twitter from "../assets/twitter_logo.webp";
import linkedIn from "../assets/linkedIn_logo.png";
import github from "../assets/github_logo.png";

const SocialMedia = () => {
  return (
    <section className="fixed bottom-4 left-5 gap-5 z-50">
      <SocialMediaIcon link="https://github.com/FredsTechVerse" icon={github} />
      <SocialMediaIcon
        link="https://www.linkedin.com/in/alfred-gichia"
        icon={linkedIn}
      />
      <SocialMediaIcon link="https://twitter.com/AlfredGichia" icon={twitter} />
    </section>
  );
};

export default SocialMedia;
