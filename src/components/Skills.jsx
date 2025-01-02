
const skills = [
  { name: "JavaScript", color: "bg-yellow-500", stroke: "stroke-[#f9c68c]", percent: 80 },
  { name: "Java", color: "bg-yellow-500", stroke: "stroke-[#f9c68c]", percent: 80 },
  { name: "Python", color: "bg-purple-500", stroke: "stroke-[#8a2be2]", percent: 70 },
  { name: "MongoDB", color: "bg-red-700", stroke: "stroke-[#ff6347]", percent: 80 },
  { name: "Express", color: "bg-blue-700", stroke: "stroke-[#4682b4]", percent: 55 },
  { name: "React.js", color: "bg-cyan-500", stroke: "stroke-[#00bfff]", percent: 80 },
  { name: "Node.js", color: "bg-green-500", stroke: "stroke-[#32cd32]", percent: 30 },
  { name: "MySQL", color: "bg-green-700", stroke: "stroke-[#3cb371]", percent: 70 },
  { name: "API", color: "bg-red-500", stroke: "stroke-[#ff5733]", percent: 95 },
  { name: "HTML", color: "bg-red-500", stroke: "stroke-[#ff5733]", percent: 95 },
  { name: "CSS", color: "bg-blue-500", stroke: "stroke-[#1e90ff]", percent: 85 },
  { name: "Bootstrap", color: "bg-purple-500", stroke: "stroke-[#8a2be2]", percent: 70 },
  { name: "Tailwind", color: "bg-purple-500", stroke: "stroke-[#8a2be2]", percent: 70 },
  { name: "Redux", color: "bg-blue-500", stroke: "stroke-[#1e90ff]", percent: 85 },
];

const SkillCircles = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  p-4">
      <div className="h-2 bg-gradient-to-br from-cyan-400 to-lightBlue-400 rounded-lg shadow-[0_0_10px_#00d4d4] animate-move"></div>
      <div className="grid grid-cols-3 gap-8 w-full md:grid-cols-5 lg:grid-cols-7">

        {skills.map((skill, index) => (
          <div key={index} className="relative flex justify-center items-center group hover:scale-105 transition-transform duration-300">
            <svg
              className="w-40 h-40 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 160"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="80"
                cy="80"
                r="70"
                className={`${skill.stroke} fill-transparent stroke-10`}
                strokeDasharray="440"
                strokeDashoffset={`440 - ${(440 * skill.percent) / 100}`}
                style={{
                  transition: "stroke-dashoffset 1.5s ease-in-out",
                }}
              />
            </svg>
            <span
              className={`absolute text-white font-semibold text-xl transform transition-opacity opacity-100 group-hover:opacity-0`}
            >
              {skill.name}
            </span>

            {/* Skill Percentage Tooltip */}
            <div
              className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-105 group-hover:translate-y-4 group-hover:rotate-3 bg-black bg-opacity-70 rounded-full"
            >
              <span className="text-white font-medium text-xl transition-all group-hover:opacity-100 group-hover:translate-x-2">
                {skill.percent}%
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCircles;
