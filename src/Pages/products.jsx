import TypingAnimation from "../components/Elements/Typewriter Animation";
import Card from "../components/Fragments/Card";
import Navbar from "../components/Fragments/Navbar";

const ProductsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="flex justify-center min-h-screen items-center gap-2 flex-col ">
        <TypingAnimation />
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <Card image="/images/products-1.jpg" name="Sepatu Jogging" />
          <Card image="/images/products-1.jpg" name="Sepatu Jogging" />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
