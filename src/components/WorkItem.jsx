import React from 'react'
import { Card, Col } from 'react-bootstrap'
import styled from 'styled-components'


function WorkItem(props) {
    return (
        <WorkCol sm={12} md={6} lg={4} xl={4} xxl={3}>
            <WorkCard style={{ "width": '18rem' }} className="mx-auto" >
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.stack}</Card.Subtitle>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </WorkCard>
        </WorkCol>
    )
}

export default WorkItem

const WorkCol = styled(Col)`
    margin: 1rem 0;
`
const WorkCard = styled(Card)`
    background-color:#f2f2f2;
    height:12.5rem;
`
