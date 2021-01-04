import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState} from "react";
import "../../styles/NewRunRecordForm.css";
import Run from "../../utils/Run";
import { v4 as uuidv4} from "uuid";

const NewRunRecordForm = props => {
    const [date, setDate] = useState("");
    const [distance, setDistance] = useState("");
    const [time, setTime] = useState("");
    const [pace, setPace] = useState("");

    const handleAddButtonClick = event => {
        event.preventDefault();
        const record_id = uuidv4();
        const record = new Run(record_id, date, distance, time, pace);
        resetNewRecordFormData();
        props.onAddButtonClick(record);
    }

    const handleCancelButtonClick = event => {
        event.preventDefault();
        resetNewRecordFormData();
        props.onCancelButtonClick();
    }

    const resetNewRecordFormData = () => {
        setDate("");
        setDistance("");
        setTime("");
        setPace("");
    }

    const handleDateChange = event => {
        setDate(event.target.value);
    }

    const handleDistanceChange = event => {
        setDistance(event.target.value);
    }

    const handleTimeChange = event => {
        setTime(event.target.value);
    }

    const handlePaceChange = event => {
        setPace(event.target.value);
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <Form id="new-record-form">
                    <div id="title">
                        <h2 id="title">Add a new record</h2> 
                    </div>
                    <div id="inputs">
                        <Form.Group as={Row} controlId="formDate">
                            <Form.Label column sm="2">
                            Date:
                            </Form.Label>
                            <Col sm="2">
                            <Form.Control type="text" value={date} onChange={handleDateChange} />
                            </Col>
                        </Form.Group><br />

                        <Form.Group as={Row} controlId="formDistance">
                            <Form.Label column sm="2">
                            Distance:
                            </Form.Label>
                            <Col sm="2">
                            <Form.Control type="text" value={distance} onChange={handleDistanceChange} />
                            </Col>
                        </Form.Group><br />

                        <Form.Group as={Row} controlId="formTime">
                            <Form.Label column sm="2">
                            Time:
                            </Form.Label>
                            <Col sm="2">
                            <Form.Control type="text" value={time} onChange={handleTimeChange} />
                            </Col>
                        </Form.Group><br />

                        <Form.Group as={Row} controlId="formPace">
                            <Form.Label column sm="2">
                            Pace:
                            </Form.Label>
                            <Col sm="2">
                            <Form.Control type="text" value={pace} onChange={handlePaceChange} />
                            </Col>
                        </Form.Group><br />
                        </div>
                        <div id="buttons">
                            <Button variant="primary" id="cancel-button" onClick={handleCancelButtonClick}>Cancel</Button>
                            <Button 
                            variant="primary" 
                            onClick={handleAddButtonClick}
                            >Add
                            </Button>
                        </div>
                    </Form>
            </div>
        </div>
    );
}

export default NewRunRecordForm;