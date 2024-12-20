import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="dark bg-gray-900 min-h-screen flex flex-col">
      <Head>
        <title>Jayessh Bharwani Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Jayessh (Jay) Bharwani, showcasing his professional journey and expertise."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <header className="w-full py-4 px-10 bg-gray-800 shadow-md fixed top-0 left-0 z-50">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Jayessh Bharwani</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/contact">
                <a className="text-white hover:text-teal-400 text-lg transition-colors">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <a className="text-white hover:text-teal-400 text-lg transition-colors">
                  Skills
                </a>
              </Link>
            </li>
            <li>
              <Link href="/work-experience">
                <a className="text-white hover:text-teal-400 text-lg transition-colors">
                  Work Experience
                </a>
              </Link>
            </li>
            <li>
              <Link href="/education">
                <a className="text-white hover:text-teal-400 text-lg transition-colors">
                  Education
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-16">
        <div className="text-center px-6 md:px-10 lg:px-20">
          {/* Profile Section */}
          <div className="max-w-3xl mx-auto">
            <div className="relative inline-block">
              <img
                src="/profile-picture.jpg" // Replace with the path to your image
                alt="Jayessh Bharwani"
                className="w-48 h-48 rounded-full mx-auto border-4 border-teal-500 shadow-lg"
              />
            </div>

            <h1 className="text-5xl font-bold text-white mt-6">
              Jayessh (Jay) Bharwani
            </h1>
            <p className="text-teal-400 text-xl mt-2">
              CAPEX/OPEX Engineering & Program Manager
            </p>

            <p className="text-gray-300 mt-4 text-lg leading-7">
              Result-oriented global engineering and program manager with over 19 years of
              experience in CAPEX and OPEX EPC projects. Skilled in process engineering, 
              construction management, stakeholder relations, procurement, and resource 
              planning across sectors like data centers, renewable energy, and oil & gas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

