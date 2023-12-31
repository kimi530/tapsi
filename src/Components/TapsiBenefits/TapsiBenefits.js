import React from 'react'
import { Col , Row , Container , Button } from 'react-bootstrap'
import './TapsiBenefits.css'

const TapsiBenefits = () => {
    return (
        <div className="benefits">
            <Container>
                <Row>
                <Col md={6} >
                        <img src="./home-img/driver.webp" />
                    </Col>
                    <Col md={6} style={{ direction : 'rtl'}}>
                        <h2>مزایای تپسی برای رانندگان تاکسی اینترنتی</h2>
                        <p>رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.</p>
                        <h5>کسب درآمد روزانه، پایدار و بدون محدودیت</h5>
                        <ol>
                            <li>امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز</li>
                            <li>طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه به‌طور دوره‌ای</li>
                            <li>نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی</li>
                        </ol>

                        <h5>تضمین امنیت و پشتیبانی رانندگان</h5>
                        <ol>
                            <li>پشتیبانی ۲۴ ساعته</li>
                            <li>امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته تیم امنیت</li>
                        </ol>

                        <h5>واریز سهمیه بنزین ویژه رانندگان تپسی</h5>
                        <ol>
                            <li>نمایش میزان پیمایش ماهانه درون اپلیکیشن</li>
                            <li>محاسبه‌ی مسافت طی شده تا مسافر در پیمایش</li>
                        </ol>

                        <h5>استفاده از مزایای باشگاه رانندگان تپسی</h5>
                        <ol>
                            <li>تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و ...</li>
                            <li>تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید اقساطی و</li>                  
                        </ol>
                        <Button>ثبت نام راننده تاکسی آنلاین</Button>
                        <Button>دانلود برنامه تپسی راننده</Button>
                    </Col>
                
                </Row>
            </Container>          
        </div>
    )
}

export default TapsiBenefits
