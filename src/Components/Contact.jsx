import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="mt-10 md:mt-20 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold">
        Contact
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center px-4 mt-5 max-w-4xl mx-auto">
        Have a project or idea in mind? Let's connect and bring it to life!
      </p>

      <div className="mx-auto max-w-md w-full mt-8 md:mt-14 p-4 sm:p-6 rounded-2xl shadow-2xl border-gray-300 bg-gray-100 border-2">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            emailjs
              .send(
                "service_buc16y8",
                "template_j6olfzl",
                {
                  from_name: values.name,
                  from_email: values.email,
                  message: values.message,
                },
                "GlmtDOv-CI1Fd_zj7"
              )
              .then((res) => {
                toast.success("Message Sent Successfully!");
                resetForm();
              })
              .catch((err) => {
                console.error("EmailJS Error:", err);
                toast.error("Message failed to send. Please try again.");
                resetForm();
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block font-semibold text-sm sm:text-base mb-1">Name</label>
                <Field
                  type="text"
                  name="name"
                  className="w-full bg-gray-200 text-black border border-gray-300 p-2 sm:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs sm:text-sm mt-1"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-base mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full bg-gray-200 text-black border border-gray-300 p-2 sm:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs sm:text-sm mt-1"
                />
              </div>

              <div>
                <label className="block font-semibold text-sm sm:text-base mb-1">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  className="w-full bg-gray-200 text-black border border-gray-300 p-2 sm:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base resize-vertical min-h-[100px]"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs sm:text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-blue-300  text-white rounded-3xl py-2 sm:py-3 font-bold hover:scale-102 border-white  border-2 transition-transform duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="mt-4"
      />
        
   
    </div>
  );
};

export default Contact;