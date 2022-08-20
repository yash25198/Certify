import React from 'react'


const ClaimCert = ({onChangeForm, hashClaim }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Claim Cetificate</h2>
                <br/>
                <form>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Hash</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="hash" id="hash" aria-describedby="emailHelp" placeholder="Hash" />
                        </div>
                    </div>
                    <div className="btnHolder">
                        <button type="button" onClick= {(e) => hashClaim()} className="getUsersButton">Claim</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default ClaimCert