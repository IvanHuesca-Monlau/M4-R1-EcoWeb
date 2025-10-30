const testimonials = [
  {
    quote:
      "Gracias a Huesgreen Dev, redujimos nuestro consumo energético en un 45% y ahora todas nuestras operaciones digitales son carbono neutral. Una inversión que se pagó sola en menos de un año.",
    name: "María González",
    position: "CEO",
    company: "EcoCommerce Solutions",
  },
  {
    quote:
      "La migración a una infraestructura sostenible no solo mejoró nuestra imagen corporativa, sino que también redujo nuestros costes operativos en un 30%. Huesgreen Dev nos guió en cada paso del proceso.",
    name: "Carlos Martínez",
    position: "Director de TI",
    company: "BankGreen",
  },
  {
    quote:
      "Implementamos un sistema de gestión energética que nos permitió obtener la certificación ISO 14001. Nuestros clientes valoran nuestro compromiso ambiental y hemos visto un incremento del 25% en ventas.",
    name: "Laura Fernández",
    position: "Directora General",
    company: "TechSmart",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Casos de éxito
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Empresas que han transformado su impacto ambiental con nuestras
            soluciones
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 text-5xl mb-0">"</div>
              <blockquote className="text-gray-700 mb-4 italic">
                {testimonial.quote}
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.position} en {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
