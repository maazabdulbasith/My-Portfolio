import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Header from "../../components/Header";

const contactSchema = yup.object().shape({
  from_name: yup.string().required("Name is required"),
  from_email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message cannot be empty"),
});

const initialValues = {
  from_name: "",
  from_email: "",
  message: "",
};

const ContactForm = () => {
  const handleFormSubmit = (values, { resetForm }) => {
    emailjs
      .send(
        "GmailService",      // 🔁 Replaced with your EmailJS service ID
        "template_jlsdr6l",     // 🔁 Replaced with your EmailJS template ID
        values,
        "q57VYH7X6RAZF1VFI"       // 🔁 Replaced with your public key
      )
      .then(() => {
        Swal.fire("Sent!", "Your message was sent successfully.", "success");
        resetForm();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        Swal.fire("Error", "Failed to send message. Try again later.", "error");
      });
  };

  return (
    <Box m="20px">
      <Header title="CONTACT ME" subtitle="Get in touch directly!" />
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="20px" maxWidth="600px">
              <TextField
                fullWidth
                label="Your Name"
                name="from_name"
                variant="outlined"
                value={values.from_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.from_name && Boolean(errors.from_name)}
                helperText={touched.from_name && errors.from_name}
              />
              <TextField
                fullWidth
                label="Your Email"
                name="from_email"
                variant="outlined"
                value={values.from_email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.from_email && Boolean(errors.from_email)}
                helperText={touched.from_email && errors.from_email}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
              <Button type="submit" variant="contained" color="secondary">
                Send Message
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
