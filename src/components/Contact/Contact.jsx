import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
     <h2>Contact Me</h2>
    
    <div className="container_container">
      <form actions="">
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" reuired/>
        <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn=primary">Send Message</button>
        </form> 
    </div>
    </section>
  )
}

export default Contact
