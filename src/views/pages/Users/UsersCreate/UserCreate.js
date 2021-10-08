import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

import {
  getAllCompanies,
  createUser,
  getAllUserTypes,
} from "../../../../network/ApiAxios";

const UserCreate = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users_types_id, setUserType] = useState([]);
  const [companies_id, setUserCompanie] = useState([]);
  //const [userId, setUserId] = useState(null);
  const [error, setError] = useState("");

  const history = useHistory();

  const registerUser = async () => {
    if (!(name && cpf && email && password)) {
      setError(
        "Certifique-se de preencher todas as entradas e concordar com a política de privacidade"
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não conferem");
      return;
    }

    const response = await createUser(
      name,
      cpf,
      email,
      password,
      users_types_id,
      companies_id
    );

    console.log(response);

    const { data } = response;
    if (!data.success) {
      setError(data.msg);
      return;
    }

    setError("");
    setName("");
    setCpf("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUserType("");
    setUserCompanie("");
  };

  // Busca dos tipos de usuários

  const allTypeUser = useEffect(() => {
    const allTypeUsers = async () => {
      const users_types = await getAllUserTypes();
      const { data } = users_types;
      if (data.success) {
        setUserType(data.typeUser);
      }
    };
    allTypeUsers();
  }, []);

  const allCompanies = useEffect(() => {
    const allCompanies = async () => {
      const companies = await getAllCompanies();
      const { data } = companies;
      if (data.success) {
        setUserCompanie(data.companies);
      }
    };
    allCompanies();
  }, []);

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button
                outline
                color="white"
                sizy="lg"
                color="info"
                onClick={() => history.push("/admin/user-profile")}
              >
                Retornar a Listagem
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Novo Usuário</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informações do Usuário
                  </h6>
                  <div className="pl-lg">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nome do Usuário
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={name}
                            //id="name"
                            placeholder="Nome de Usuário"
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-cpf"
                          >
                            CPF
                          </label>
                          <Input
                            className="form-control-alternative"
                            //id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            E-mail
                          </label>
                          <Input
                            className="form-control-alternative"
                            //id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Tipo de Usuário
                          </label>

                          <Input
                            className="form-control-alternative"
                            type="select"
                            //id="userType"
                          >
                            {users_types_id.map((item, i) => (
                              <option
                                key={i}
                                className="form-control-label"
                                value={item.id}
                                onChange={(e) => setUserType(e.target.value)}
                              >
                                {item.type}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Companhia
                          </label>

                          <Input
                            className="form-control-alternative"
                            type="select"
                            //id="userCompanie"
                          >
                            {companies_id.map((item, i) => (
                              <option
                                key={i}
                                className="form-control-label"
                                value={item.id}
                                onChange={(e) =>
                                  setUserCompanie(e.target.value)
                                }
                              >
                                {item.name}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-password"
                          >
                            Senha
                          </label>
                          <Input
                            className="form-control-alternative"
                            //id="input-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-password"
                          >
                            Confirmar senha
                          </label>
                          <Input
                            className="form-control-alternative"
                            //id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="7">
                        <FormGroup>
                          <Button
                            onClick={registerUser}
                            //onClick={() => history.push("/admin/user-profile")}
                            variant="contained"
                            fullWidth
                            color="primary"
                            style={{ marginTop: "1rem" }}
                            className="mt-4"
                            type="button"
                          >
                            Salvar
                          </Button>
                        </FormGroup>
                        {error ? (
                          <div className="text-muted font-italic">
                            <small>
                              error:{" "}
                              <span className="text-red font-weight-700">
                                {error}
                              </span>
                            </small>
                          </div>
                        ) : null}
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserCreate;
