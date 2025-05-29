const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Croatian Island Adventure</h3>
            <p>Created with ❤️ for your anniversary celebration</p>
            <p className="text-sm mt-2">June 19-26, 2025</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Emergency Contacts</h4>
            <ul className="text-sm">
              <li>Emergency Number: 112</li>
              <li>Tourist Police: +385 (0)21 307 111</li>
              <li>Croatian Auto Club: +385 (0)1 1987</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-700 text-sm text-center">
          <p>© 2025 | All information current as of May 2025</p>
          <p className="mt-1">Remember to check official websites for the most up-to-date information before travel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
