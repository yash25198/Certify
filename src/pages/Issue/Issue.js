import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Issue.css';
import ClaimCert from '../../Components/Issue/IssueCert'
import { issueCert } from '../../Services/View/UserService'

function Issue() {

  const [cert, setCert] = useState({})

  const IssueCertificate = () => {

    issueCert(cert)
      .then(response => {
        console.log(response);
      });
  }

  const onChangeForm = (e) => {
    if (e.target.name === 'hash') {
      cert.hash = e.target.value;
    } else if (e.target.name === 'addClaimer') {
      cert.addClaimer = e.target.value;
    } else if (e.target.name === 'name') {
      cert.name = e.target.value;
    }
    else if (e.target.name === 'description') {
      cert.description = e.target.value;
    }
    setCert(cert)
  }



  return (
    <div className="App">
      <h1 className="text-center" style={{ "marginTop": "15%" }}>
      </h1>
      <div className="justify-center">
        <ClaimCert
          onChangeForm={onChangeForm}
          issueCert={IssueCertificate}
        >
        </ClaimCert>
      </div>

    </div>
  );
}


export default Issue;