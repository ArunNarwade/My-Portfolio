import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Front-end ", "Full-Stack", "Web"],
      typeSpeed: 90,
      backSpeed: 20,
      backDelay: 1000,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home fade-in-element" id="homee">
      <div className="home-content" id="home">
        <h3>Hello, It's Me</h3>
        <h1>Arun Narwade</h1>
        <h3>And I'm a <span ref={typedRef} className="text"></span></h3> 
        <p> <h2>Developer</h2>
          I'm a Web Designer with extensive experience for over 1 year. <br />
          expertise is to create and website design, Frontend design, and Many more
        </p>
        <div className="home-sci">
          <a href="https://m.me/Arun Narwade" target="_blank" rel="noreferrer" style={{ '--i': 6 }}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://ig.me/m/arun_n005" target="_blank" rel="noreferrer" style={{ '--i': 7 }}>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+919834985596&text= Hi Arun, it’s great to connect with you ...!" target="_blank" rel="noreferrer" style={{ '--i': 8 }}>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://t.me/arun_narwade" target="_blank" rel="noreferrer" style={{ '--i': 9 }}>
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
      <div className="home-img"></div>
    </section>
  );
}