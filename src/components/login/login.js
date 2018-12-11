import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Alert, Button } from "reactstrap";
import { routes } from "../../routes/routes";
import PropTypes from "prop-types";

const Login = ({ state, actions, loginstatus }) => {
  // const styles = {
  //   // "font-size": "24px"
  //   marginLeft: "12px"
  // };
  return (
    <Fragment>
      <Row className="show-grid">
        <h2>Login</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            actions.onSubmit(e);
          }}
        >
          {loginstatus.error ? (
            <Alert bsStyle="danger">
              <strong>Error : </strong> {loginstatus.error}
            </Alert>
          ) : null}

          <label>Email address</label>
          <input
            className="form-control custom-form-login"
            id="formControlsEmail"
            required
            name="email"
            value={state.email}
            onChange={e => actions.onHandleInput(e)}
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <label>Password</label>
          <input
            className="form-control custom-form-login"
            id="formControlsPassword"
            required
            name="password"
            value={state.password}
            onChange={e => actions.onHandleInput(e)}
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <Button type="submit">Login</Button>
        </form>
        <Row className="show-grid">
          <Col xs={3} md={4} sm={4} lg={3}>
            <h3>Not having an account ?</h3>
          </Col>
          <Col
            style={{
              padding: "0px"
            }}
            xs={3}
            md={4}
            sm={4}
            lg={8}
          >
            <Link to={routes.register}>
              <h3>Signup here</h3>
            </Link>
          </Col>
        </Row>
      </Row>
      ;
    </Fragment>
  );
};

Login.propTypes = {
  state: PropTypes.object,
  actions: PropTypes.object,
  loginstatus: PropTypes.object
};

export default Login;
