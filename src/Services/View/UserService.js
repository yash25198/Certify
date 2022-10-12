const abi = require('../../utils/Certify.json');
const ethers = require('ethers');
const { ethereum } = window;
const contractAddress = "0x84f03CDABA9062792805ed1DeBcCf1E59FFB543c";
const contractABI=abi.abi;
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();
const Certify = new ethers.Contract(contractAddress, contractABI, signer);

export async function getAllCerts() {

    try{
        const response = await Certify.getCertificatesByAddress();
        return response;
    }catch(error) {
        return [];
    }
    
}

export async function claimCert(data) {
    
        try{
            const response = await Certify.claimCertificate(data);
            await response.wait();
            console.log("Transaction Hash:"+response.hash);
            return response;
        }catch(error) {
            return [];
        }
        
}
export async function verifyCerti(address,hash) {
    try {
        const response = await Certify.verifyCertificate(hash,address);
        return response;
    }
    catch(error) {
        return false;
    }
}
export async function issueCert(data) {
    try {
    console.log(data);
    const response = await Certify.issueCertificateToBeClaimed(data.addClaimer,data.hash,data.name,data.description);
    await response.wait();
    console.log("Transaction Hash:"+response.hash);}
    catch(error) {
        window.alert("Transaction rejected");
    }
}