import { ProjectDataType } from "@/types";
import { Project2DCard } from "./Project2DCard";

export const Project2D = ({projectsData}:{projectsData:ProjectDataType[]})=>{

    return(<div className="project2d">
            <h2>Project Experience</h2>
            <div className="cards-container">
              {projectsData.map((data: ProjectDataType) => {
                return <Project2DCard key={data.id} data={data} />;
              })}
            </div>
          </div>)
};