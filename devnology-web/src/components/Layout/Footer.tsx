const Footer = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-indigo-700">Devnology Shop</h3>
            <p className="text-gray-600">Your favorite shop!</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Devnology Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;