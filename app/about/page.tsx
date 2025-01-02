import { Github } from "../components/github/Github";

const About = () => {

  return (
    <div className="about">
      <h2>About me</h2>
      <div className="about-me-wrapper">
        <img src="/img/me.jpg" alt="hooman-hajarian" className="my-picture" />
        <p className="aboutme">
          This website is just an asset for me to show off part of my skills and
          my resume to help me find my place in tech industry as a full stack
          developer. I studied Hardware and Software engineering to be able to
          understand the concepts of computer language and how to build one and
          become a developer. Also finished my studies in coding for web,
          mobile, and software and still coding to add to my knowledge day by
          day.
        </p>
      </div>
      <p className="aboutme">
        All this project is coded by me usign{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js framework,{" "}
        </a>{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React{" "}
        </a>{" "}
        and liberaries such as
        <a href="https://ant.design/" target="_blank" rel="noreferrer">
          {" "}
          Ant Design
        </a>{" "}
        and{" "}
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          Material UI
        </a>{" "}
        and many more liberaries and dependencies for styling and components.
      </p>
      <p className="aboutme">
        Styling was done using using{" "}
        <a
          href="https://www.npmjs.com/package/node-sass"
          target="_blank"
          rel="noreferrer"
        >
          node-sass
        </a>{" "}
        library and 3D solar system was made by a library called{" "}
        <a href="https://threejs.org/" target="_blank" rel="noreferrer">
          Threejs
        </a>
        .
      </p>
      <p className="aboutme">
        Please do not hesitate to contact me through my social media links or
        phone number.
      </p>
      <h3>Github Activity</h3>
      <Github year={2020} />
      <Github year={2021} />
      <Github year={2022} />
      <Github year={2023} />
      <Github year={2024} />
      <Github year={2025} />
    </div>
  );
};

export default About;
