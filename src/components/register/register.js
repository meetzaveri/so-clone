import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, FormGroup, Button, Radio } from "reactstrap";
import PropTypes from "prop-types";
import { routes } from "../../routes/routes";

const Register = ({ state, actions }) => {
  return (
    <Fragment>
      <Row className="show-grid">
        <h2>Register</h2>
        <form
          className=""
          onSubmit={e => {
            e.preventDefault();
            actions.onSubmitRegistration(e);
          }}
        >
          <label>Name</label>
          <input
            id="formControlsName"
            className="form-control custom-form-register"
            style={{
              padding: "10px"
            }}
            required
            name="name"
            value={state.name}
            onChange={e => actions.onHandleInputForRegistration(e)}
            label="Name"
            type="text"
            placeholder="Enter Name"
          />

          <label>Email Address</label>
          <input
            style={{
              padding: "10px"
            }}
            id="formControlsEmail"
            className="form-control custom-form-register"
            required
            name="email"
            value={state.email}
            onChange={e => actions.onHandleInputForRegistration(e)}
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <label>Password</label>
          <input
            style={{
              padding: "10px"
            }}
            id="formControlsPassword"
            className="form-control custom-form-register"
            required
            name="password"
            value={state.password}
            onChange={e => actions.onHandleInputForRegistration(e)}
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <Button type="submit">Register</Button>
        </form>
        <Link to={routes.login}>
          <h3>Back to Login</h3>
        </Link>
      </Row>
      ;
    </Fragment>
  );
};

Register.propTypes = {
  state: PropTypes.object,
  actions: PropTypes.object
};

export default Register;
