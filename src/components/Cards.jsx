import { motion } from "framer-motion";

export default function AnimatedCards() {
  const cards = [
    {
      id: 1,
      title: "Ecommerce Web",
      description: "HTML , CSS, JavaScript",
      gradient: "from-blue-500 to-indigo-500",
      buttonColor: "bg-indigo-500",
      buttonHover: "hover:bg-indigo-600",
      link: "https://prathmesh-kathe.github.io/E-Commerce-/",
    },
    {
      id: 2,
      title: "Notes",
      description: "React.Js, Redux",
      gradient: "from-green-400 to-teal-500",
      buttonColor: "bg-teal-500",
      buttonHover: "hover:bg-teal-600",
      link: "https://paste-app-eight-flame.vercel.app/",
    },
    {
      id: 3,
      title: "PortFolio",
      description: "HTML, CSS, JavaScript",
      gradient: "from-purple-500 to-pink-500",
      buttonColor: "bg-pink-500",
      buttonHover: "hover:bg-pink-600",
      link: "https://prathmesh-kathe.github.io/PortFolio/",
    },
    {
      id: 4,
      title: "BackGround Color Changer",
      description: "HTML, CSS, JavaScript",
      gradient: "from-red-500 to-orange-500",
      buttonColor: "bg-orange-500",
      buttonHover: "hover:bg-orange-600",
      link: "https://prathmesh-kathe.github.io/BG_Color_Changer/",
    },
    {
      id: 1,
      title: "Certificate_Application",
      description: "Discover the new-age features for seamless integration.",
      gradient: "from-blue-500 to-indigo-500",
      buttonColor: "bg-pink-500",
      buttonHover: "hover:bg-pink-600",
      link: " https://prathmesh-kathe.github.io/Certificate_Application/",
    },
    {
      id: 1,
      title: "Calculator",
      description: "HTML, CSS, JavaScript",
      gradient: "from-blue-500 to-indigo-500",
      buttonColor: "bg-indigo-500",
      buttonHover: "hover:bg-indigo-600",
      link: "https://prathmesh-kathe.github.io/calculator/",
    },
    {
      id: 1,
      title: "Pendind...",
      description: "Project is under development",
      gradient: "from-green-400 to-teal-500",
      buttonColor: "bg-indigo-500",
      buttonHover: "hover:bg-green-600",
      link: "",
    },
    {
      id: 1,
      title: "Pending...",
      description: "project is under development",
      gradient: "from-red-500 to-orange-500",
      buttonColor: "bg-indigo-500",
      buttonHover: "hover:bg-orange-600",
      link: "",
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-8 flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-10 blur-xl group-hover:opacity-30 transition-opacity`}
            ></div>

            {/* Card Content */}
            <div className="p-6 z-10 relative">
              <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                {card.title}
              </h2>
              <p className="text-gray-600">{card.description}</p>
              <a
                href={card.link}
                className={`inline-block mt-6 px-4 py-2 ${card.buttonColor} text-white rounded-lg shadow-md ${card.buttonHover} focus:outline-none transition-all`}
                target="_blank"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
