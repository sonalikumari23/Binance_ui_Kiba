import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useStyles } from "../../common/style";
import Appbar from "../../common/Appbar";
import Footer from "../../common/Footer";
import Lottie from "react-lottie";
import animationData from "../../../lotties/bitcoin2";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";

const SignIn = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStyles();
  var [state, setState] = useState();

  const formInitialSchema = {
    name: "",
    email: "",
    designation: "",
    company_name: "",
    contact: "",
    address: "",
    password: "",
  };

  const schema = yup.object().shape({
    name: yup.string().required("Full name is required"),

    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid Email"),

    designation: yup.string().required("Designation is required"),
    company_name: yup.string().required("Comany name is required"),
    contact: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    address: yup.string().required("Address is required"),
    password: yup.string().required("Password is required").min(8),
  });

  const handleFormSubmit = (values) => {
    console.log("Submitted Values", values);
  };
  const formik = useFormik({
    initialValues: formInitialSchema,
    validationSchema: schema,

    onSubmit: handleFormSubmit,
  });

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
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{
              marginTop: "53%",
              width: "80%",
              height: "auto",
              marginBottom: "40%",

              boxShadow: "0px 18px 53px 0px rgba(0, 0, 0, 0.3)",
            }}
          >
            <br />

            <div className="col-md-12 mt-0">
              <TextField
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Your Full Name"
                className="form-control"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter Your Email"
                className="form-control"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            {/* <div className="col-md-12 mt-2"> */}
            <br />

            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="contact"
                name="contact"
                value={formik.values.contact}
                onChange={formik.handleChange}
                placeholder="Enter Your Contact"
                className="form-control"
                error={formik.touched.contact && Boolean(formik.errors.contact)}
                helperText={formik.touched.contact && formik.errors.contact}
              />
            </div>
            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Enter Your Address"
                className="form-control"
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div>
            <div className="col-md-12 mt-4">
              <TextField
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter Your Password"
                className="form-control"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div className="col-md-12 mt-4">
              <button type="submit" className="btn btn-primary btn-block">
                REGISTER
              </button>
            </div>
            <b style={{ marginLeft: "80px" }}>Already have an account?</b>
            <Link to="/login">
              <b> Sign In</b>
            </Link>
            <br />
            <br />
            <br />
          </form>
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

export default SignIn;
