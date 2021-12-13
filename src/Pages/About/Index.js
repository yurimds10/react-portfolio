import React from "react";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            Frontend developer, width extensive knowledge, delivering quality work.
          </p>

          <div className="about__buttons">
            <a download="" href="" className="button button--flex">
              Download Cv <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}