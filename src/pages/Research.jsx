import headerImage from '../assets/images/header-3.jpg';

const Research = () => {
  return (
    <div>
      {/* Hero */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Investigación y desarrollo</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Innovación tecnológica para un futuro sostenible
          </p>
        </div>
      </section>

      {/* Introducción I+D */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro compromiso con la innovación</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En Huesgreen Dev, dedicamos importantes recursos a la <span className="font-bold text-blue-700">
              Investigación y desarrollo (I+D)</span> de soluciones tecnológicas con bajo impacto de CO2. 
              Nuestro objetivo es claro: alcanzar la <span className="font-bold text-green-700">neutralidad 
              climática en 2050</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trabajamos constantemente en nuevas metodologías, herramientas y tecnologías que permitan 
              a las empresas reducir su huella de carbono digital sin comprometer la funcionalidad o 
              el rendimiento de sus sistemas.
            </p>
          </div>

          {/* Áreas de Investigación */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Optimización energética</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Desarrollamos algoritmos y técnicas de programación que minimizan el consumo de recursos 
                computacionales, reduciendo el uso de CPU, memoria y energía en aplicaciones web y móviles.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Lazy loading inteligente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Compresión de datos avanzada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Renderizado eficiente</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Centros de datos verdes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investigamos sistemas de refrigeración pasiva, virtualización optimizada y gestión inteligente 
                de cargas de trabajo para reducir drásticamente el consumo energético de infraestructuras IT.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Refrigeración líquida inmersiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>IA para gestión de recursos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Hardware de bajo consumo</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Economía circular digital</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Promovemos la reutilización de hardware, el reciclaje de componentes electrónicos y el 
                desarrollo de software que extienda la vida útil de dispositivos antiguos.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Software ligero y eficiente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Reacondicionamiento de equipos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Gestión de e-waste</span>
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-8 border-2 border-teal-200 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Cloud computing sostenible</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Desarrollamos arquitecturas cloud que priorizan proveedores con energía 100% renovable y 
                optimizan la distribución geográfica de datos para minimizar latencias y consumo.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Edge computing verde</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Serverless eficiente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>CDN con energía limpia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos en desarrollo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos en desarrollo</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Iniciativas actuales que están transformando la industria tecnológica
            </p>
          </div>

          <div className="space-y-8">
            {/* Proyecto 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-linear-to-br from-blue-600 to-blue-800 p-8 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold">GreenCode AI</h3>
                  <p className="text-lg text-white mt-1">Proyecto en fase beta</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Inteligencia artificial para optimización de código
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Estamos desarrollando una IA que analiza código fuente y sugiere optimizaciones 
                    para reducir el consumo energético sin afectar la funcionalidad. Utiliza machine 
                    learning para aprender de millones de líneas de código eficiente.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">-35%</div>
                      <div className="text-sm text-gray-600">de consumo de CPU</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">-28%</div>
                      <div className="text-sm text-gray-600">de uso de memoria</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">-42%</div>
                      <div className="text-sm text-gray-600">de tiempo de carga</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo 2050 */}
      <section className="bg-linear-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">Año 2050</div>
            <h2 className="text-3xl font-bold mb-6">Nuestro objetivo: <span className="text-green-200">Neutralidad climática</span></h2>
            <p className="text-xl max-w-7xl mx-auto mb-8 leading-relaxed">
              Nos comprometemos a alcanzar la neutralidad de carbono en todas nuestras operaciones y 
              ayudar a nuestros clientes a hacer lo mismo. Cada proyecto que desarrollamos nos acerca 
              a este objetivo global.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-white">energía renovable</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-1">-80%</div>
                <div className="text-white">reducción emisiones</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-1">+500</div>
                <div className="text-white">empresas impactadas</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-1">15M€</div>
                <div className="text-white">invertidos en I+D</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
