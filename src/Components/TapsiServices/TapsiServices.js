import React , { useState , useEffect} from 'react'
import { Container , Col , Row , Card } from 'react-bootstrap'

import services from '../../json'
import './TapsiServices.css'

const TapsiServices = () => {

    const [ Services , setServices ] = useState(services[6])

    useEffect(() => {
       
    })

    const showDetailHandler = (id) => {
          services.filter((item) => {       
            if(item.id === id) {
                setServices(item)
            }      
        })        
    }

    return (        
        <Container className="services">
             <h2 className="tapsiservices-title">سرویس‌های تپسی</h2>
        <Row className='i'>
            {services.map((item) => {
                return (     
                    <>               
                     <Col xs={1} className="icons" onClick={() => showDetailHandler(item.id)}>
                         <div className="services-container">
                       <img src={item.icon} className="icon"/>
                       <p className="title">{item.name}</p>
                        </div>
                       </Col>                     
                       </>
                )
            })
            
            }
         </Row>
         <Row className="services-detail" >   
           <h4>{Services.name}</h4>
           <Col md={6}>
               <p>{Services.description}</p>
           </Col>
           <Col md={6}>
           <img style={{width: '90%'}} src={Services.image} />
           </Col>
            </Row>
         </Container>   
    )
}

export default TapsiServices
