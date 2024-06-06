// LoginComponent.jsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button, Form as BootstrapForm } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css"

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Aqui você pode fazer a chamada à API para realizar o login
    console.log('Login data:', values);
    setSubmitting(false);
  };

  return (
    <Container className='container-login'>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2 className="my-4">Login</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form className='form-login'>
                <BootstrapForm.Group controlId="formEmail">
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <Field name="email" type="email" as={BootstrapForm.Control} />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="formPassword">
                  <BootstrapForm.Label>Password</BootstrapForm.Label>
                  <Field name="password" type="password" as={BootstrapForm.Control} />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </BootstrapForm.Group>

                <Button type="submit" disabled={isSubmitting} className="mt-3">
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
