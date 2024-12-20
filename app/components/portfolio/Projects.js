"use client";
import { useEffect, useState } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls, Plane } from "@react-three/drei";
// import { Physics, RigidBody } from "@react-three/rapier";
import Project2DCard from "./Project2DCard";
import { Button } from "antd";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import Project3DCard from "./Project3DCard";
// import Button2D from './Button3D';
// import Switch from "./Switch";
// import Television from "./Television";
// import { Table } from "./Table";
// import { AboutWall } from "./AboutWall";

export const Projects = () => {
  const [projects, showProjects] = useState(false);
  const [about, showAbout] = useState(false);
  const [switchState, updateSwitch] = useState(false);
  const [view3D, update3D] = useState(false);
  // loading textures
  // const [wallTexture, wallRoughness, groundTexture, groundRoughness] = useLoader(TextureLoader, ["/textures/wall/brick-wall.jpg", "/textures/wall/brick-wall-rough.jpg"
  //   , "/textures/ground/asphalt.jpg", "/textures/ground/asphalt-rough.jpg"])
  // screen dimentions
  const [screenDimention, updateScreenDimentions] = useState({
    width: 0,
    height: 0,
  });
  // mouse coords
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    updateScreenDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const screenSizeHandler = () => {
      updateScreenDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };

    window.addEventListener("resize", screenSizeHandler);
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("resize", screenSizeHandler);
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);



  // if (screenDimention.width <= 1200 || view3D) {
    return (
      <div className="projects">
        <h2 className="projects-header">Project Experience</h2>
        <Button
          disabled={screenDimention.width <= 1200}
          type="primary"
          style={{ marginRight: "auto", marginLeft: "auto", display: "block" }}
          onClick={() => {
            update3D(false);
          }}
        >
          3D View (Desktop Only)
        </Button>
        <div className="cards-container">
          {projectsData.map((data) => {
            return <Project2DCard key={data.id} data={data} update3D={update3D} />;
          })}
        </div>
      </div>
    );
  // } else {
  //   return (

  //     <Canvas
  //       shadows
  //       camera={{ position: [0, 6, 50], fov: 55 }}
  //       style={{
  //         width: "100%",
  //         height: "90vh",
  //         background: 'black',
  //       }}
  //     >


  //       <Physics>
  //         {/* <OrbitControls /> */}

  //         <ambientLight intensity={switchState ? 0.2 : 1} />
  //         {/* The TV */}
  //         <Television />
  //         {/* table */}

  //         {/* buttons */}
  //         {/* projects button */}
  //         <Button2D text="Go Back" func={() => { showProjects(false) }} projects={projects} position={[32.5, 16, 35]} textPos={[-0.5, -0.65, -2.5]} rotation={[0, -Math.PI / 2, 0]} args={[1, 3, 8]} />
  //         <Button2D text="Go Back" func={() => { showAbout(false) }} projects={projects} position={[-32.5, 10, 35]} textPos={[0.5, -0.65, 2.5]} rotation={[0, Math.PI / 2, 0]} args={[1, 3, 8]} />
  //         {/* projects button */}
  //         <Button2D text="View Projects" func={() => { showProjects(true) }} projects={projects} position={[25, -1, 1]} textPos={[-4, -0.5, 1]} rotation={[0, 0, 0]} args={[8, 3, 1]} />
  //         {/* about button */}
  //         <Button2D text="About Me" func={() => { showAbout(true) }} projects={projects} about={about} position={[-25, -6, 1]} textPos={[-2, -0.4, 1]} rotation={[0, 0, 0]} args={[8, 3, 1]} />
  //         {/* button */}
  //         <Button2D text="2D Version" func={() => { update3D(true) }} position={[25, 5, 1]} textPos={[-3, -0.5, 1]} rotation={[0, 0, 0]} args={[8, 3, 1]} />
  //         {/* light switch */}
  //         <Switch position={[-25, 0, 0]} updateSwitch={updateSwitch} switchState={switchState} />
  //         {/* walls and ground*/}


  //         <RigidBody type="fixed">
  //           <group receiveShadow>
  //             {/* tv wall */}
  //             <Plane
  //               receiveShadow
  //               position={[0, 0, 0]}
  //               args={[65, 30]} // Width, height, depth. Default is [1, 1, 1]
  //             >
  //               <meshPhongMaterial map={wallTexture} bumpMap={wallRoughness} bumpScale={1.3} />
  //             </Plane>
  //             {/* oposite tv wall */}
  //             <Plane
  //               receiveShadow
  //               position={[0, 0, 75]}
  //               rotation={[-Math.PI, 0, 0]}
  //               args={[65, 30]} // Width, height, depth. Default is [1, 1, 1]
  //             >
  //               <meshPhongMaterial map={wallTexture} bumpMap={wallRoughness} bumpScale={1.3} />
  //             </Plane>
  //             {/* projects wall */}
  //             <Plane
  //               receiveShadow
  //               position={[32.5, 0, 32.5]}
  //               rotation={[0, -Math.PI / 2, 0]}
  //               args={[90, 30]} // Width, height, depth. Default is [1, 1, 1]
  //             >
  //               <meshPhongMaterial map={wallTexture} bumpMap={wallRoughness} bumpScale={1.3} />
  //             </Plane>
  //             {/* oposite projects wall */}
  //             <Plane
  //               receiveShadow
  //               position={[-32.5, 0, 32.5]}
  //               rotation={[0, Math.PI / 2, 0]}
  //               args={[90, 30]} // Width, height, depth. Default is [1, 1, 1]
  //             >
  //               <meshPhongMaterial map={wallTexture} bumpMap={wallRoughness} bumpScale={1.3} />
  //             </Plane>
  //             {/* ground */}
  //             <Plane
  //               receiveShadow
  //               position={[0, -15, 32.5]}
  //               rotation={[-Math.PI / 2, 0, 0]}
  //               args={[65, 90]} // Width, height, depth. Default is [1, 1, 1]
  //             >
  //               <meshPhongMaterial map={groundTexture} bumpMap={groundRoughness} bumpScale={1.3} />
  //             </Plane>
  //           </group>
  //         </RigidBody>
  //         {projectsData.map((item) => {
  //           return <Project3DCard key={item.id} data={item} globalCoords={globalCoords} screenDimention={screenDimention} />
  //         })}
  //         {/* about wall */}
  //         <AboutWall />
  //         <Table />
  //       </Physics>
  //     </Canvas>
  //   );
  // }
};


