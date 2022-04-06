import React, { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStyles } from "../../common/style";
import Lottie from "react-lottie";
import animationData from "../../../lotties/bitcoin";

const LoginForm = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStyles();

  const formInitialSchema = {
    email: "",
    password: "",
  };

  let schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid Email"),
    password: yup.string().required("Password is required").min(8),
  });

  const handleFormSubmit = (values) => {
    console.log("Submitted Values", values);
  };
  return (
    <Fragment>
      <div
        className="container"
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-md-6 "
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={formInitialSchema}
            validationSchema={schema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            <Form
              style={{
                height: "60vh",
                width: "27vw",
                boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="col-md-12 mt-2">
                <br />
                <b style={{ margin: "auto", marginTop: "50px" }}>
                  Need an account? <Link to="/SignIn">Sign UP</Link>
                </b>
                {/* <a href="Employer_Registration.js">Sign up</a> */}
                <br />
                <br />
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  style={{
                    borderRadius: "40px",
                  }}
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  type="text"
                  name="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  style={{
                    borderRadius: "40px",
                  }}
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{
                    borderRadius: "40px",
                    background: "#324d88",
                  }}
                >
                  LOGIN
                </button>
              </div>
              <br />
              <b style={{ marginLeft: "33%" }}>
                <Link to="#">Forget password?</Link>
              </b>
              <br />
              <br />
            </Form>
          </Formik>
        </div>
        <div
          className="col-md-6 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
