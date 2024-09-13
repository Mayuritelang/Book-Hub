import React, {useRef} from 'react'
import { Navbar } from '../../Component/Layouts/Navbar/Navbar'
import './About.css'
import emaiJs from '@emailjs/browser'; 

export const About = () => {

  const form = useRef();
  const serviceId = "service_srngyjg"
  const templateId = "template_o0vlv4q"
  const publicKey = "wyD_NxdhXmK3GySSz"

  const handleSubmit = (e) => {
     e.preventDefault();
     emaiJs.sendForm(serviceId, templateId, form.current, publicKey)
     .then((res) => {
      console.log(res.text);
     })
     .catch((err) => {
      console.log(err.text);
     })
     e.target.reset();
  }

  return (
    <section>
        <Navbar darkTheme={true}/>
        <div className='about-us'>
          <h2 className='about-intro'>About Us</h2>
          <p>Welcome to Book Hub, your one-stop destination for all things books! <br/>
          At Book Hub, we believe in the transformative power of books. Whether you're a passionate reader, a casual browser, or someone seeking the perfect gift, our mission is to bring the world of literature to your fingertips.
          </p>
          <h3>Our Story</h3>
          <p>Book Hub was founded by a group of book lovers who wanted to create a haven for readers of all genres. From timeless classics to the latest bestsellers, we've carefully curated a collection that caters to every taste. Our journey began with a simple goal: to make books more accessible and enjoyable for everyone.</p>
          <h3>Our Commitment</h3>
          <p>At Book Hub, customer satisfaction is our top priority. We strive to provide exceptional service, from the moment you land on our website to the delivery of your book. Our dedicated support team is here to assist you with any inquiries, ensuring a smooth and enjoyable shopping experience.</p>
          <p>Thank you for choosing Book Hub. Happy reading!</p>
        </div>
        <hr/>
        <div className="container query-form">
                <h2 className='query-head'>If you have any queries feel free to ask here.</h2>

                <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" name="user_name" id="name" className="form-input" placeholder='Enter your name'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query:</label>
                        <textarea className="form-input" name="message" id="query" placeholder='Type your Query'></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="form-submit" />
                    </div>
                </form>
            </div>
    </section>
  )
}
