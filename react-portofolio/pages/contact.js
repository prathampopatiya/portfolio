import Head from "next/head";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contactDetails = {
    address: "Britselei-50, Bus-101, Antwerp, Belgium",
    phone: "+32 486 316 475",
    email: "jayessh.bharwani@gmail.com",
    nationality: "Belgian",
    linkedin: "https://www.linkedin.com/in/jayessh-bharwani",
    github: "https://github.com/jayesshbharwani",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>Contact - Jayessh Bharwani</title>
        <meta name="description" content="Contact details for Jayessh Bharwani." />
      </Head>

      {/* Header */}
      <header className="w-full py-6 px-10 bg-gray-800 shadow-md fixed top-0 left-0 z-50">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Contact</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:text-teal-400 text-lg transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/education" className="text-white hover:text-teal-400 text-lg transition-colors">
                Education
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
          <h1 className="text-5xl font-bold text-teal-400">Get in Touch</h1>
          <p className="text-gray-300 mt-4 text-lg">
            Feel free to reach out for collaborations or inquiries.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="bg-gray-800 text-white p-8 rounded-lg shadow-md w-full max-w-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact Details</h2>
          <p className="text-lg">
            <span className="font-semibold">Address: </span>
            {contactDetails.address}
          </p>
          <p className="text-lg mt-4">
            <span className="font-semibold">Phone: </span>
            <a href={`tel:${contactDetails.phone}`} className="text-teal-400 hover:underline">
              {contactDetails.phone}
            </a>
          </p>
          <p className="text-lg mt-4">
            <span className="font-semibold">Email: </span>
            <a href={`mailto:${contactDetails.email}`} className="text-teal-400 hover:underline">
              {contactDetails.email}
            </a>
          </p>
          <p className="text-lg mt-4">
            <span className="font-semibold">Nationality: </span>
            {contactDetails.nationality}
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 text-3xl hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 text-3xl hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

