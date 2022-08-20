import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View.css';
import { Certs } from '../../Components/View/Certs'
import { DisplayBoard } from '../../Components/View/DisplayBoard'
import ClaimCert from '../../Components/View/ClaimCert'
import { getAllCerts, claimCert } from '../../Services/View/UserService'

function View() {

  const [hash, setHash] = useState({})
  const [certs, setCerts] = useState([])
  const [numberOfCerts, setNumberOfCerts] = useState(0)


  const hashClaim = (e) => {

      claimCert(hash)
        .then(response => {
          console.log(response);
          setNumberOfCerts(numberOfCerts+1)
      });
  }

  const fetchAllCerts = () => {
    getAllCerts()
      .then(certsi => {
        console.log(certsi)
        setCerts(certsi);
        setNumberOfCerts(certsi.length)
      });
  }

  // useEffect(() => {
  //   getAllCerts()
  //     .then(certsi => {
  //       console.log(certsi)
  //       setCerts(certsi);
  //       setNumberOfCerts(certsi.length)
  //     });
  // }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'hash') {
          let hasht = e.target.value;
      setHash(hasht)
  }
}
  
    
    return (
        <div className="App">
          <h1 className="text-center" style={{"margin-top": "15%"}}>
          </h1>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <ClaimCert 
                    hash={hash}
                    onChangeForm={onChangeForm}
                    hashClaim={hashClaim}
                    >
                  </ClaimCert>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfCerts={numberOfCerts}
                    getAllCerts={fetchAllCerts}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Certs certs={certs}></Certs>
          </div>
        </div>
    );
}


export default View;