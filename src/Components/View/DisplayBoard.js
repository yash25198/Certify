import React from 'react'

export const DisplayBoard = ({numberOfCerts, getAllCerts}) => {
    
    return(
        <div style={{backgroundColor:'Black'}} className="display-board">
            <h4 style={{color: 'white',textAlign:"center"}}>Certificates Claimed</h4>
            <div className="number">
            {numberOfCerts}
            </div>
            <div className="btnHolder">
                <button type="button" onClick={(e) => getAllCerts()} className="getUsersButton">Get Certificates</button>
            </div>
        </div>
    )
}