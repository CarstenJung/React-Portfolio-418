import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Modal } from '@mui/material';
import { useState } from 'react';

const ModalForm = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required'),
  });

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Contact Form
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <h2 id="modal-title">Contact Form</h2>
          <Formik
            initialValues={{ email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                handleClose();
              }, 400);
            }}
          >
            <Form>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" id="email"/>
              <ErrorMessage name="email" component="div" />

              <label htmlFor="message">Message</label>
              <Field name="message" component="textarea" id="message"/>
              <ErrorMessage name="message" component="div" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
}

export default ModalForm;
