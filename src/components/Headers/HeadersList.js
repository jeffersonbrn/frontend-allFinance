import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const HeaderList = () => {
  const history = useHistory();
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
                onClick={() => history.push("/admin/user-profile-created")}
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderList;
