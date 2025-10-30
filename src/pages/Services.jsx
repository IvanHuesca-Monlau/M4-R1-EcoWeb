import headerImage from '../assets/images/header-1.jpg';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestros servicios</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Soluciones tecnológicas sostenibles adaptadas a las necesidades de tu empresa
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* DAW */}
          <div className="mb-16 bg-green-50 rounded-xl p-8 border-2 border-green-200">
            <div className="mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Desarrollo de Aplicaciones Web</h2>
                <p className="text-green-700 font-semibold">Desarrollo sostenible de aplicaciones web</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Este servicio se centra en la creación y mantenimiento de sitios y aplicaciones web. 
              Nuestro equipo, formado por especialistas del ciclo superior de Desarrollo de Aplicaciones Web, 
              tiene la experiencia necesaria para desarrollar páginas web que sean tanto funcionales como 
              atractivas visualmente, optimizando cada línea de código para reducir el consumo energético.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">¿Qué hacemos?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Diseño de sitios web ajustados a las necesidades específicas de cada cliente</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Implementación de funcionalidades que mejoren la experiencia del usuario</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Aseguramos que cada sitio o aplicación esté optimizado para su uso en diversos navegadores y dispositivos</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-100 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-2">🌱 Enfoque sostenible:</h4>
              <p className="text-gray-700">
                Optimizamos el código para reducir el peso de las páginas, utilizamos técnicas de lazy loading, 
                y alojamos las aplicaciones en servidores con energía 100% renovable, reduciendo hasta un 60% 
                el consumo energético comparado con aplicaciones web convencionales.
              </p>
            </div>
          </div>

          {/* DAM */}
          <div className="mb-16 bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
            <div className="mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Desarrollo de Aplicaciones Multiplataforma</h2>
                <p className="text-blue-700 font-semibold">Desarrollo sostenible de aplicaciones multiplataforma</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Este servicio se dedica a desarrollar aplicaciones que puedan operar en varios sistemas operativos 
              y dispositivos, maximizando así su accesibilidad y funcionalidad. Este trabajo es realizado por 
              expertos del ciclo superior de Desarrollo de Aplicaciones Multiplataforma.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">¿Qué hacemos?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Creación de aplicaciones compatibles con diversos sistemas operativos como Android e iOS</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Desarrollo de aplicaciones que mantienen una funcionalidad y diseño coherentes en diversas plataformas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Adaptabilidad y flexibilidad para asegurar el correcto funcionamiento de las aplicaciones en diferentes dispositivos</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-2">⚡ Eficiencia energética:</h4>
              <p className="text-gray-700">
                Diseñamos aplicaciones que minimizan el consumo primario de recursos (batería, memoria, CPU), 
                utilizando frameworks optimizados y técnicas de programación eficiente que alargan la vida 
                útil de los dispositivos y reducen el consumo de energía en un 35% promedio.
              </p>
            </div>
          </div>

          {/* ASIX */}
          <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-200">
            <div className="mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Administración de Sistemas Informáticos en Redes</h2>
                <p className="text-purple-700 font-semibold">Administración sostenible de sistemas informáticos en redes</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Este servicio engloba la gestión y mantenimiento de redes y sistemas informáticos, asegurando 
              que operen de manera eficiente y segura. Los profesionales a cargo son del ciclo superior en 
              Administración de Sistemas Informáticos en Redes.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">¿Qué hacemos?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Configuración y mantenimiento de redes para asegurar una operación fluida y segura</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Implementación de medidas de seguridad para proteger los sistemas contra amenazas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Monitoreo constante para prevenir y solucionar problemas que puedan surgir, asegurando la continuidad y la eficiencia de los sistemas informáticos</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-100 rounded-lg p-6">
              <h4 className="font-bold text-purple-900 mb-2">♻️ Tecnologías renovables:</h4>
              <p className="text-gray-700">
                Implementamos estrategias para reducir el consumo energético en centros de datos y redes 
                mediante el uso de energías renovables, virtualización eficiente, refrigeración inteligente 
                y hardware de bajo consumo, logrando reducciones de hasta 50% en el consumo energético de 
                infraestructuras IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu empresa?</h2>
          <p className="text-xl mb-8">
            Descubre cómo nuestros servicios pueden ayudarte a reducir costes y mejorar tu impacto ambiental
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Solicita una consulta gratuita
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
