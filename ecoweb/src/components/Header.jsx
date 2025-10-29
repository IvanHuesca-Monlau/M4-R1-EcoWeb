const Header = () => {

  return (
    <header className="bg-linear-to-r from-green-700 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo y eslogan */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-2xl font-bold">Huesgreen Dev</h1>
              <p className="text-white/90">Tecnología para un futuro sostenible</p>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-6">
            <button className="hover:text-green-200 transition">Inicio</button>
            <button className="hover:text-green-200 transition">Servicios</button>
            <button className="hover:text-green-200 transition">Sostenibilidad</button>
            <button className="hover:text-green-200 transition">I+D</button>
            <button className="hover:text-green-200 transition">Contacto</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
