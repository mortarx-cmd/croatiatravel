import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'ferries', label: 'Ferry & Flight Info' },
    { id: 'accommodations', label: 'Accommodations' },
    { id: 'phrases', label: 'Croatian Phrases' },
    { id: 'tips', label: 'Travel Tips' },
    { id: 'maps', label: 'Maps' },
    { id: 'surprise', label: 'Special Surprise' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-100 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4">
        {/* Mobile hamburger menu */}
        <div className="flex justify-between items-center py-3 md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="text-blue-600 font-semibold">
            {navItems.find(item => item.id === activeSection)?.label || 'Menu'}
          </div>
          <div className="w-6"></div> {/* Empty div for flex spacing */}
        </div>

        {/* Mobile dropdown menu */}
        <div className={`${menuOpen ? 'max-h-96' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <ul className="py-2 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop horizontal menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-1 py-2 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-md whitespace-nowrap ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
