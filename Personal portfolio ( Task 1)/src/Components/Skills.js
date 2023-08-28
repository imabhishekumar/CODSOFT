import { SkillsData } from "./skillsdata"
import './skills.css'

export default function Skills(){
    return(
        <>
            <div className="skills" id="skills">
                <div className="skills-container">
                    <div className="skills-category">
                        <p>Frontend</p>
                    </div>
                    <div className="skills-section">
                            {SkillsData.map((item) =>{
                                return(
                                    <div className="skill-card">
                                        <div className="skill-icon">
                                            {item.icon}
                                        </div>
                                        <lable className="skill-name">
                                            {item.name}
                                        </lable>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}