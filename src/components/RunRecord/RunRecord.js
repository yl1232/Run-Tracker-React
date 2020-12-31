import React from "react";
import "../../styles/RunRecord.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import map from "../../images/map.JPG";

const RunRecord = props => {
    return (
        <div id="record">
            <Card border="secondary" style={{ width: '18rem' }} bg='light'>
                <Card.Img variant="top" src={ map } />
                <Card.Header as="h5">{props.record_data.date}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Distance: {props.record_data.distance}<br />
                    Time: {props.record_data.time}<br />
                    Pace: {props.record_data.pace}<br />
                    </Card.Text>
                    <Button variant="secondary" size="sm" onClick={() => props.onDeleteButtonClick(props.record_data.id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default RunRecord;