import React from 'react';
import RunRecordsContainer from "../RunRecordsContainer/RunRecordsContainer";
import "../../styles/RunRecords.css";

const RunRecords = props => {
    return (
        <div>
            <div id="run-records-title">
                <h1>Records</h1>
            </div>
            <div id="run-records-data">
                <RunRecordsContainer id="run-records" runRecords={props.runRecords} onDeleteButtonClick={props.onDeleteButtonClick} />
            </div>
        </div>
    );
}

export default RunRecords;