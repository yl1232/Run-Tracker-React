import React from "react";
import "../../styles/RunRecordsContainer.css";
import RunRecord from "../RunRecord/RunRecord";

const RunRecordsContainer = props => {
    return (
        <div id="run-records">
            {props.runRecords.map(record => {
                            return (<RunRecord key={record.id} record_data={record} onDeleteButtonClick={props.onDeleteButtonClick} />);
                        }
                    )}
        </div>
    );
}

export default RunRecordsContainer;