"use client";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight">Zoya Rehan</h1>
          <ul className="flex gap-6 text-sm font-medium text-gray-700">
            <li><a href="#about" className="hover:text-black transition">About</a></li>
            <li><a href="#projects" className="hover:text-black transition">Projects</a></li>
            <li><a href="#education" className="hover:text-black transition">Education</a></li>
            <li><a href="#skills" className="hover:text-black transition">Skills</a></li>
            <li><a href="#courses" className="hover:text-black transition">Courses</a></li>
            <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="bg-white text-black min-h-screen font-sans">
        {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <p className="text-lg text-gray-600 mb-2">Hello, I’m</p>
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">Zoya Rehan</h1>
        <p className="text-xl max-w-2xl text-gray-700">
          Undergraduate student at the University of Toronto, pursuing a Major in Mathematical Sciences with Minors in Computer Science and Statistics.
        </p>
        <button
          onClick={scrollToAbout}
          className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          About Me ↓
        </button>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="py-20 px-6 max-w-4xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-8 text-justify">
          My journey in Computer Science began in Lahore, Pakistan, where I first encountered programming through Visual Basic during my O Levels in 2018. What started as a curiosity quickly became a passion, I was captivated by logic, structure, and the creative potential of code. In A Levels, I deepened my skills in computer science, working through problem-solving, binary systems, file compression, and algorithm design using pseudocode. This early foundation shaped my decision to pursue my academic path at the University of Toronto, where I’m majoring in Mathematical Sciences with minors in Computer Science and Statistics. I continue to strengthen this foundation through coursework and hands-on projects that challenge me to think critically and solve real-world problems. 
          
          </p>

  <p className="text-lg leading-8 text-justify">
    Outside of academics, I find creative joy in photography and digital editing. I’ve worked in Pakistan as a product photographer, styling and capturing visual content for local businesses to help elevate their branding. I especially enjoy experimenting with lighting, composition, and color theory to create images that are both visually appealing and strategically designed. Photography has become a powerful outlet for self-expression and allows me to blend technical precision with artistic vision.
  </p>
      </section>

      {/* Education Section */}
<section id="education" className="py-20 px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

  <div className="space-y-10">
    {/* University of Toronto */}
    <div className="border-l-4 border-black pl-6">
      <h3 className="text-xl font-semibold">University of Toronto</h3>
      <p className="text-sm text-gray-600 mb-2">September 2023 – Present</p>
      <p className="text-gray-700 text-sm">
        Bachelor of Science: Major in Mathematical Sciences, Minors in Computer Science and Statistics.
      </p>
      <p className="text-gray-700 text-sm italic mt-1">
        • Entrance Award of Distinction for Academic Standing
      </p>
    </div>

    {/* Lahore Grammar School */}
    <div className="border-l-4 border-black pl-6">
      <h3 className="text-xl font-semibold">Lahore Grammar School (55 Main)</h3>
      <p className="text-sm text-gray-600 mb-2">December 2017 – June 2023</p>
      <p className="text-gray-700 text-sm">
        O-Level and A-Level qualifications with a strong foundation in technical subjects.
      </p>
      <p className="text-gray-700 text-sm mt-1">
        • O-Level Subjects: Computer Science, Physics, Mathematics
        <br />
        • A-Level Subjects: Mathematics, Computer Science, Physics
      </p>
      <p className="text-gray-700 text-sm italic mt-1">
        • Awarded 90% Academic Scholarship in A Levels
      </p>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">MewbileTech Billing System</h3>
            <p className="text-gray-700 text-sm">
              A contract-based billing system built in Python to process historical call records. It models customer behavior and generates monthly invoices using object-oriented programming and file parsing techniques.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Tree Maps Visualization</h3>
            <p className="text-gray-700 text-sm">
              An interactive visual tool built with a recursive tree data structure to model and display hierarchical file system data using Pygame. It calculates spatial layout using a custom tree map algorithm.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Huffman Compression Tool</h3>
            <p className="text-gray-700 text-sm">
              A file compression and decompression program developed with Huffman encoding. It constructs frequency trees and binary encodings to perform byte-level lossless compression.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Othello Game Engine</h3>
            <p className="text-gray-700 text-sm">
              A fully functional board game engine built in Java that handles complete Othello game logic. Designed with modular architecture and object-oriented design patterns, it supports user interaction and game state tracking.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Paint Application</h3>
            <p className="text-gray-700 text-sm">
              A Java-based desktop drawing app that allows users to create and manipulate custom shapes, choose colors, and interact with canvas elements. Developed using the MVC design and Java Swing.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">AI Image Generator Interface</h3>
            <p className="text-gray-700 text-sm">
              A front-end Java application where users input prompts to generate AI-produced images. It includes error handling and dynamic rendering of results based on user input.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">App Prototype (Figma – CCT250)</h3>
            <p className="text-gray-700 text-sm">
              Prototyped a functional mobile/web app using Figma, incorporating accessible UI/UX design principles and responsive layout. Created using Adobe XD and supported by research into best UI practices.
            </p>
          </div>

          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">High-Fidelity Multimedia App (CCT305)</h3>
            <p className="text-gray-700 text-sm">
              Led the design of a polished multi-page multimedia app with integrated user input, layout control, motion, and accessibility. Focused on applying user-centered design principles using Figma.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-14 text-center">Skills</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
    {/* Technical Skills */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
      <div className="flex flex-wrap gap-3">
        {[
      "Python", "Java", "JavaScript", "HTML", "CSS", "Next.js",
      "Node.js", "Git & GitHub", "Figma",  "SQL", "JSON", "APIs",
      "Object-Oriented Programming (OOP)", "Recursion", "MVC Architecture",
      "Test-Driven Development (TDD)", "Data Visualization", "Agile Workflow",
      "Linux CLI", "Responsive Design", "Version Control", "Software Architecture"
    ].map(skill => (
          <span key={skill} className="bg-black text-white px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
    {[
      "Problem-Solving", "Attention to Detail", "Teamwork",
      "Time Management", "Communication", "Adaptability",
      "Leadership", "Event Planning", "Collaboration",
      "Initiative", "Public Speaking", "Creative Thinking"
    ].map(skill => (
      <span key={skill} className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm">
        {skill}
      </span>
          ))}
        </div>
      </div>
    </div>
</section>
      {/* Qualifications Section */}
<section id="qualifications" className="py-20 px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-14 text-center">Qualifications</h2>

  <div className="relative border-l-2 border-gray-200 space-y-10 pl-6">
    <div>
      <span className="absolute left-[-10px] top-1 w-4 h-4 bg-black rounded-full"></span>
      <h3 className="text-lg font-semibold">Academic Excellence</h3>
      <p className="text-sm text-gray-700">
        • Entrance Award of Distinction – University of Toronto<br />
        • 90% Academic Scholarship – A Levels
      </p>
    </div>

    <div>
      <span className="absolute left-[-10px] top-1 w-4 h-4 bg-black rounded-full"></span>
      <h3 className="text-lg font-semibold">Foundations in Computer Science</h3>
      <p className="text-sm text-gray-700">
        Introduced to programming through Visual Basic in O Levels. Developed a strong base in binary, logic, and algorithm design in A Levels.
      </p>
    </div>

    <div>
      <span className="absolute left-[-10px] top-1 w-4 h-4 bg-black rounded-full"></span>
      <h3 className="text-lg font-semibold">Technical Proficiency</h3>
      <p className="text-sm text-gray-700">
        Experienced in Python, Java, React, Next.js, Tailwind, Git, and Figma. Applied concepts like MVC, recursion, file I/O, and data structures in real-world projects.
      </p>
    </div>

    <div>
      <span className="absolute left-[-10px] top-1 w-4 h-4 bg-black rounded-full"></span>
      <h3 className="text-lg font-semibold">Extracurricular Involvement</h3>
      <p className="text-sm text-gray-700">
        Member of WiSC (Women in STEM Club) — participated in weekly LeetCode sessions and team-based problem solving challenges.
      </p>
    </div>
  </div>
</section>
{/* Courses Section */}
<section id="courses" className="py-20 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">Notable University Courses</h2>

  <div className="space-y-6">
    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
      <summary className="cursor-pointer text-lg font-semibold">CSC148: Introduction to Computer Science</summary>
      <p className="mt-2 text-sm text-gray-700">
        Introduced core programming principles in Python including object-oriented programming, abstract data types, recursion, and algorithm design. Major assignments included a mobile billing system and recursive Huffman tree decompression.
      </p>
    </details>

    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
  <summary className="cursor-pointer text-lg font-semibold">CSC207: Software Design</summary>
  <p className="mt-2 text-sm text-gray-700">
    Covered principles of Java software design including object-oriented programming (OOP), clean code practices, and modular architecture. Explored key design patterns (Strategy, Observer, Factory), inheritance, interfaces, SOLID principles, and design for testability. Emphasis on the Model-View-Controller (MVC) pattern and separation of concerns. Applied concepts through a semester-long chess project that involved designing a playable UI with proper game state management using JavaFX and Git for version control. Learned how to write scalable, maintainable code using test-driven development (TDD) and continuous integration workflows.
  </p>
</details>

    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
      <summary className="cursor-pointer text-lg font-semibold">CSC236: Theory of Computation</summary>
      <p className="mt-2 text-sm text-gray-700">
        Introduced formal methods for analyzing recursive algorithms. Included correctness proofs via complete and structural induction. Covered finite automata and regular expressions in theoretical contexts.
      </p>
    </details>

    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
      <summary className="cursor-pointer text-lg font-semibold">STA256: Probability and Statistics I</summary>
      <p className="mt-2 text-sm text-gray-700">
        Covered expectations, variance, PMFs, PDFs, and transformations of variables. Worked with common distributions such as Binomial, Poisson, Gamma, Normal. Applied statistical reasoning to real-world problems.
      </p>
    </details>

    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
      <summary className="cursor-pointer text-lg font-semibold">MAT102: Introduction to Proofs</summary>
      <p className="mt-2 text-sm text-gray-700">
        Introduced foundational proof techniques including direct proof, contradiction, contrapositive, and mathematical induction. Included set theory and logic fundamentals. Emphasis on clear mathematical writing.
      </p>
    </details>

    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
      <summary className="cursor-pointer text-lg font-semibold">MAT223: Linear Algebra I</summary>
      <p className="mt-2 text-sm text-gray-700">
        Topics included systems of linear equations, matrices, determinants, eigenvalues/eigenvectors, subspaces, and orthogonality. Applied to solving real-world matrix transformations.
      </p>
    </details>

    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
      <summary className="cursor-pointer text-lg font-semibold">CCT250: Foundations of Digital Design</summary>
      <p className="mt-2 text-sm text-gray-700">
        Hands-on exploration of digital tools used in industry. Learned visual communication, layout, typography, and prototyping with tools like Figma and Adobe XD. Focused on user-centered design.
      </p>
    </details>

    <details className="group border-l-4 border-black bg-gray-50 px-4 py-3">
      <summary className="cursor-pointer text-lg font-semibold">CCT305: Design and Implementation of Multimedia Documents</summary>
      <p className="mt-2 text-sm text-gray-700">
      The principles and techniques of user-centered, functional design are introduced and applied to the analysis of software interfaces and the creation of multimedia documents. The roles of shared metaphors and mental models in clear, concise, and usable designs are emphasized. Students produced multimedia documents that effectively integrated text, color, user input, audio, and time-based visuals.      </p>
    </details>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
  <p className="text-lg text-gray-700 mb-6">
    
  </p>

  <div className="flex flex-col items-center gap-4">
    <a
      href="mailto:zoya.rehan@mail.utoronto.ca"
      className="text-blue-600 hover:underline text-lg"
    >
      zoya.rehan@mail.utoronto.ca
    </a>
    <a
      href="mailto:zoyarehan2904@gmail.com"
      className="text-blue-600 hover:underline text-lg"
    >
      zoyarehan2904@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/zoya-rehan-473b05318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline text-lg"
    >
      LinkedIn Profile
    </a>
  </div>
</section>


      
      </main>
    </>
  );
}