import React from "react";
import { Container , Row , Col } from 'react-bootstrap'
import cities from "../../cities";
import './Map.css'

const Map = () => {
  return (
    <div className='map-container'>
  <Container>
      <Row>
          <h2 className='mt-4 mb-4 m-1'>تپسی در ایران</h2>
      {cities.map((city) => {
          return(
              <Col xs={2}>
            <div className='city-item' key={city.id}>
            <p>{city.ir}</p>
            <p>{city.en}</p>
          </div>
          </Col>
          )
      })}  
      </Row>
  </Container>
  </div>
  );
};



export default Map;
