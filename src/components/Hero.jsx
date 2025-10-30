const Hero = () => {
  return (
    <section id="inicio" className="relative py-20 overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/src/assets/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Huesgreen Dev
          </h2>
          <p className="text-3xl text-green-300 font-semibold mb-8 drop-shadow-md">
            Innovación tecnológica con impacto positivo
          </p>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-white">
              Combinamos la innovación digital con la responsabilidad ambiental, creando 
              aplicaciones y sistemas que optimizan recursos, reducen el consumo energético 
              y promueven una transformación tecnológica respetuosa con el planeta.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div>Energía renovable</div>
              </div>
              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">-40%</div>
                <div>Reducción CO2</div>
              </div>
              <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">Año 2050</div>
                <div>Neutralidad climática</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
