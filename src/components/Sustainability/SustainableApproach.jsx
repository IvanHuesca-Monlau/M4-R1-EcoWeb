const SustainableApproach = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ventajas del mercado verde
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            En Huesgreen Dev ayudamos a las empresas a reducir sus{" "}
            <span className="font-bold text-green-700">costes ambientales</span>{" "}
            y aprovechar las ventajas competitivas del mercado verde. La
            eficiencia energética no solo beneficia al planeta, sino que
            también:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-green-900 mb-2">
                💰 Reduce costes operativos
              </h3>
              <p className="text-gray-700">
                Menor consumo energético se traduce en facturas más bajas y
                mayor rentabilidad.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-900 mb-2">
                🏆 Mejora la imagen corporativa
              </h3>
              <p className="text-gray-700">
                Los clientes valoran cada vez más el compromiso ambiental de las
                empresas.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="font-bold text-purple-900 mb-2">
                📈 Ventaja competitiva
              </h3>
              <p className="text-gray-700">
                Diferénciate en el mercado con certificaciones y prácticas
                sostenibles.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
              <h3 className="font-bold text-teal-900 mb-2">
                ⚖️ Cumplimiento normativo
              </h3>
              <p className="text-gray-700">
                Anticípate a regulaciones ambientales cada vez más estrictas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableApproach;