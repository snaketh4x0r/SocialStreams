pragma solidity ^0.5.0;

contract AddressBook {
    
    mapping(bytes32 => address) addressBook;
    mapping(bytes32 => address) tokenAddress;
    
    function stringToBytes32(string memory _temp) public returns (bytes32 result) {
        bytes memory tempstring=bytes(_temp);
        if(tempstring.length == 0){
            return 0x0;
            
        }
        assembly {
            result:=mload(add(tempstring,32))
        }
        
    }
    
     function getstringToBytes32(string memory _temp) public view returns (bytes32 result) {
        bytes memory tempstring=bytes(_temp);
        if(tempstring.length == 0){
            return 0x0;
            
        }
        assembly {
            result:=mload(add(tempstring,32))
        }
        
     }
    
    function setHistory(string memory _yourname,address _tokenAddress) public {
        addressBook[stringToBytes32(_yourname)] = msg.sender;
        tokenAddress[stringToBytes32(_yourname)] = _tokenAddress;
    }
    
    function getTokenAddress(string memory _query1) public view returns (address) {
        return tokenAddress[getstringToBytes32(_query1)];
    }
    
    function getUserAddress(string memory _query2) public view returns (address) {
        return addressBook[getstringToBytes32(_query2)];
    }
    
}