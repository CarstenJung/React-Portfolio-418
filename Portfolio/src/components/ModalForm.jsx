import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Modal } from "@mui/material";
import axios from "axios";
import qs from "qs";
import { useState } from "react";

const ModalForm = ({ open, handleClose }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = {
      ...values,
      "form-name": "contactForm",
      "bot-field": "",
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url: "/",
    };
    try {
      await axios(options);
      setSubmitting(false);
      resetForm();
      setShowSuccessMessage(true);
      setTimeout(() => {
        handleClose();
        setShowSuccessMessage(false);
      }, 2000);
    } catch (e) {
      console.log(e.message);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="contactFormWrapper">
          <button className="closeModal" onClick={handleClose}>
            x
          </button>
          <h1 id="modal-title">Get in Touch</h1>
          <p>In Search of My 'TypeError: Company Not Found'</p>
          <Formik
            initialValues={{
              name: "",
              company: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form
              className="contactFormModal"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contactForm"
            >
              <Field type="hidden" name="bot-field" />
              <Field type="hidden" name="form-name" />
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" id="name" />
              <ErrorMessage name="name" component="div" />
              <label htmlFor="company">Company</label>
              <Field name="company" type="text" id="company" />
              <ErrorMessage name="company" component="div" />

              <label htmlFor="email">Email</label>
              <Field name="email" type="email" id="email" />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="message">Message</label>
              <Field name="message" component="textarea" id="message" />
              <ErrorMessage name="message" component="div" />
              {showSuccessMessage && (
                <div className="success-message">
                  Your message has been sent successfully!
                </div>
              )}
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
