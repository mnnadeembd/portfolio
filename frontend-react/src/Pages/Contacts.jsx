import React from "react";
import MagneticButton from "..//Component/MagneticButton";

const Contact = () => {
  return (
    <section id="contact" data-cursor="yellow" className="section contact-section">
      <h2 className="text-center mb-2">Contact Me</h2>

      <p className="text-secondary text-center mb-4">
        Feel free to reach out for collaboration, project discussion
        or just to say hello.
      </p>

      <div className="container">
        <div className="row g-4 justify-content-center align-items-center">

          {/* LEFT SIDE INFO */}
          <div className="col-lg-5">
            <div className="contact-info p-4">

              <h2 className="mb-4 text-info text-center">
                Contact Information
              </h2>

              <div className="contact-content text-center">

                <div className="mb-4">
                  <h5>Address</h5>
                  <p className="text-secondary">
                    25/20, 4th floor, Munshibari Road, Zigatola, Dhaka-1209
                  </p>
                </div>

                <div className="mb-4">
                  <h5>Phone</h5>
                  <p className="text-secondary">
                    +880 1922 745118
                  </p>
                </div>

                <div className="mb-4">
                  <h5>Email</h5>
                  <p className="text-secondary">
                    mnndeembd@gmail.com
                  </p>
                </div>

                <div className="social-icons mt-4">
                  <a href="https://www.linkedin.com/in/mnnadeembd/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>

                  <a href="https://github.com/mnnadeembd" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>

                  <a href="https://x.com/mnnadeembd" target="_blank" rel="noreferrer">
                    <i className="fab fa-x"></i>
                  </a>

                  <a href="https://wa.me/8801922745118" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-7">
            <div className="contact-form p-4">

              <h2 className="mb-4 text-info text-center">
                Send a Message
              </h2>

              <form>
                <div className="row g-3">

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control contact-input"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control contact-input"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      rows="5"
                      className="form-control contact-input"
                      placeholder="Write Your Message"
                    ></textarea>
                  </div>

                  <div className="col-12 text-center buttons">
                    <MagneticButton className="btn contact-btn" type="submit">
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </MagneticButton>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;