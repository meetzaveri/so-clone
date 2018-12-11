import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { WritePostSchema } from "../../config/schema";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostForm = props => (
  <div className="login-container">
    <div className="login">
      <div className="form-container">
        <h1 className="login-title">Ask a question </h1>
        <Formik
          initialValues={{
            title: "",
            body: "",
            tags: ""
          }}
          validationSchema={WritePostSchema}
          onSubmit={values => {
            console.log("onsubmit props formik", values);
            props.actions.onSubmitForm(values);
          }}
        >
          {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
            handleReset
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-content">
                <div
                  className={`form-group-material ${!errors.email &&
                    touched.email &&
                    "has-success"} ${errors.email &&
                    touched.email &&
                    "has-error"}`}
                  id="login-email-wrapper"
                >
                  <label className={`control-label`}>Title</label>
                  <input
                    className={`${errors.email &&
                      touched.email &&
                      "is-invalid"} `}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    id="login-email"
                    type="text"
                    autoFocus=""
                  />
                  {errors.email && touched.email && (
                    <p className="help-text has-error invalid-feedback">
                      {errors.email}
                    </p>
                  )}
                  {/* <p className="help-text">Please enter your email address</p> */}
                </div>

                <div
                  className={`form-group-material ${!errors.body &&
                    touched.body &&
                    "has-success"} ${errors.body &&
                    touched.body &&
                    "has-error"}`}
                  id="login-body-wrapper"
                >
                  <label className={`control-label`}>Body</label>
                  <textarea
                    className={`${errors.body &&
                      touched.body &&
                      "is-invalid"} `}
                    value={values.body}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="body"
                    id="login-body"
                    type="body"
                    autoFocus=""
                  />
                  {errors.body && touched.body && (
                    <p className="help-text has-error invalid-feedback">
                      {errors.body}
                    </p>
                  )}
                  {/* <p className="help-text">Please enter a body</p> */}
                </div>

                <div
                  className={`form-group-material ${!errors.tags &&
                    touched.tags &&
                    "has-success"} ${errors.tags &&
                    touched.tags &&
                    "has-error"}`}
                  id="login-email-wrapper"
                >
                  <label className={`control-label`}>Tags</label>
                  <input
                    className={`${errors.tags &&
                      touched.tags &&
                      "is-invalid"} `}
                    value={values.tags}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="tags"
                    id="write-tags"
                    type="text"
                    autoFocus=""
                  />
                  {errors.email && touched.email && (
                    <p className="help-text has-error invalid-feedback">
                      {errors.email}
                    </p>
                  )}
                  {/* <p className="help-text">Please enter your email address</p> */}
                </div>

                <div className="btn-group">
                  <button
                    type="submit"
                    id="loginButton"
                    className="btn btn-login btn-success"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </div>
);

PostForm.propTypes = {
  actions: PropTypes.shape({
    onSubmitForm: PropTypes.func
  })
};

export default PostForm;
