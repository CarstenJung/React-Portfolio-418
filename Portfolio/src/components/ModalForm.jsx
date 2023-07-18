import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Modal } from "@mui/material";

const ModalForm = ({ open, handleClose }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

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
              "bot-field": "",
              "form-name": "contact-form",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                /* alert(JSON.stringify(values, null, 2)); */
                setSubmitting(false);
                handleClose();
              }, 400);
            }}
          >
            <Form
              method="POST"
              className="contactFormModal"
              data-netlify="true"
              name="contact-form"
            >
              <Field type="hidden" name="bot-field" />
              <Field type="hidden" name="contact-form" />
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

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
