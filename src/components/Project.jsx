import React from "react";
import projects from "./Data/projects.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Project = () => {
  return (
    <Container className="my-3 projects">
      <h1>PROJECTS</h1>
      <Row className="justify-content-center">
        {projects.map((project) => (
          <Col
            key={project.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-stretch my-3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <Card className="bg-dark text-light w-100">
              <div className="img">
                <Card.Img
                  variant="top"
                  src={`/assets/${project.imageSrc}`}
                  alt={project.title}
                />
              </div>
              <Card.Body className="text-center d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mt-auto">
                  <Button
                    href={project.demo}
                    variant="primary"
                    className="mx-2"
                  >
                    Demo
                  </Button>
                  <Button
                    href={project.source}
                    variant="warning"
                    className="mx-2"
                  >
                    Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
