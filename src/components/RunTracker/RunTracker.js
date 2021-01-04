import React, { useState } from "react";
import Run from "../../utils/Run";
import RunRecordsContainer from "../RunRecordsContainer/RunRecordsContainer";
import "../../styles/RunTracker.css";
import Button from "react-bootstrap/Button";
import NewRunRecordForm from "../NewRunRecordForm/NewRunRecordForm";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import Statistics from "../Statistics/Statistics";
import RunRecords from "../RunRecords/RunRecords";

const RunTracker = () => {
    const initial_run_records = createInitialRunRecords();
    const [runRecords, setRunRecords] = useState(initial_run_records);
    const [addNewRecordClicked, setAddNewRecordClicked] = useState(false);

    function createInitialRunRecords() {
        const run1 = new Run(uuidv4(), "21/12/20", "50", "20:15", "5:47");
        const run2 = new Run(uuidv4(), "15/12/20", "25", "16:30", "6:00");
        const run3 = new Run(uuidv4(), "15/12/20", "25", "16:30", "6:00");
        const run4 = new Run(uuidv4(), "15/12/20", "25", "16:30", "6:00");
        const run5 = new Run(uuidv4(), "15/12/20", "25", "16:30", "6:00");
        const runs_arr = [run1, run2, run3, run4, run5];
        return runs_arr;
    }

    const deleteRunRecord = id => {
        let newRunRecords = [
            ...runRecords.filter(record => {
              return record.id !== id;
            })
          ];
        setRunRecords(newRunRecords);
    }
 
    const handleAddNewRecordClick = () => {
        setAddNewRecordClicked(!addNewRecordClicked);
    }
 
    const addNewRunRecord = record => {
        const newRunRecords = runRecords.concat(record);
        setRunRecords(newRunRecords);
        setAddNewRecordClicked(!addNewRecordClicked);
    }
 
    const changeNewRecordFormVisability = () => {
        setAddNewRecordClicked(!addNewRecordClicked);
    }

    return (
        <div className="run-tracker">
            <Header />
            <div id="menu-buttons">
                <Button id="add-new-record" onClick={handleAddNewRecordClick} variant="primary">Add a new record</Button>
                <Button id="reports" variant="primary">Reports</Button>
                <Button id="training" variant="primary">Training</Button>
            </div>
            <div id="run-records-container">
                <RunRecords runRecords={runRecords} onDeleteButtonClick={deleteRunRecord} />
            </div>
            <div id="statistics-container">
                <Statistics />
            </div>
            <div class="clear-fix"></div>
            { addNewRecordClicked ? <NewRunRecordForm onAddButtonClick={addNewRunRecord} onCancelButtonClick={changeNewRecordFormVisability} /> : null }  
        </div>
    );
}

export default RunTracker;