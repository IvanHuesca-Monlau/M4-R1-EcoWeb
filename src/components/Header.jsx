import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-linear-to-r from-green-700 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo y eslogan */}
          <Link to="/" className="flex items-center space-x-3">
            <div>
              <h1 className="text-2xl font-bold">Huesgreen Dev</h1>
              <p className="text-white/90 text-sm">Tecnología para un futuro sostenible</p>
            </div>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-green-200 transition ${isActive('/') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className={`hover:text-green-200 transition ${isActive('/servicios') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Servicios
            </Link>
            <Link 
              to="/sostenibilidad" 
              className={`hover:text-green-200 transition ${isActive('/sostenibilidad') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Sostenibilidad
            </Link>
            <Link 
              to="/investigacion" 
              className={`hover:text-green-200 transition ${isActive('/investigacion') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              I+D
            </Link>
            <Link 
              to="/contacto" 
              className={`hover:text-green-200 transition ${isActive('/contacto') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
