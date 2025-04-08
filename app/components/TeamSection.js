import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const team = [
  {
    name: "Manish Kumar",
    role: "Founder & CEO",
    image: "/images/manish.png",
    bio: "Visionary leader driving innovation and digital transformation.",
    linkedin: "https://linkedin.com/in/amitsharma",
  },
  {
    name: "Shyam Singh Rathore",
    role: "CMO",
    image: "/images/shyam.png",
    bio: "Tech strategist passionate about scalable architectures and clean code.",
    linkedin: "https://linkedin.com/in/priyamehta",
  },
  {
    name: "Sudhir Tiwari",
    role: "CTO",
    image: "/images/sudhir.png",
    bio: "Building robust backend systems and leading the dev squad.",
    linkedin: "https://linkedin.com/in/rohandesai",
  },
  {
    name: "Bhawana Minglani",
    role: "COO",
    image: "/images/bhawana.png",
    bio: "Designing intuitive, beautiful interfaces with user empathy at the core.",
    linkedin: "https://linkedin.com/in/nehakapoor",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f9fafb] py-16 px-6 md:px-20 mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-3">
          Meet the People Behind ProGateTechnology
        </h2>
        <p className="text-primary-text text-lg max-w-2xl mx-auto">
          A team of dreamers, builders, and problem-solvers driving digital innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team?.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl text-center shadow hover:shadow-lg transition h-[350px]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
            />
            <h3 className="text-lg font-semibold text-accent">{member.name}</h3>
            <p className="text-primary-text text-sm mb-2">{member.role}</p>
            <p className="text-primary-text text-sm leading-relaxed mb-3">{member.bio}</p>
            <div className="flex  items-center space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 w-full rounded-md bg-blue-700 text-white text-sm font-medium transition hover:bg-blue-800"
              >
                <FaLinkedinIn className="text-base" />
                Connect on LinkedIn
              </a>
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}
