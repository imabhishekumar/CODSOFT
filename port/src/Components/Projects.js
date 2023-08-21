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

        

{/* <div class="card-container">
  <ul class="cards">
    <li class="card">
      <div>
        <h3 class="card-title">Service 1</h3>
        <div class="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 2</h3>
        <div class="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 3</h3>
        <div class="card-content">
          <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 4</h3>
        <div class="card-content">
          <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 5</h3>
        <div class="card-content">
          <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 6</h3>
        <div class="card-content">
          <p>Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 7</h3>
        <div class="card-content">
          <p>Aliquam eget nisl auctor, sollicitudin ipsum at, dignissim ligula. Donec tincidunt in elit et pellentesque. Integer posuere metus ac massa mollis euismod.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 8</h3>
        <div class="card-content">
          <p> Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 9</h3>
        <div class="card-content">
          <p>Duis id congue turpis. Donec sodales porta felis, nec ultricies ante. Nam placerat vitae metus sit amet tempor. Aliquam ac dictum est.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 10</h3>
        <div class="card-content">
          <p>Pellentesque eget eros eget justo efficitur fermentum.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 11</h3>
        <div class="card-content">
          <p>Phasellus posuere nec nibh ut tincidunt. Aenean mollis turpis non eros posuere, at luctus leo hendrerit. Integer non libero sapien.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 12</h3>
        <div class="card-content">
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ornare metus ac lectus scelerisque volutpat.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
  </ul>
</div> */}
    </>
  );
}
