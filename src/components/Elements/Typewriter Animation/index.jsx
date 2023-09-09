import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingAnimation = () => {
  const [text] = useTypewriter({
    words: ["ReactJS", "TailwindCSS", "Vite"],
    loop: [],
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  return (
    <div className="w-full">
      <p className="  text-center">
        Made with <span>{text}</span>
        <span>
          <Cursor cursorColor="black"></Cursor>
        </span>
      </p>
    </div>
  );
};

export default TypingAnimation;
