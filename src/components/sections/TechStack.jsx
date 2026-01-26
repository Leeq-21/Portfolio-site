import { useGSAP } from "@gsap/react";
import { techStackIcons } from "../../Constants";
import TechIcon from "../models/TechIcon";
import TitleHeader from "../TitleHeader";
import gsap from "gsap";

const TechStack = () => {

  useGSAP(() => {
    gsap.fromTo('.tech-card', {y: 50, opacity:0}, {y:0, opacity:1, duration:2,
      ease: 'power2.inOut', stagger: 0.6, scrollTrigger:{trigger:'skills', start:'top center' }
    })
  })

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Front-end Web-technologies & Tools "
          sub="(👉ﾟヮﾟ)👉 Tech I'm currently exploring"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              key={icon.name}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full">
                    <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
