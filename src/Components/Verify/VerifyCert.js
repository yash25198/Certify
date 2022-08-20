import React from 'react'


const VerifyCert = ({onChangeForm, hashClaim }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Verify Cetificate</h2>
                <br/>
                <form>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Hash</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="hash" id="hash" aria-describedby="emailHelp" placeholder="Hash" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Address</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="address" id="address" aria-describedby="emailHelp" placeholder="0x0" />
                        </div>
                    </div>
                    <div className="btnHolder">
                        <button type="button" onClick= {(e) => hashClaim()} className="getUsersButton">Verify</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyCert;