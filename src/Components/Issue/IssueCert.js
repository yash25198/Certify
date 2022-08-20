import React from 'react'


const ClaimCert = ({onChangeForm, issueCert }) => {


    return(
        <div className="container">
            <div className="row">
                <div style={{marginLeft:"35%"}} className="col-md-20 mrgnbtm ">
                <h2 style={{textAlign:"center"}}>Issue Cetificate</h2>
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
                            <label htmlFor="exampleInputEmail1">Address of claimer</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="addClaimer" id="addClaimer" aria-describedby="emailHelp" placeholder="0x0" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="description" id="description" aria-describedby="emailHelp" placeholder="Description" />
                        </div>
                    </div>

                    <div className="btnHolder">
                        <button type="button" onClick= {(e) => issueCert()} className="getUsersButton">Issue</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default ClaimCert