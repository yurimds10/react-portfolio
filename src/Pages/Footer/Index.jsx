import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__bg">
        <div class="footer__container container grid">
          <div>
            <h1 class="footer__title">Yuri</h1>
            <span class="footer__subtitle">Frontend developer</span>
          </div>

          <ul class="footer__links">
            <li>
              <a href="#portfolio" class="footer__link">Portfolio</a>
            </li>

            <li>
              <a href="#contact" class="footer__link">Contact Me</a>
            </li>
          </ul>

          <div class="footer__socials">
            <a href="https://www.linkedin.com/in/yuri-ricardo-mendes-b34753214/" target="_blank" class="footer__social">
              <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.github.com/YuriMendess" target="_blank" class="footer__social">
              <i class="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank" class="footer__social">
              <i class="uil uil-instagram"></i>
            </a>
          </div>
        </div>

        <p class="footer__copy">&#169; Yuri Mendes. All right reserved</p>
      </div>
    </footer>
  )
}