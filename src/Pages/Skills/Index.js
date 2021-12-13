import React from "react";

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

const toggleSkills = () => {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== COMPONENT SKILLS ====================*/
export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {/* <!--==================== SKILLS 1 ====================--> */}
        <div className="skills__content skills__open">
          <div className="skills__header">
            <i className="uil uil-brackets-curly skills__icon"></i>

            <div>
              <h1 className="skills__title">Frontend developer</h1>
              <span className="skills__subtitle">Some month of experience</span>
            </div>
                                
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>
          </div>
        </div>

        {/* <!--==================== SKILLS 2 ====================--> */}
        <div className="skills__content skills__close">
          <div className="skills__header">
            <i className="uil uil-server-network skills__icon"></i>

            <div>
              <h1 className="skills__title">Backend developer</h1>
              <span className="skills__subtitle">Some months of experience</span>
            </div>
                                
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__php"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__node"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__firebase"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">55%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__python"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}