const projectsData = [
  {
    id: 0,
    name: "Go Hike",
    position: "Full Stack Developer",
    year: " 2020-2021",
    href: "#",
    description:
      "Cordova-based mobile application that shows the hiking trails around the user and the user is able to see the route to the trail and the trail route itself on the map.",
    imgUrl: "/img/gohike.jpg",
    gitHub: "https://github.com/costa-rodrigo/goHike",
    position3D: [32.5, 7, 10],
  },
  {
    id: 1,
    name: "Farmer Fresh",
    position: "Full Stack Developer",
    year: " 2021-2022",
    href: "https://farmer-fresh-d266e.web.app/",
    description:
      "Java based mobile application that help farmers share their products and consumers are able to put an order for pick up or delivery.",
    imgUrl: "/img/farmerfresh.jpg",
    gitHub: "https://github.com/hoomanhajrian/FarmerFresh_android-app",
    position3D: [32.5, 7, 20],
  },
  {
    id: 2,
    name: "Patch App",
    position: "Full Stack Developer",
    year: " 2021-2022",
    href: "https://patch-app-a5afe.web.app/",
    description:
      "Online Platform for kids to learn, how to fix injuries in case of emergency. This platform was based on React Technology with the back end on AWS servers.",
    imgUrl: "/img/patchapp.jpg",
    gitHub: "https://github.com/costa-rodrigo/patch-frontend",
    position3D: [32.5, 7, 30],
  },

  {
    id: 3,
    name: "Movie Time",
    position: "Front End Developer",
    year: " 2022-2023",
    href: "https://movie-time-54da1.web.app/",
    description:
      "React based application using movie API and more features such as watching and commenting on the movies will be added later.",
    imgUrl: "/img/movie-time.jpg",
    gitHub: "https://github.com/hoomanhajrian/Moive-app",
    position3D: [32.5, 7, 40],
  },
  {
    id: 4,
    name: "Wedding Planner",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://react-redux-auth-544ed.web.app/",
    description:
      "We are here to make sure your event planning will go as perfect as it can be with the least affort using this platform. You can estimate your event total cost and book appointment for consultation about your event.",
    imgUrl: "/img/wedding.jpg",
    gitHub: "https://github.com/hoomanhajrian/EventPlanner",
    position3D: [32.5, 7, 50],
  },
  {
    id: 5,
    name: "Card Creator",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://card-creator-9f5f3.web.app/",
    description:
      "Platform for customizing your own business card and ordering it with QR code and NFC features that you can add to your card.",
    imgUrl: "/img/card-creator.jpg",
    gitHub: "https://github.com/hoomanhajrian/card-creator",
    position3D: [32.5, 7, 60],
  },
  {
    id: 6,
    name: "Tajhiz Aras",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://tajhizaras.ir/",
    description:
      "Online store for selling industrial kitchen equipment coded fully in React using Redux and many other libraries.(Site in farsi language)",
    imgUrl: "/img/tajhizaras.jpg",
    gitHub: "https://github.com/hoomanhajrian/tajhizaras",
    position3D: [32.5, -7, 10],
  },
  {
    id: 7,
    name: "Hesab Ketab",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://hesabketabapp.com/",
    description:
      "Online web application for small stores accounting and inventory management using React(TypeScript) and Nodejs",
    imgUrl: "/img/hesab.jpg",
    gitHub: "https://github.com/hoomanhajrian/hesabketab",
    position3D: [32.5, -7, 20],
  },
  {
    id: 8,
    name: "LapseMoon",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://lapsemoon-hoomanhajrian.vercel.app/",
    description:
      "Web site for photographer introduction and portfolio and resume using Nextjs and Nodejs.",
    imgUrl: "/img/lapsemoon.jpeg",
    gitHub: "https://github.com/hoomanhajrian/lapsemoon",
    position3D: [32.5, -7, 30],
  },
  {
    id: 9,
    name: "Littlesellca",
    position: "Full Stack Developer",
    year: " 2023-current",
    href: "https://littlesellca-hooman-hajarians-projects.vercel.app/",
    description:
      "Online Platform to connect web customers to Amazon Market place and the business social media.",
    imgUrl: "/img/littesellca.jpg",
    gitHub: "https://github.com/hoomanhajrian/littlesellca",
    position3D: [32.5, -7, 40],
  },
  {
    id: 10,
    name: "Pacivil",
    position: "Full Stack Developer",
    year: " 2023-2024",
    href: "https://pacivil.com",
    description:
      "Website using Next.js technology using react for front end and simple mail service for backend all server side rendered.",
    imgUrl: "/img/pacivil.jpg",
    gitHub: "https://github.com/hoomanhajrian/pacivil",
    position3D: [32.5, -7, 50],
  },

  {
    id: 11,
    name: "Tariq Louis",
    position: "Full Stack Developer",
    year: " 2024-2025",
    href: "https://www.tariq-mesopotamiaart.com/en",
    description:
      "Website using Next.js technology using react for front end and simple mail service for backend all server side rendered coded for 2 different UIs for 2 languages.",
    imgUrl: "/img/tariq.jpg",
    gitHub: "https://github.com/hoomanhajrian/tariq",
    position3D: [32.5, -7, 60],
  },
  {
    id: 12,
    name: "Gojunk4moving",
    position: "Full Stack Developer",
    year: " 2024-2025",
    href: "https://www.gojunk4moving.ca/",
    description:
      "Website using Next.js technology using react for front end and simple mail service for backend. Components being rendered on server mostly.",
    imgUrl: "/img/gojunk.jpg",
    gitHub: "https://github.com/hoomanhajrian/gojunk4moving",
    position3D: [32.5, 7, 70],
  },

];