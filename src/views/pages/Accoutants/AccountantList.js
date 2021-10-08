import React from "react";
import * as Icon from "react-bootstrap-icons";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

import { useHistory } from "react-router-dom";

// core components

const AccountantList = () => {
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
                onClick={() =>
                  history.push("/admin/accountant-profile-created")
                }
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--9" fluid>
        {/* Table */}
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col-12">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Listagem de Contadores</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nome Contador</th>
                    <th scope="col">CPF</th>
                    <th scope="col">CRC</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Jefferson Bruno dos Reis Silva
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>050.567.254-55</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        012425/O-0
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Ativo
                      </Badge>
                    </td>
                    <td>
                      <th>
                        <Icon.CloudUpload color="white" size={20} />
                      </th>
                      <th>
                        <Icon.Pencil color="yellow" size={20} />
                      </th>
                      <th>
                        <Icon.Trash color="red" size={20} />
                      </th>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Jefferson Bruno dos Reis Silva
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>050.567.254-55</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        012425/O-0
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Ativo
                      </Badge>
                    </td>
                    <td>
                      <th>
                        <Icon.CloudUpload color="white" size={20} />
                      </th>
                      <th>
                        <Icon.Pencil color="yellow" size={20} />
                      </th>
                      <th>
                        <Icon.Trash color="red" size={20} />
                      </th>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Jefferson Bruno dos Reis Silva
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>050.567.254-55</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        012425/O-0
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Ativo
                      </Badge>
                    </td>
                    <td>
                      <th>
                        <Icon.CloudUpload color="white" size={20} />
                      </th>
                      <th>
                        <Icon.Pencil color="yellow" size={20} />
                      </th>
                      <th>
                        <Icon.Trash color="red" size={20} />
                      </th>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Jefferson Bruno dos Reis Silva
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>050.567.254-55</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        012425/O-0
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Ativo
                      </Badge>
                    </td>
                    <td>
                      <th>
                        <Icon.CloudUpload color="white" size={20} />
                      </th>
                      <th>
                        <Icon.Pencil color="yellow" size={20} />
                      </th>
                      <th>
                        <Icon.Trash color="red" size={20} />
                      </th>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Jefferson Bruno dos Reis Silva
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>050.567.254-55</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        012425/O-0
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Ativo
                      </Badge>
                    </td>
                    <td>
                      <th>
                        <Icon.CloudUpload color="white" size={20} />
                      </th>
                      <th>
                        <Icon.Pencil color="yellow" size={20} />
                      </th>
                      <th>
                        <Icon.Trash color="red" size={20} />
                      </th>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Jefferson Bruno dos Reis Silva
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>050.567.254-55</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        012425/O-0
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Ativo
                      </Badge>
                    </td>
                    <td>
                      <th>
                        <Icon.CloudUpload color="white" size={20} />
                      </th>
                      <th>
                        <Icon.Pencil color="yellow" size={20} />
                      </th>
                      <th>
                        <Icon.Trash color="red" size={20} />
                      </th>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AccountantList;
