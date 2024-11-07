import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCart = () => {
  return (
    <button className="p-2 hover:text-[#D32F2F] transition-colors">
      <FaShoppingCart className="w-6 h-6" />
    </button>
  );
};

export default ShoppingCart;
