import React from 'react'
import { Col ,Row ,Container } from 'react-bootstrap'

import './NewestTapsi.css'

const NewestTapsi = () => {
    return (
        <div>
            <Container>
            <Row className="blog">
            <h2>تازه‌ترین‌های وبلاگ تپسی</h2>
            <Col xs={12} md={4}>
                <div className="each-div">
                    <img src="/Newest/20230503-Blog-ShirazDay.jpg"  />
                    <div className="detail">
                    <h4>با تخفیف ویژه تپسی به شیرازگردی بروید</h4>
                    <p>از سال ۱۳۸۱، روز میانه بهار یعنی ۱۵ اردیبهشت با عنوان روز شیراز جشن گرفته می‌شود و امسال، تپسی این روز را با تخفیف شیرازگردی جشن می‌گیرد.</p>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4}>
             <div className="each-div">
                 <img src="/Newest/TapsiInvest-Blog.jpg"/>
                 <div className="detail">
                 <h4>دریافت بازده از کیف پول تپسی</h4>
                 <p>بسیاری از مسافران، به‌ویژه کسانی که به صورت روزمره از تپسی استفاده می‌کنند، ترجیح می‌دهند هزینه سفرهایشان را در کیف پول تپسی واریز کنند تا برای پرداخت هزینه سفر نیازی به وارد کردن شماره کارت و رمز نداشته باشند. در جدیدترین خدمت تپسی، این افراد از این پس می‌توانند با توجه به موجودی کیف پولشان، بازده روزشمار دریافت کنند.</p>
                 </div>
                 </div>   
            </Col>
            <Col xs={12} md={4}>
                <div className="each-div last-div">
                    <img src="/Newest/ChatGPT.jpg"/>
                    <div className="detail">
                    <h4>چت جی پی تی در اپلیکیشن تپسی</h4>
                    <p>هوش مصنوعی و امکانات و ابزارهای شگفت‌انگیز آن بحث داغ این روزها محسوب می‌شود. در میان همه موضوعات مربوط به هوش مصنوعی، چت جی پی تی (ChatGPT) به عنوان یکی از پرطرفدارترین‌ها شناخته می‌شود و دسترسی به آن از طریق اپلیکیشن تپسی ممکن شده است.</p>
                    </div>
                </div>
            </Col>
            </Row>          
            </Container> 
            
        </div>
    )
}

export default NewestTapsi
