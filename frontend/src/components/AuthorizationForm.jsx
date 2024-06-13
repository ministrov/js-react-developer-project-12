import { Formik, Field, Form } from 'formik';

const AuthorizationForm = () => (
  <Formik
    initialValues={{ name: '', email: '' }}
  >
    <Form>
      <Field name="name" type="text" />
      <Field name="password" type="password" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default AuthorizationForm;
