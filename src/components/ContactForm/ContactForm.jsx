import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = { ...values };
        dispatch(addContact(newContact));

        resetForm();
      }}
    >
      <Form className={style.contactForm}>
        <label htmlFor={nameId}>Name</label>
        <Field name="name" type="text" id={nameId} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field name="number" type="text" id={numberId} />
        <ErrorMessage name="number" component="span" />

        <button className={style.formBtnSubmit} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
