import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { login } from "../../network/ApiAxios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const tryLogin = async () => {
    const response = await login(email, password);
    const { data } = response;

    if (data.success) {
      setError("");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.findEmail.id);
      props.history.push("/");
    } else {
      setPassword("");
      setError(data.msg);
    }
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          {" "}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Efetue login com suas credenciais</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="E-mail"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Senha"
                    type="password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              {/*<div className="custom-control custom-control-alternative custom-checkbox">*/}
              {/*    <input*/}
              {/*        className="custom-control-input"*/}
              {/*        id=" customCheckLogin"*/}
              {/*        type="checkbox"*/}
              {/*    />*/}
              {/*    <label*/}
              {/*        className="custom-control-label"*/}
              {/*        htmlFor=" customCheckLogin"*/}
              {/*    >*/}
              {/*        <span className="text-muted">Remember me</span>*/}
              {/*    </label>*/}
              {/*</div>*/}
              {error ? (
                <div className="text-muted font-italic">
                  <small>
                    error:{" "}
                    <span className="text-red font-weight-700">{error}</span>
                  </small>
                </div>
              ) : null}
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={tryLogin}
                >
                  Login
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="5" className="center">
            <Nav>
              <NavItem>
                <NavLink href="/auth/reset-password">Esqueceu a senha?</NavLink>
              </NavItem>
            </Nav>
            {/* <a
              className="text-light"
              onClick={() => props.history.push("/auth/reset-password")}
            >
              <small>Esqueceu a senha?</small>
            </a> */}
          </Col>
          {/*           <Col className="text-right" xs="6">
            <a
              className="text-light"
              onClick={() => props.history.push("/auth/register")}
            >
              <small>Create new account</small>
            </a>
          </Col> */}
        </Row>
      </Col>
    </>
  );
};

export default Login;
