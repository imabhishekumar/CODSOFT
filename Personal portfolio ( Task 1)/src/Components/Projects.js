import { ProjectData } from "./projectData";
import './projects.css'
export default function Projects() {
  return (
    <>
        <div className="projects-container" id="project">
            <div className="cards-container">
                <div className="cards">
                        {ProjectData.map((item) => {
                            return(
                              <div className="card">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                  <img src={item.img}/>
                                  <div class="card-details">
                                      <button>{item.tag}</button>
                                      <div class="card-name">{item.name}</div>
                                      <p>{item.desc}</p>
                                  </div>
                                </a>
                              </div>
                            )
                        })}
                </div>
            </div>
        </div>
    </>
  );
}
