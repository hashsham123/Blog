import { useRef } from "react";
import "../../styles/EmailContact.scss";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: {
      to_name: "",
      from_name: "",
      message: "",
    },
    validationSchema: Yup.object({
      to_name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      from_name: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values, resetForm);
    },
  });

  const sendEmail = (_values: any, resetForm: () => void) => {
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_gdk82h3",
        "template_6iw9fi8",
        form.current,
        "A4WsIm07SLl3wFrMh"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          alert("Email Sent, thanks for your response!");
          resetForm(); // Reset form after successful email submission
        },
        (error: any) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">
        Drop Your Mail{" "}
        <FeedbackIcon fontSize="large" sx={{ marginLeft: "1rem" }} />
      </h1>
      <span className="contactDesc">
        Please fill out the form to discuss any work opportunity.
      </span>
      <form
        className="contactForm"
        ref={form}
        onSubmit={formik.handleSubmit} // Use Formik's handleSubmit
      >
        <input
          type="text"
          className="name"
          placeholder="Please Enter Your Name"
          name="to_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.to_name}
        />
        {formik.touched.to_name && formik.errors.to_name ? (
          <div className="error">{formik.errors.to_name}</div>
        ) : null}
        <input
          type="email"
          className="email"
          placeholder="Please Enter Your Email"
          name="from_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.from_name}
        />
        {formik.touched.from_name && formik.errors.from_name ? (
          <div className="error">{formik.errors.from_name}</div>
        ) : null}
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Please Enter Your Message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="error">{formik.errors.message}</div>
        ) : null}
        <Button
          type="submit"
          value="send"
          className="port-email-button"
          variant="contained"
        >
          <MarkEmailReadIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />{" "}
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
