import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({ item }) => {
    return (
        <Row className='contactItem'>
            <Col lg={2} sm={4} className='item'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'></img>
            </Col>
            <Col lg={10} sm={8} className='item'>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row >
    )
}

export default ContactItem