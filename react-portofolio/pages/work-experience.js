import Head from "next/head";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const jobs = [
    {
      title: "Engineering Manager/Technical Program Manager",
      company: "ACCELERA (By Cummins)",
      location: "Oevel, Belgium",
      duration: "Jan 2023 — Present",
      description: [
        "Directed engineering initiatives for hydrogen electrolyzers.",
        "Delivered packages for projects scaling from 10 MW to 200 MW.",
        "Ensured compliance and safety across global development efforts.",
        "Hired and managed a diverse team of over 25 engineering professionals.",
        "Established a remote engineering office in India, reducing costs by 40%.",
      ],
      backgroundImage: "/images/hydrogen-electrolyzers.jpg",
    },
    {
      title: "Sr. Technical Program Manager EMEA",
      company: "Amazon Web Services",
      location: "Dublin, Ireland",
      duration: "Jan 2022 — Jul 2022",
      description: [
        "Led data center initiatives for EMEA, driving efficiency improvements.",
        "Streamlined processes to achieve an 11% increase in operational efficiency.",
        "Reduced delivery timelines by an average of 3 weeks per project.",
        "Collaborated with cross-functional teams to meet strategic goals.",
        "Maintained compliance with regional regulations and best practices.",
      ],
      backgroundImage: "/images/data-center.jpg",
    },
    {
      title: "Assistant Manager",
      company: "Jain Irrigation Systems Ltd.",
      location: "Jalgaon, India",
      duration: "Aug 2013 — May 2015",
      description: [
        "Designed and implemented control and automation systems for agro-industrial projects.",
        "Supervised project execution, ensuring adherence to timelines and budgets.",
        "Collaborated with vendors to source high-quality equipment and materials.",
        "Provided technical training to team members and end-users.",
        "Achieved a 15% reduction in operational downtime through system optimization.",
      ],
      backgroundImage: "/images/irrigation-systems.jpg",
    },
    {
      title: "Senior Instrumentation Engineer",
      company: "Thermax Ltd.",
      location: "Pune, India",
      duration: "Jun 2007 — Jul 2013",
      description: [
        "Developed instrumentation designs for large-scale process control systems.",
        "Led a team of engineers in executing projects for diverse industries.",
        "Integrated advanced automation technologies to enhance productivity.",
        "Ensured compliance with international safety and quality standards.",
        "Successfully delivered over 50 turnkey projects on schedule and within budget.",
      ],
      backgroundImage: "/images/process-control.jpg",
    },
    {
      title: "Graduate Apprentice Engineer",
      company: "Oil and Natural Gas Corporation (ONGC)",
      location: "Mumbai, India",
      duration: "Jun 2006 — May 2007",
      description: [
        "Assisted in the design and maintenance of offshore instrumentation systems.",
        "Conducted inspections and troubleshooting to ensure operational reliability.",
        "Gained hands-on experience in field instrumentation and process control.",
        "Supported senior engineers in executing large-scale energy projects.",
        "Contributed to maintaining a safe and efficient working environment.",
      ],
      backgroundImage: "/images/oil-gas.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>Work Experience - Jayessh Bharwani</title>
        <meta name="description" content="Work experience and professional journey of Jayessh Bharwani." />
      </Head>

      {/* Header */}
      <header className="w-full py-6 px-10 bg-gray-800 shadow-md fixed top-0 left-0 z-50">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Work Experience</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:text-teal-400 text-lg transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/skills" className="text-white hover:text-teal-400 text-lg transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="/education" className="text-white hover:text-teal-400 text-lg transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-teal-400 text-lg transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 flex flex-col items-center px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-teal-400">Professional Journey</h1>
          <p className="text-gray-300 mt-4 text-lg">
            A detailed account of my work experiences and accomplishments.
          </p>
        </motion.div>

        {/* Job Descriptions */}
        <motion.div
          className="flex flex-col space-y-8 w-full max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gray-800 text-white p-6 rounded-lg shadow-md overflow-hidden"
              style={{
                backgroundImage: `url(${job.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-gray-900 bg-opacity-75 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-teal-400">{job.title}</h2>
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p className="text-sm text-gray-300">{job.location}</p>
                <p className="text-sm text-gray-300 mb-4">{job.duration}</p>
                <ul className="list-disc list-inside space-y-2">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-300">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

