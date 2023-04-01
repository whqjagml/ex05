import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const TodosPage = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>할일목록</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default TodosPage