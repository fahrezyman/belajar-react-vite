import TypingAnimation from "./components/Elements/Typewriter Animation";
import FormLogin from "./components/Fragments/FormLogin";

function App() {
  return (
    <div className="flex justify-center bg-slate-700 min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-cyan-500 font-mono">
          Welcome
        </h1>
        <p className="text-white font-mono mb-4">Please enter your Account</p>
        <FormLogin />
        <TypingAnimation />
      </div>
    </div>
  );
}

export default App;
