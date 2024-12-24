"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Plane, RoundedBox } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import {Project2DCard} from "./Project2DCard";
import { Button } from "antd";
import { ProjectDataType } from "@/types";
import { AmbientLight, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { TextureLoader } from "three";
import Project3DCard from "./Project3DCard";
import Button3D from './Button3D';
import Switch from "./Switch";
import Television from "./Television";
import { Table } from "./Table";
import { AboutWall } from "./AboutWall";

export const Projects = () => {
  // mouse coords
  const [globalCoords, setGlobalCoords] = useState<{x:number,y:number}>({ x: 0, y: 0 });
  // screen dimentions
  const [screenDimention, updateScreenDimentions] = useState<{width:number,height:number}>({
    width: 0,
    height: 0,
  });


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

    const handleWindowMouseMove = (event: MouseEvent) => {
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



  useEffect(()=>{
    console.log(globalCoords);
  },[globalCoords]);

  if (screenDimention.width <= 900 ) {
    return (
      <div className="projects">
        <h2>Project Experience</h2>
        <div className="cards-container">
          {projectsData.map((data: ProjectDataType) => {
            return <Project2DCard key={data.id} data={data} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
        <Canvas
          shadows
          camera={{ position: [0, 6, 50], fov: 55 }}
          style={{
            width: "100%",
            height: "90vh",
            background: 'white',
          }}
        >
          {/* <OrbitControls/> */}
          <ambientLight color={'red'} intensity={1.5}/>
          <RoundedBox
          args={[1,2,3]}
          position={[0,0,0]}
          >
            <meshStandardMaterial color={'red'}/>
          </RoundedBox>
        </Canvas>
    );
  }
};


const projectsData : ProjectDataType[] = [
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


