const teamMembers = [
  {
    name: "Ana Beltrán",
    role: "CEO & Fundadora",
    imgSrc: "src/assets/images/employee-1.jpg",
  },
  {
    name: "Jorge Ramírez",
    role: "CTO",
    imgSrc: "src/assets/images/employee-2.jpg",
  },
  {
    name: "Sofía Pérez",
    role: "Directora de sostenibilidad",
    imgSrc: "src/assets/images/employee-3.jpg",
  },
  {
    name: "David López",
    role: "Director de I+D",
    imgSrc: "src/assets/images/employee-4.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro equipo
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Expertos en tecnologías sostenibles comprometidos con un futuro
            mejor
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
