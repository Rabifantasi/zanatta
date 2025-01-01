const Footer = () => { 
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
          &copy; {new Date().getFullYear()} Zanatta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;