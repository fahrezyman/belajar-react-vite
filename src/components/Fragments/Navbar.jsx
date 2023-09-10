const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">FahrezyCode. Store</div>
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                href="#"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                href="#"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                href="#"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                href="#"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
