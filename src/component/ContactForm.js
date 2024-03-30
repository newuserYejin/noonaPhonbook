import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)

    const addContact = (event) => {
        event.preventDefault();
        dispatch({ type: "ADD_contact", payload: { name, phoneNumber } })
    }

    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={(event) => setName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>PhonNumber</Form.Label>
                    <Form.Control type="number" placeholder="Enter PhonNumber" onChange={(event) => { setPhoneNumber(event.target.value) }} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm