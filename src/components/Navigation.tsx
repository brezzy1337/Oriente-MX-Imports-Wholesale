import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4">
                <span className="font-semibold text-gray-500 text-lg">
                  Deli Asya
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="py-4 px-2 text-gray-500                              
hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 text-gray-500                         
hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/catalog"
                className="py-4 px-2 text-gray-500                       
hover:text-gray-900"
              >
                Catalog
              </Link>
              <Link
                href="/contact"
                className="py-4 px-2 text-gray-500                       
hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="py-2 px-2 font-medium text-gray-500               
hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="py-2 px-2 font-medium text-white bg-green-500    
rounded hover:bg-green-400"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
