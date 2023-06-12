import React from "react";
import { Container , Row , Col} from 'react-bootstrap'
import './Parallax.css'

const Parallax = () => {
  return (   
    <Container fluid className='parallax'>
         <Row className="containerdiv">
         <Col className='divar' md={3}>
        <h3 className='child'>بسته امنیت سفر</h3>
        <p>
          امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم
          متخصصین امنیت تپسی
        </p>
        
      </Col>
      <Col md={3}>
        <h3 className='child'>درخواست تلفنی</h3>
        <p>
          امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با
          شماره ۱۶۳۰
        </p>
      </Col>
      <Col md={3}>
        <h3 className='child'>دسترس‌پذیری برای توان‌یابان</h3>
        <p>
          امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر
          کمیسیون از سفر مسافران ویلچردار
        </p>
      </Col>
      <Col md={3}>
        <h3>امکانات هوشمند</h3>
        <p>
          سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و
          پیشنهادهای ویژه شما
        </p>
      </Col>
      </Row>
    </Container>
  
  );
};




export default Parallax;