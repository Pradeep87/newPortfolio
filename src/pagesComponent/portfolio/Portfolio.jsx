import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { workingProjects, projectData } from "../../data/constant";
import { workEx } from "../../assets";

const ProjectSection = ({ d }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === d.images.length - 1) {
          return 0;
        } else return prevCount + 1;
      });
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [d.images.length]);

  return (
    <div className="second-work">
      <p className="text" data-aos="zoom-in-up">
        <AiOutlineSend /> {d.project}
      </p>
      <img
        data-aos="zoom-in-up"
        className="projectImages"
        src={d.images[count]}
        alt={d.project}
      />
      <div className="techContainer" data-aos="zoom-in-up">
        {d.icons.map((i, idx) => (
          <div className="projectsIcon" key={idx}>
            {i.icon}
            <p className="lightText" style={{ color: i.color ? i.color : "" }}>
              {i.name}
            </p>
          </div>
        ))}
      </div>
      <p className="bigPara" data-aos="zoom-in-up">
        {d.description}
      </p>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolioSection stick">
      <h2 className="h1">My Work Experience</h2>

      <div className="myWork" data-aos="zoom-in-up">
        <div data-aos="zoom-in-up">
          <p className="text" data-aos="zoom-in-up" >
            <AiOutlineSend /> Software Development Engineer{" "}
          </p>
          <p className="lightText">
            Anix Inventive Pvt. Ltd.
            <br />
            (Nov 2023 – Present)
          </p>
          <p className="bigPara" data-aos="zoom-in-up">
            Led the development of Army projects using React, React-Electron, and
            Node.js ensuring seamless user interactions and
            optimized performance. Fixed critical bugs and optimized code in a
            React Native mobile app, significantly improving user experience and
            application stability.
          </p>

          <p className="text" data-aos="zoom-in-up"  style={{marginTop:'50px'}} >
            <AiOutlineSend /> Frontend Developer{" "}
          </p>
          <p className="lightText">
            Proponent Technologies <br />
            (22 may 2022 - Oct 2023)
          </p>
          <p className="bigPara" data-aos="zoom-in-up">
            Experienced in developing a Food app using the MERN stack,
            delivering a seamless ordering and delivery experience. Created a
            chat application using React.js and Getstream.io, enabling real-time
            communication and collaboration. Developed mobile apps using React
            Native Expo, providing cross-platform functionality for enhanced
            user experiences.
          </p>

          <p className="text" data-aos="zoom-in-up"  style={{marginTop:'50px'}} >
            <AiOutlineSend /> Web Developer Intern
          </p>
          <p className="lightText" data-aos="zoom-in-up">
            Koders-Dehradun <br />
            (10 january - 25 April 2022)
          </p>
          <p className="bigPara" data-aos="zoom-in-up">
            Worked on various front-end projects utilizing React.js and
            React-Electron. Developed responsive and user-friendly interfaces,
            implemented state management with Redux, and utilized React-Electron
            to create desktop applications. Collaborated with cross-functional
            teams to deliver high-quality solutions that exceeded client
            expectations.
          </p>
        </div>
        <div className="work-img">
          <img src={workEx} alt="" />
        </div>
      </div>

      <div className="projects">
        <h2 className="h1" data-aos="zoom-in-up">
          Projects Completed
        </h2>
        <div className="iconContainer">
          {projectData.map((d, idx) => (
            <ProjectSection d={d} key={idx} />
          ))}
        </div>
        <h2 className="h1" data-aos="zoom-in-up" style={{ marginTop: "100px" }}>
          Working Projects
        </h2>
        <div className="iconContainer">
          {workingProjects.map((d, idx) => (
            <ProjectSection d={d} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
