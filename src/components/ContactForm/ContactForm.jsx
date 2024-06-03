import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFiealdId = useId();
  const phoneFiealdId = useId();

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <Form className={css.contactForm} autoComplete="off">
          <div className={css.formBox}>
            <label htmlFor={nameFiealdId}>Name</label>
            <Field
              className={css.fieldBox}
              type="text"
              name="name"
              id={nameFiealdId}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMsgForm}
            />
          </div>
          <div className={css.formBox}>
            <label htmlFor={phoneFiealdId}>Phone</label>
            <Field
              className={css.fieldBox}
              type="text"
              name="number"
              id={phoneFiealdId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMsgForm}
            />
          </div>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
