// SPDX-License-iDentifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

library Library{
    struct Certificate{
        string name;
        string description;
    }
    struct holder{
        string name;
        bool isHolder;
    }
}

contract certify {
    using Library for Library.Certificate;
    using Library for Library.holder;
    mapping(address => Library.holder) private holders;
    mapping(string => address) private certificatesToClaim;
    mapping(string => address) private certified;
    mapping(string => Library.Certificate) private certificateIdData;
    mapping(address => address) private verifyAccess;
    mapping(address => uint) private timeslot;
    mapping(address => string[]) private listOfCertificates;
    uint private timeLock;
    address private Issuer;
    constructor(address _Issuer, uint _timeLock){
        timeLock = _timeLock;
        Issuer = _Issuer;
    }
    modifier issueOnlyUniqueCertificates(string memory _iD){
        require(certified[_iD]==address(0)&&certificatesToClaim[_iD]==address(0),"Certificate Already Claimed");
        _;
    }

    modifier onlyAllowedAccessModifier() {
        require(msg.sender == Issuer || (holders[msg.sender].isHolder), "You are not allowed to modify access to verifiers");
        _;
    }
    modifier onlyValidClaimer(string memory _claim){
        require(certificatesToClaim[_claim] == msg.sender, "Certificate already claimed");
        _;
    }

    modifier onlyAllowedIssuer(){
        require(Issuer == msg.sender, "You are not the issuer");
        _;
    }

    modifier withinTimeLock(string memory _iD){
        require(certified[_iD] == msg.sender||timeslot[msg.sender] + timeLock > block.timestamp, "You are not allowed to access this function after timespan");
        _;
    }

    modifier withAllowedAccess(address _holder,string memory _iD){
        require(verifyAccess[msg.sender] == _holder||certified[_iD] == msg.sender, "You are not allowed to access this function");
        _;
    }

    event CertificateIssuedToClaim(address indexed _to, string _certificateiD);

    event CertificateClaimed(address indexed _by);

    event CertificateVerfierAdded(address indexed _verifier, address indexed _holder);


    function addHolders(address _holder,string memory _name) public onlyAllowedIssuer(){
        holders[_holder].name = _name;
        holders[_holder].isHolder = true;
    }

    function issueCertificateToBeClaimed(address _holder,string memory _iD, string memory _name,string memory _description) public onlyAllowedIssuer() issueOnlyUniqueCertificates(_iD){
        certificatesToClaim[_iD] = _holder;
        certificateIdData[_iD] = Library.Certificate(_name,_description);
        emit CertificateIssuedToClaim(_holder, _iD);
    }
    function claimCertificate(string memory _iD) public onlyValidClaimer(_iD){
        delete certificatesToClaim[_iD];
        listOfCertificates[msg.sender].push(_iD);
        certified[_iD] = msg.sender;
        emit CertificateClaimed(msg.sender);
    }
    function getCertificatesByAddress() public onlyAllowedAccessModifier() view returns(string[] memory){
        return listOfCertificates[msg.sender];
    }

    function checkClaimable(string memory _iD) public view onlyValidClaimer(_iD) returns(bool){
        return true;
    }

    function verifyCertificate(string memory _iD,address _holder) public view withinTimeLock(_iD) withAllowedAccess(_holder,_iD) returns(bool){
        if(getCertificateHolder(_iD) == _holder){
            return true;
        }
        else{
            return false;
        }
    }
    function setVerifier(address _verifier) public onlyAllowedAccessModifier(){
        timeslot[_verifier] = block.timestamp;
        verifyAccess[_verifier] = msg.sender;
        emit CertificateVerfierAdded(_verifier, msg.sender);
    }

    function getCertificateData(string memory _iD) public view returns(Library.Certificate memory){
        return certificateIdData[_iD];
    }

    function getCertificateHolder(string memory _iD) public view returns(address){
        return certified[_iD];
    }

    function getTimeLock() public view returns(uint){
        return timeLock;
    }

}