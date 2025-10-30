import headerImage from '../assets/images/header-4.jpg';

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            ¿Listo para transformar tu empresa? Hablemos sobre tus necesidades
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Formulario */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-gray-600 mb-8">
              Completa el formulario y nos pondremos en contacto contigo en
              menos de 24 horas
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Empresa *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tu dirección de correo electrónico"
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div>
                <label
                  htmlFor="servicio"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Servicio de interés *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="daw">Desarrollo de aplicaciones web</option>
                  <option value="dam">
                    Desarrollo de aplicaciones multiplataforma
                  </option>
                  <option value="asix">Administración de sistemas</option>
                  <option value="consultoria">
                    Consultoría en sostenibilidad
                  </option>
                  <option value="otro">Otro (detallar abajo)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y ayúdanos a entender tus necesidades..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors cursor-pointer"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
