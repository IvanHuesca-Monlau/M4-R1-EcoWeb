import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          {/* Sobre Huesgreen Dev */}
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold">Huesgreen Dev</h3>
          </div>
          <p className="text-gray-400 mb-5 leading-relaxed">
            Consultora especializada en desarrollo y despliegue de soluciones
            tecnológicas sostenibles. Innovación digital con responsabilidad
            ambiental.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Política de Neutralidad CO2 */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-green-900/30 rounded-lg p-6 border border-green-700">
            <div className="flex items-center mb-3">
              <BiWorld className="w-6 h-6 text-green-400 mr-2" />
              <h4 className="text-lg font-bold text-green-400">
                Compromiso de neutralidad de CO2
              </h4>
            </div>
            <p className="text-gray-300 text-sm">
              Huesgreen Dev opera con una huella de carbono neta cero. Nuestras
              oficinas funcionan con energía 100% renovable, y compensamos todas
              nuestras emisiones mediante proyectos certificados de
              reforestación y energía limpia. Además, todos nuestros servidores
              están alojados en centros de datos alimentados por energías
              renovables.
            </p>
            <p className="text-gray-300 text-sm mt-3 font-semibold">
              Esta página web está alojada en servidores 100% alimentados por
              energía renovable
            </p>
          </div>
        </div>

        {/* Copyright y legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Huesgreen Dev. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              Aviso legal
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              Términos de uso
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              Política ambiental
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
