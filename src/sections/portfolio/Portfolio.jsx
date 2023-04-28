import PhotoCategories from "./PhotoCategories"
import Projects from "./Projects"
import "./portfolio.css"
import data from "./data"
import { useState } from "react"

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section id="portfolio">
    <h2>Featured Stuffs</h2>
    <p> look at all my neat stuffs</p>
    <div className="container portfolio__container">
    <PhotoCategories/>
    <Projects projects={projects}/>

    </div>    
    </section>
  )
}

export default Portfolio

