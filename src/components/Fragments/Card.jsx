import PropTypes from "prop-types";

const Card = (props) => {
  const { image, name } = props;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Nama Produk" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Deskripsi produk yang singkat akan ditampilkan di sini. Anda dapat
          menambahkan teks lebih lanjut untuk menjelaskan produk.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Kategori
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #Fitur
        </span>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
