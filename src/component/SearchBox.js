import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
    let [searchName, setSearchName] = useState("")
    let dispatch = useDispatch()

    let searchResult = (event) => {
        event.preventDefault()
        dispatch({ type: "ContactSearch", payload: { searchName } })
    }

    return (
        <Form onSubmit={searchResult}>
            <Row>
                <Col lg={10} sm={8}>
                    <Form.Control type="text" placeholder="Enter Name" onChange={(event) => { setSearchName(event.target.value) }} />
                </Col>
                <Col lg={2} sm={4}>
                    <Button type='submit'>search</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox