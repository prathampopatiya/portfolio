import Head from "next/head";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Post Grad Diploma in Petroleum Management for Executives",
      institution: "School of Petroleum Management, Gandhinagar, India",
      duration: "September 2012 — July 2014",
      details: [
        "Studied the science and economics of petroleum and energy business.",
        "Gained expertise in LNG, crude and fuel logistics, and renewable energy management.",
        "Learned cost control, project and portfolio management, and carbon footprint evaluation.",
        "Explored financial, marketing, and operations management within the energy sector.",
      ],
    },
    {
      degree: "Master of Science (Scientific Instrumentation)",
      institution: "Ernst-Abbe-Hochschule, Jena, Germany",
      duration: "September 2006 — August 2008",
      details: [
        "Advanced coursework and research in scientific instrumentation technologies.",
        "Acquired specialized knowledge in precision instruments and measurement systems.",
      ],
    },
    {
      degree: "Bachelor of Engineering (Instrumentation)",
      institution: "Gujarat University, Ahmedabad, India",
      duration: "June 2002 — May 2005",
      details: ["Studied core principles of instrumentation engineering and control systems."],
    },
    {
      degree: "Diploma in Engineering (Instrumentation)",
      institution: "AVPT Institute, Rajkot, India",
      duration: "August 1999 — May 2002",
      details: [
        "Focused on foundational concepts in instrumentation and process automation.",
        "Prepared for advanced engineering studies and professional practice.",
      ],
    },
  ];

  const trainings = [
    {
      course: "Multiple Internal Trainings on Hydrogen Systems",
      duration: "January 2023 — September 2024",
      details: [
        "Covered hydrogen systems maintenance, safety, and installations.",
        "Learned intellectual property, environment impact analysis, and HSE management.",
      ],
    },
    {
      course: "Lean Six Sigma - Yellow Belt",
      institution: "GPA (Internal Training)",
      duration: "November 2019",
    },
    {
      course: "FIDIC (Yellow Book)",
      institution: "Engie (Internal Training)",
      duration: "November 2016 — December 2016",
    },
    {
      course: "SharePoint & Office 365 Power User",
      institution: "Engie (Internal Training)",
      duration: "February 2017 — April 2017",
    },
    {
      course: "Project Management Professionals (35 hrs)",
      institution: "Engie (Internal Training)",
      duration: "January 2017 — April 2020",
    },
    {
      course: "VCA (VOL) - Industrial Safety Certificate for Managers and Supervisors",
      institution: "Jacobs (Internal Training)",
      duration: "May 2013 — May 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>Education - Jayessh Bharwani</title>
        <meta name="description" content="Education background of Jayessh Bharwani." />
      </Head>

      {/* Header */}
      <header className="w-full py-6 px-10 bg-gray-800 shadow-md fixed top-0 left-0 z-50">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Education</h1>
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
              <a href="/work-experience" className="text-white hover:text-teal-400 text-lg transition-colors">
                Work Experience
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
          <h1 className="text-5xl font-bold text-teal-400">Education & Certifications</h1>
          <p className="text-gray-300 mt-4 text-lg">
            A comprehensive overview of my academic qualifications and professional training.
          </p>
        </motion.div>

        {/* Education Section */}
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
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-teal-400">{edu.degree}</h2>
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-sm text-gray-300">{edu.duration}</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-300">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Section */}
        <motion.div
          className="mt-12 flex flex-col space-y-8 w-full max-w-5xl"
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
          <h2 className="text-4xl font-bold text-teal-400">Certifications & Trainings</h2>
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-teal-400">{training.course}</h3>
              {training.institution && (
                <h4 className="text-xl font-semibold">{training.institution}</h4>
              )}
              <p className="text-sm text-gray-300">{training.duration}</p>
              {training.details && (
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {training.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

