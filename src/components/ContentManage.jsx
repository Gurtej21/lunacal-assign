import React from "react";

const ContentManager = ({ selectedSection }) => {
  const renderContent = () => {
    switch (selectedSection) {
      case "AboutMe":
        return (
          <div className="aboutMe">
            Hello! I’m Jane Doe, a web developer with a strong passion for
            creating dynamic and user-friendly applications. With over five
            years of experience in both front-end and back-end development, I
            thrive on tackling complex challenges and staying updated with the
            latest technologies.I believe in the power of continuous learning and enjoy
            connecting with others who share a similar enthusiasm for technology
            and innovation. Feel free to reach out if you’d like to chat about
            web development, technology trends, or just to share a good recipe!
          </div>
        );
      case "Experience":
        return (
          <div>
            I've worked in various roles, including:
            <ul>
              <li>
                <strong>Senior Web Developer</strong> at XYZ Corp, leading a
                team to build a robust e-commerce platform. Responsibilities
                included overseeing the development process & ensuring high
                quality standards.
              </li>
              <li>
                <strong>Full Stack Developer</strong> at ABC Solutions,
                developing applications with React and Node.js.Contributed to the successful launch of a new
                CRM tool that streamlined client management processes.
              </li>
            </ul>
          </div>
        );
      case "Recommended":
        return (
          <div>
            Here are some resources I recommend:
            <ul>
              <li>
                <strong>Books:</strong> "Clean Code" by Robert C. Martin, "You
                Don't Know JS" by Kyle Simpson,"Designing Data-Intensive
                Applications" by Martin Kleppmann
              </li>
              <li>
                <strong>Online Courses:</strong> FreeCodeCamp, Coursera,
                 Codecademy
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="content">{renderContent()}</div>;
};

export default ContentManager;