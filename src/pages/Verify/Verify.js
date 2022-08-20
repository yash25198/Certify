
// import React from 'react'
// const Verify = () => {
//   return (
//     <div className="container">
    
//         <h1 className="text-center" style={{"margin-top": "30%"}}>
//           Verify
//         </h1>
        
//     </div>
//   )
// }
// export default Verify;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Verify.css';
import { DisplayBoard } from '../../Components/Verify/DisplayBoard'
import VerifyCert from '../../Components/Verify/VerifyCert'
import { verifyCerti } from '../../Services/Verify/UserService'

function Verify() {

  const [hash, setHash] = useState({})
  const [responseStatus, setResponseStatus] = useState([])
  const [address, setAddress] = useState([])

  const verifyCert = () => {

      verifyCerti(address,hash)
        .then(response => {
          console.log(response);
          
      });
  }


  const onChangeForm = (e) => {
      if (e.target.name === 'hash') {
          let hasht = e.target.value;
          setHash(hasht)
      }else if (e.target.name === 'address') {
          let addresst = e.target.value;
          setAddress(addresst)
      }
      
  }


  
    
    return (
        <div className="App">
          <h1 className="text-center" style={{"margin-top": "15%"}}>
          </h1>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <VerifyCert 
                    onChangeForm={onChangeForm}
                    verify={verifyCert}
                    >
                  </VerifyCert>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    Status={responseStatus}
                    // hash={hash}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
        </div>
    );
}


export default Verify;