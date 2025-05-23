import React, {useState, useEffect} from 'react';
import { Moon, Sun} from 'lucide-react';
import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  // Update theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed right-6 top-8 z-50 p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <NavBar />
      <HeroSection />
      <Footer />

      {/* Global animations */}
      <style jsx global>{`
        @keyframes border-rotate {
          0% { background-position: 0% 0%; }
          100% { background-position: 150% 0%; }
        }

        /* Add dark mode transitions */
        * {
          transition-property: background-color, border-color, color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </div>
  );
};

export default App;