import React from 'react'
import { Col , Row , Container } from 'react-bootstrap'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
           <Container>
               <Row>
                   <Col lg={3} className="mb-3">
                       <h3>تپسی</h3>
                       <p>اپلیکیشن درخواست خودرو و پیک</p>
                       <p>تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</p>
                   </Col>

                   <Col lg={3} className="mb-3">                   
                       <ul>
                       <h5>تپسی</h5>
                           <li><a href="">وبلاگ تپسی</a></li>
                           <li><a href="">فرصت شغلی</a></li>
                           <li><a href="">تماس با ما</a></li>
                           <li><a href="">لوگو و هویت سازمانی</a></li>
                           <li><a href=""></a></li>
                           <li><a href="">معرفی راننده به تپسی</a></li>
                       </ul>
                   </Col>

                   <Col lg={3} className="mb-3">
                       <ul>
                       <h5>مسافران</h5>
                           <li><a href="">دانلود اپ مسافر</a></li>
                           <li><a href="">نسخه وب تپسی</a></li>
                           <li><a href="">پرسش های متداول مسافران</a></li>
                           <li><a href=""></a></li>
                           <li><a href="">شرایط و قوانین مسافران</a></li>
                           <li><a href="">باشگاه مشتریان</a></li>
                       </ul>
                   </Col>

                   <Col lg={3} className="mb-3">
                       <ul>
                       <h5>رانندگان</h5>
                       <li><a href="">دانلود اپ سفیر</a></li>
                           <li><a href="">ثبتنام راننده تاکسی اینترنتی</a></li>
                           <li><a href="">پرسش های متداول سفیران</a></li>
                           <li><a href="">شرایط و قوانین سفیران</a></li>
                           <li><a href=""></a></li>
                           <li><a href="">باشگاه سفیران</a></li>
                       </ul>
                   </Col>

                   <Col lg={3} className="mb-3">               
                       <ul>
                       <h5>کسب و کارها</h5>
                       <li><a href="">پنل سازمانی تپسی</a></li>
                           <li><a href="">خرید کد اعتبار و تخفیف</a></li>
                           <li><a href="">دریافت api</a></li>
                       </ul>
                   </Col>

                   <Col lg={3} className="mb-3">
                   <h6>تپسی در شبکه‌های اجتماعی</h6>
                    <span className="social-media">
                     <i className="fa fa-telegram"></i>
                      <i className="fa fa-instagram"></i>
                      <i className="fa fa-twitter"></i>
                      <i className="fa fa-linkedin"></i>
                      <i className="fa fa-facebook"></i> 
                    </span>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default Footer
