import React from 'react'
import { Col , Container , Row , Button } from 'react-bootstrap'
import './TapsiJobServices.css'

const TapsiJobServices = () => {
    return (
        <Container>
            <Row className="tabsiJobservices">
        <Row>
            <Col xs={12} md={6} className="service service2">
                <img src="/tapsi-job-services/i-mac.webp"  />
                </Col>

                <Col xs={12} md={6}  className="service" style={{direction: 'rtl'}}>
                    <h2>خدمات تپسی ویژه کسب‌وکارها</h2>
                    <p>پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.</p>
                   <a href=''>اطلاعات بیشتر سرویس سازمانی</a><br/>
                    <Button variant="danger">ورود و ثبت نام پنل سازمانی</Button>
                </Col>
                </Row>
           
           <Row className='second-child'>
                <Col xs={12} md={6} className="service service1" >
                    <img src="/tapsi-job-services/macbook.webp" />
                </Col>

                <Col xs={12} md={6} className="service" style={{direction: 'rtl' }}>
                    <h2>خرید کد اعتبار تپسی</h2>
                    <p>کد اعتبار تپسی امکان استفاده از تخفیف یک تا ده درصدی سفر با تپسی را برای کاربران، کسب و کارها و سازمان‌ها فراهم می‌کند. تنها با صرف چند دقیقه می‌توانید این کد را تهیه کنید تا هزینه سفرهایتان با تپسی را کاهش دهید یا آن را در اختیار کارکنان و مشتریانتان بگذارید.</p>
                    <Button variant="danger">خرید کد اعتبار و تخفیف</Button>
                </Col>          
                </Row>
            </Row>
        </Container>
    )
}

export default TapsiJobServices
