import React, { useEffect, useState } from "react";
import "./index.scss";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { object, string } from "yup";
const SignUpSchema = object().shape({
  Name: string()
    .min(3, "Name must be at least 3 characters.")
    .max(15, "Name cannot exceed 15 characters.")
    .required("Name is required."),

  email: string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
      "Please enter a valid email address."
    )
    .required("Mail is required."),

  subject: string()
    .min(4, "Subject must be at least 4 characters.")
    .required("Subject is required."),

  message: string()
    .min(10, "Message must be at least 10 characters.")
    .required("Message is required."),
});

const Contact = () => {
  const [form, setForm] = useState(
    localStorage.getItem("form") ? JSON.parse(localStorage.getItem("form")) : []
  );
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="messageBox">
            <div className="cardInfos">
              <div className="cardInfo">
                <div className="cardImg">
                  <img
                    src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-1.png"
                    alt=""
                  />
                </div>
                <div className="cardContent">
                  <div className="cardTitle">
                    <h3 className="title">contact us</h3>
                  </div>
                  <div className="cardDesc">
                    <span>Israfilsupol836@gmail.com</span>
                    <span>088 - 01869018907</span>
                  </div>
                </div>
              </div>
              <div className="cardInfo">
                <div className="cardImg">
                  <img
                    src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-2.png"
                    alt=""
                  />
                </div>
                <div className="cardContent">
                  <div className="cardTitle">
                    <h3 className="title">Our Location</h3>
                  </div>
                  <div className="cardDesc">
                    <span>Hera Road 2344-78</span>
                    <span>Australia 897- South Side Melbon</span>
                  </div>
                </div>
              </div>
              <div className="cardInfo">
                <div className="cardImg">
                  <img
                    src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ci-3.png"
                    alt=""
                  />
                </div>
                <div className="cardContent">
                  <div className="cardTitle">
                    <h3 className="title">Opening Hours</h3>
                  </div>
                  <div className="cardDesc">
                    <span>Mon - Sat (8:00 - 6:00)</span>
                    <span>Sunday - Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <Formik
              initialValues={{
                Name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values, { resetForm }) => {
                setForm([...form, values]);
                resetForm();
              }}
            >
              {({ isValid, dirty }) => (
                <Form>
                  <div className="initialInputs">
                    <div className="initialInput">
                      <div className="container">
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Your Name:"
                          className="name"
                        />
                        <div className="error-message">
                          <ErrorMessage name="Name" />
                        </div>
                      </div>
                    </div>
                    <div className="initialInput">
                      <div className="container">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Your Mail:"
                          className="email"
                        />
                        <div className="error-message">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Enter your subject here:"
                      className="subject"
                    />
                    <div className="error-message">
                      <ErrorMessage name="subject" />
                    </div>
                    <Field
                      type="text"
                      name="message"
                      placeholder="Enter your message here:"
                      className="message"
                    />
                    <div className="error-message">
                      <ErrorMessage name="message" />
                    </div>
                  </div>

                  <button type="submit" disabled={!isValid || !dirty}>
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <section id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.4756047747733!2d49.81292059437469!3d40.3702029700623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAzerbaijan%20Technical%20University!5e0!3m2!1str!2saz!4v1701647656647!5m2!1str!2saz"
          width="800"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Contact;
