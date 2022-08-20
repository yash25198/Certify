import React from 'react'

export const DisplayBoard = ({Status}) => {

    return (
        <div style={{ backgroundColor: 'Black' }} className="display-board">
            <h4 style={{ color: 'white', textAlign: "center" }}>Verification Status</h4>
            <div className="number">
                {Status.hash}
                {(Status.status === "true") && <div className="numberValid">
                    Verified
                </div>}
                {(Status.status === "false") && <div className="numberInValid">
                    Failed
                </div>}
            </div>
        </div>
    )
}