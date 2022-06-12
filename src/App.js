import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import { BarChartLineFill } from "react-bootstrap-icons";
import { Activity } from "react-bootstrap-icons";
import { BookmarkStarFill } from "react-bootstrap-icons";
import { Wifi } from "react-bootstrap-icons";
import { UpcScan } from "react-bootstrap-icons";
import { BatteryFull } from "react-bootstrap-icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn to use <code>Bootstrap icons</code>.
        </p>
      </header>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12}>
            <h2 style={{ padding: "60px 50px" }}>Icon Sizes</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div
                style={{
                  height: "150px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <h4>Size 10</h4>
                <BarChartLineFill size="10" />
              </div>
            </Stack>
          </Col>
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div
                style={{
                  height: "150px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <h4>Size 40</h4>
                <BarChartLineFill size="40" />
              </div>
            </Stack>
          </Col>
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div
                style={{
                  height: "150px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <h4>Size 100</h4>
                <BarChartLineFill size="100" />
              </div>
            </Stack>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={12}>
            <h2 style={{ padding: "60px 50px" }}>Icon Colours</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div
                style={{
                  height: "150px",
                  paddingTop: "20px",
                }}
              >
                <BarChartLineFill size="100" color="#ee66ff" />
              </div>
            </Stack>
          </Col>
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div
                style={{
                  height: "150px",
                  paddingTop: "20px",
                }}
              >
                <BookmarkStarFill size="100" color="blue" />
              </div>
            </Stack>
          </Col>
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div
                style={{
                  height: "150px",
                  paddingTop: "20px",
                }}
              >
                <Activity size="100" color="red" />
              </div>
            </Stack>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={12}>
            <h2 style={{ padding: "60px 50px" }}>Icon Hover Colour</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div className="menu-icon">
                <Wifi size="100" className="wifi" />
              </div>
            </Stack>
          </Col>
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div className="menu-icon">
                <UpcScan size="100" className="scan" />
              </div>
            </Stack>
          </Col>
          <Col xs lg="2">
            <Stack gap={0} className="bg-light mx-auto my-auto">
              <div className="menu-icon">
                <BatteryFull size="100" className="battery" />
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
