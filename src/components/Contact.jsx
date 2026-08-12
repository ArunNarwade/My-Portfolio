import React from 'react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <section className="contact fade-in-element" id="contactt">
      <div className="form">
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <h2>Contact Me</h2><br /><br />
          
          <input type="text" id="full-name" placeholder="Enter Your Full Name" name="full-name" required /><br />
          <input type="email" id="email" placeholder="Enter Your E-mail" name="email" required /><br />
          <input type="tel" id="phone" placeholder="Enter Your Phone Number" name="phone" required /><br />
          
          <textarea id="feedback" name="feedback" rows="4" placeholder="What can I help, let me know here..."></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="hire-card fade-in-element">
        <h2>Let's Work Together</h2>
        <p>Looking for a passionate and skilled professional to bring your ideas to life? You're in the right place! With expertise in Web development, content creation. I am dedicated to delivering high-quality work that meets and exceeds expectations. I take pride in my attention to detail, problem-solving abilities, and commitment to creating impactful solutions. Whether it’s a small project or a large-scale collaboration, I’m ready to help you achieve your goals. Let’s connect and make something amazing together!!</p>
        
        <h6><i className="fa-solid fa-phone-volume"></i> +91 9834985596 </h6> <br /><br />
        <h5>
          <i className="fa-solid fa-envelope"></i> 
          <a href="mailto:arunnarwade003@gmail.com" style={{ color: 'azure' }}> arunnarwade003@gmail.com</a>
        </h5><br /><br />
        
        <a href="https://m.me/Arun Narwade" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://ig.me/m/arun_n005" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://api.whatsapp.com/send?phone=+919834985596&text= Hii ....!!" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="https://t.me/arun_narwade" target="_blank" rel="noreferrer"><i className="fa-brands fa-telegram"></i></a>
      </div>
    </section>
  );
}