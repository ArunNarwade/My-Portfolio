import React from 'react';

export default function About() {
  return (
    <section className="about fade-in-element" id="about">
      <div className="about-img">
        <img src="/assets/Arun (2).jpg" alt="Arun Narwade Profile" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Developer !</h4>
        <p>
          I am a skilled web designer with over 1 years of experience in the industry. My passion lies in creating captivating website designs and implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience principles. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity..
        </p>
        <a href="/assets/Arun_K_Narwade_CV.pdf" download role="button" className="btn-box">
          <i className="fa-solid fa-download"></i> Download CV
        </a>
      </div>
    </section>
  );
}
