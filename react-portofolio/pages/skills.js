import Head from "next/head";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Agile Project/Program Management (CAPEX/OPEX)",
    "Doc Control & Drafting",
    "Procurement",
    "Contract Negotiation & Management",
    "Instrumentation/Control/Automation",
    "Internal & External Stakeholder Management",
    "Knowledge of MS Office",
    "Database Management",
    "Business Ops & Work Processes",
    "Relationships & Conflict Management",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>Skills - Jayessh Bharwani</title>
        <meta name="description" content="Skills and expertise of Jayessh Bharwani." />
      </Head>

      {/* Header */}
      <header className="w-full py-6 px-10 bg-gray-800 shadow-md fixed top-0 left-0 z-50">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Skills</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:text-teal-400 text-lg transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-teal-400 text-lg transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/work-experience" className="text-white hover:text-teal-400 text-lg transition-colors">
                Work Experience
              </a>
            </li>
            <li>
              <a href="/education" className="text-white hover:text-teal-400 text-lg transition-colors">
                Education
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
          <h1 className="text-5xl font-bold text-teal-400">My Skillset</h1>
          <p className="text-gray-300 mt-4 text-lg">
            Highlighting my core competencies and areas of expertise.
          </p>
        </motion.div>

        {/* Skills List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-teal-400 p-6 rounded-lg shadow-md hover:bg-teal-500 hover:text-white transition-colors"
            >
              <p className="text-lg font-semibold text-center">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

