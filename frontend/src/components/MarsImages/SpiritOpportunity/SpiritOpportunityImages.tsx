import { Col, Container, Row } from "react-bootstrap";
import { ImageViewer } from "../ImageViewer";
import "./SpiritOpportunityImages.scss";

export function SpiritOpportunityImages() {
  return (
    <Container className="twins-container">
        <Col>
        <ImageViewer
            minDate="2004-01-06"
            maxDate="2011-06-01"
            roverName="Spirit"
          />
          </Col>

          <Col>
        <ImageViewer
            minDate="2004-08-25"
            maxDate="2019-03-12"
            roverName="Opportunity"
          />
          </Col>
    </Container>


  );
}


