import Image from "next/image";
import { Tag } from 'antd';
// import 'antd/dist/antd.css'
import { myService } from "../services/myService";
import { Project } from "./Project";

export default function Portfolio() {

  return (
    <section className="portfolio-container">
      <h1>Projects</h1>
      <section className="projects">
        {myService.getProjects().map(project => <Project key={project.id} project={project} />)}


      </section>
    </section>
  )
}
