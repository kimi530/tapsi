import React from 'react'
import { Container , Row , Col , Button } from 'react-bootstrap'

import './Main.css'

const Main = () => {
    return (
        <div>
          <div className="banner"></div>
         <img className="mobile d-lg-block d-md-none d-sm-none" src="./home-img/mockup-phone.webp" />
         <div className="tapsibox">
             <Container className="tapsibox-detail">         
                 <div>    
                 <h1>تپسی</h1>
                <h2>اپلیکیشن درخواست خودرو و پیک</h2>
                <Row className="my-4">
                <Col md={6}>
                <Button variant="light">
                    دانلود اپلیکیشن مسافران
                </Button>
                </Col>
                <Col md={6}>
                <Button variant="light">
                    وب اپلیکیشن مسافران
                </Button>
                </Col>
                <Col md={6}>
                <Button
                style={{ color:"#ffff" , border: "2px solid #ffff" , borderRadius:".8rem"}}
                 variant="outline-secondary">
                    دانلود اپلیکیشن رانندگان
                </Button>
                </Col>
                <Col md={6}>
                <Button 
                style={{ color:"#ffff" , border: "2px solid #ffff" , borderRadius:".8rem"}}
                 variant="outline-secondary">          
                ثبت‌نام راننده   
                </Button>
                </Col>
                 </Row>
                 </div>   
             </Container>          
         </div>
        </div>
    )
}

export default Main
