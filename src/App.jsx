import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center bg-slate-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-900">Log Out</Button>
        <Button variant="bg-green-900">Log In</Button>
        <Button variant="bg-black">Buy Now</Button>
      </div>
    </div>
  );
}

export default App;
