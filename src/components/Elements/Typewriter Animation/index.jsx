import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingAnimation = () => {
  const [text] = useTypewriter({
    words: ["ReactJS", "TailwindCSS", "Vite"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 150,
  });
  return (
    <div className="w-full">
      <p className="font-mono text-white text-center">
        Made with <span>{text}</span>
        <span>
          <Cursor cursorColor="cyan"></Cursor>
        </span>
      </p>
    </div>
  );
};

export default TypingAnimation;
