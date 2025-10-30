const odsObjectives = [
  { num: 1, title: "Fin de la pobreza", color: "bg-red-600" },
  { num: 2, title: "Hambre cero", color: "bg-yellow-600" },
  { num: 3, title: "Salud y bienestar", color: "bg-green-600" },
  { num: 4, title: "Educación de calidad", color: "bg-red-700" },
  { num: 5, title: "Igualdad de género", color: "bg-orange-600" },
  { num: 6, title: "Agua limpia y saneamiento", color: "bg-cyan-500" },
  {
    num: 7,
    title: "Energía asequible y no contaminante",
    color: "bg-yellow-500",
  },
  {
    num: 8,
    title: "Trabajo decente y crecimiento económico",
    color: "bg-red-800",
  },
  {
    num: 9,
    title: "Industria, innovación e infraestructura",
    color: "bg-orange-700",
  },
  { num: 10, title: "Reducción de las desigualdades", color: "bg-pink-600" },
  {
    num: 11,
    title: "Ciudades y comunidades sostenibles",
    color: "bg-yellow-700",
  },
  {
    num: 12,
    title: "Producción y consumo responsables",
    color: "bg-amber-600",
  },
  { num: 13, title: "Acción por el clima", color: "bg-green-700" },
  { num: 14, title: "Vida submarina", color: "bg-blue-600" },
  { num: 15, title: "Vida de ecosistemas terrestres", color: "bg-lime-600" },
  {
    num: 16,
    title: "Paz, justicia e instituciones sólidas",
    color: "bg-blue-800",
  },
  {
    num: 17,
    title: "Alianzas para lograr los objetivos",
    color: "bg-indigo-800",
  },
];

const Ods = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            17 objetivos de desarrollo sostenible
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Alineamos nuestros proyectos con los ODS de la ONU para generar un
            impacto positivo global
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {odsObjectives.map((objective) => (
            <div
              key={objective.num}
              className={`${objective.color} text-white p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer`}
            >
              <div className="text-3xl font-bold mb-2">{objective.num}</div>
              <div className="text-xs leading-tight">{objective.title}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Nuestro compromiso con los ODS
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Los Objetivos de Desarrollo Sostenible (ODS) son un llamado
            universal a la acción para poner fin a la pobreza, proteger el
            planeta y garantizar que todas las personas gocen de paz y
            prosperidad para 2030. En Huesgreen Dev, integramos estos objetivos
            en cada proyecto que desarrollamos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Al solicitar nuestros servicios, las empresas no solo obtienen
            soluciones tecnológicas de vanguardia, sino que también contribuyen
            activamente al cumplimiento de estos objetivos globales,
            especialmente los relacionados con energía limpia (ODS 7), industria
            sostenible (ODS 9), ciudades sostenibles (ODS 11), producción
            responsable (ODS 12) y acción climática (ODS 13).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ods;
