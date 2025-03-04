function Contact() {
    return (
      <div className="contact-info">
        <h1>Irfan Raza</h1>
        <p><strong>Phone:</strong> +92 319 032 8860</p>
        <p><strong>Email:</strong> infanraz67@gmail.com</p>
        <p><strong>Address:</strong> Sector 5A-3, North Karachi</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/InfanRaza101" target="_blank">github.com/InfanRaza101</a></p>
      </div>
    );
  }

  // Education Component
  function Education() {
    return (
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Sept 2024 – Dec 2025</strong><br />
            <strong>Saylani Mass IT Training (SMIT)</strong><br />
            Web & Mobile App Development
          </li>
          <li>
            <strong>Nov 2024 – In Progress</strong><br />
            <strong>Meta (Facebook)</strong><br />
            Front-End Development, IOS & Android App Development
          </li>
          <li>
            <strong>Oct 2024 – Nov 2024</strong><br />
            <strong>Howard University</strong><br />
            Project Management Essentials
          </li>
          <li>
            <strong>Dec 2016 – Mar 2018</strong><br />
            <strong>Board of Secondary Education Karachi (BSEK)</strong><br />
            Matriculation with A Grade, Science Group
          </li>
        </ul>
      </section>
    );
  }

  // Skills Component
  function Skills() {
    return (
      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, DOM Manipulation, APIs</li>
          <li><strong>Soft Skills:</strong> Project Management, Teamwork, Time Management, Leadership, Critical Thinking, Troubleshooting, Effective Communication, Adaptability, Organization, Integrity, Attention to Detail</li>
          <li><strong>Additional Skills:</strong> Video Editing, Motion Graphics, Color Correction, Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, Artificial Intelligence (AI)</li>
        </ul>
      </section>
    );
  }

  // Work Experience Component
  function WorkExperience() {
    return (
      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Fiverr – Freelance Marketplace (2019 – Present)</strong><br />
            Freelance Video Editor & Graphic Designer<br />
            - Completed 500+ projects with top ratings.<br />
            - Edited high-quality videos for real estate, marketing, corporate, and social media.<br />
            - Maintained 100% order completion rate and delivered projects on time.<br />
            - Managed multiple projects simultaneously with strong time management skills.
          </li>
        </ul>
      </section>
    );
  }

  // Profile Component
  function Profile() {
    return (
      <section>
        <h2>Profile</h2>
        <p>
          Aspiring web developer with a solid foundation in HTML, CSS, and JavaScript. Developed responsive websites, interactive web pages, DOM manipulation, and worked with APIs. Seeking an internship to gain practical experience and contribute to the development of user-friendly and visually appealing websites.
        </p>
      </section>
    );
  }

  // Main App Component
  function App() {
    return (
      <div className="cv">
        <Contact />
        <Profile />
        <Education />
        <Skills />
        <WorkExperience />
      </div>
    );
  }

  // Render the App
  ReactDOM.render(<App />, document.getElementById('root'));