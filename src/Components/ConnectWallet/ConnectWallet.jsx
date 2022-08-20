import React, { useEffect, useState } from "react";
import './ConnectWallet.css';
import Particles from "react-tsparticles";


export default function ConnectWallet() {
  const [currentAccount, setCurrentAccount] = useState("");
   
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        window.alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="container">
    <Particles 
            params={{
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 2000
                        }
                    },
                    color: {
                        value: '#000000'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 300,
                        color: '#000000',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
      
                    },
                 },
              interactivity: {
                    detect_on: 'window',
                    events:{
                      onClick:{
                        enable: true,
                        mode : 'push'
                      },
                    },
                    modes:{
                      push: {
                        quantity: 4,
                      },
                    }
                    
                  }
            }}    
        />
          
    <div className="mainContainer">
      
      <div className="dataContainer">
        {!currentAccount && (<div>
        <div className="headerContainer">
        Connect Your Wallet
        </div>
        </div>)}
        {currentAccount && (<div>
            <div className="headerContainer">
                Wallet Connected
                </div>
                <div className="bio">
                    Your Public Address :
                    </div>
                    </div>)}

        <div  className="text">
            {currentAccount}
        </div>
        
        {!currentAccount && (
      
          <button className="connectButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>

      </div>
      
    </div>
    
  );
}

