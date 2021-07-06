(this["webpackJsonpuseless-token-faucet"]=this["webpackJsonpuseless-token-faucet"]||[]).push([[0],{49:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"USTToken","sourceName":"contracts/UselessToken.sol","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"faucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b5060405162001fea38038062001fea833981810160405281019062000037919062000438565b818181600390805190602001906200005192919062000316565b5080600490805190602001906200006a92919062000316565b505050620000893369021e19e0c9bab2400000620000dd60201b60201c565b620000d56040518060400160405280601081526020017f4465706c6f79696e6720746f6b656e2000000000000000000000000000000000815250836200024260201b620007ce1760201c565b5050620007e9565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000150576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000147906200055f565b60405180910390fd5b6200016460008383620002e860201b60201c565b806002600082825462000178919062000619565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001cf919062000619565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000236919062000581565b60405180910390a35050565b620002e482826040516024016200025b92919062000524565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620002ed60201b60201c565b5050565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546200032490620006b6565b90600052602060002090601f01602090048101928262000348576000855562000394565b82601f106200036357805160ff191683800117855562000394565b8280016001018555821562000394579182015b828111156200039357825182559160200191906001019062000376565b5b509050620003a39190620003a7565b5090565b5b80821115620003c2576000816000905550600101620003a8565b5090565b6000620003dd620003d784620005c7565b6200059e565b905082815260208101848484011115620003f657600080fd5b6200040384828562000680565b509392505050565b600082601f8301126200041d57600080fd5b81516200042f848260208601620003c6565b91505092915050565b600080604083850312156200044c57600080fd5b600083015167ffffffffffffffff8111156200046757600080fd5b62000475858286016200040b565b925050602083015167ffffffffffffffff8111156200049357600080fd5b620004a1858286016200040b565b9150509250929050565b6000620004b882620005fd565b620004c4818562000608565b9350620004d681856020860162000680565b620004e181620007af565b840191505092915050565b6000620004fb601f8362000608565b91506200050882620007c0565b602082019050919050565b6200051e8162000676565b82525050565b60006040820190508181036000830152620005408185620004ab565b90508181036020830152620005568184620004ab565b90509392505050565b600060208201905081810360008301526200057a81620004ec565b9050919050565b600060208201905062000598600083018462000513565b92915050565b6000620005aa620005bd565b9050620005b88282620006ec565b919050565b6000604051905090565b600067ffffffffffffffff821115620005e557620005e462000780565b5b620005f082620007af565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000620006268262000676565b9150620006338362000676565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200066b576200066a62000722565b5b828201905092915050565b6000819050919050565b60005b83811015620006a057808201518184015260208101905062000683565b83811115620006b0576000848401525b50505050565b60006002820490506001821680620006cf57607f821691505b60208210811415620006e657620006e562000751565b5b50919050565b620006f782620007af565b810181811067ffffffffffffffff8211171562000719576200071862000780565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6117f180620007f96000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a35780637b56c2b2146101d357806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce919061119f565b60405180910390f35b6100f160048036038101906100ec9190610fbb565b61032f565b6040516100fe9190611184565b60405180910390f35b61010f61034d565b60405161011c9190611336565b60405180910390f35b61013f600480360381019061013a9190610f6c565b610357565b60405161014c9190611184565b60405180910390f35b61015d610458565b60405161016a9190611351565b60405180910390f35b61018d60048036038101906101889190610fbb565b610461565b60405161019a9190611184565b60405180910390f35b6101bd60048036038101906101b89190610f07565b61050d565b6040516101ca9190611336565b60405180910390f35b6101ed60048036038101906101e89190610fbb565b610555565b005b6101f76105a3565b604051610204919061119f565b60405180910390f35b61022760048036038101906102229190610fbb565b610635565b6040516102349190611184565b60405180910390f35b61025760048036038101906102529190610fbb565b610729565b6040516102649190611184565b60405180910390f35b61028760048036038101906102829190610f30565b610747565b6040516102949190611336565b60405180910390f35b6060600380546102ac9061149a565b80601f01602080910402602001604051908101604052809291908181526020018280546102d89061149a565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b600061034361033c61086a565b8484610872565b6001905092915050565b6000600254905090565b6000610364848484610a3d565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006103af61086a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561042f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042690611296565b60405180910390fd5b61044c8561043b61086a565b858461044791906113de565b610872565b60019150509392505050565b60006012905090565b600061050361046e61086a565b84846001600061047c61086a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104fe9190611388565b610872565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61055f8282610cbc565b61059f6040518060400160405280601b81526020017f53656e64696e67202725732720746f6b656e7320746f202725732700000000008152508284610e10565b5050565b6060600480546105b29061149a565b80601f01602080910402602001604051908101604052809291908181526020018280546105de9061149a565b801561062b5780601f106106005761010080835404028352916020019161062b565b820191906000526020600020905b81548152906001019060200180831161060e57829003601f168201915b5050505050905090565b6000806001600061064461086a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f8906112f6565b60405180910390fd5b61071e61070c61086a565b85858461071991906113de565b610872565b600191505092915050565b600061073d61073661086a565b8484610a3d565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61086682826040516024016107e49291906111c1565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610eaf565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d9906112d6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094990611256565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a309190611336565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa4906112b6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1490611236565b60405180910390fd5b610b28838383610ed8565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba590611276565b60405180910390fd5b8181610bba91906113de565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c4a9190611388565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cae9190611336565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2390611316565b60405180910390fd5b610d3860008383610ed8565b8060026000828254610d4a9190611388565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d9f9190611388565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e049190611336565b60405180910390a35050565b610eaa838383604051602401610e28939291906111f8565b6040516020818303038152906040527fe3849f79000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610eaf565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b600081359050610eec8161178d565b92915050565b600081359050610f01816117a4565b92915050565b600060208284031215610f1957600080fd5b6000610f2784828501610edd565b91505092915050565b60008060408385031215610f4357600080fd5b6000610f5185828601610edd565b9250506020610f6285828601610edd565b9150509250929050565b600080600060608486031215610f8157600080fd5b6000610f8f86828701610edd565b9350506020610fa086828701610edd565b9250506040610fb186828701610ef2565b9150509250925092565b60008060408385031215610fce57600080fd5b6000610fdc85828601610edd565b9250506020610fed85828601610ef2565b9150509250929050565b61100081611412565b82525050565b61100f81611424565b82525050565b60006110208261136c565b61102a8185611377565b935061103a818560208601611467565b6110438161152a565b840191505092915050565b600061105b602383611377565b91506110668261153b565b604082019050919050565b600061107e602283611377565b91506110898261158a565b604082019050919050565b60006110a1602683611377565b91506110ac826115d9565b604082019050919050565b60006110c4602883611377565b91506110cf82611628565b604082019050919050565b60006110e7602583611377565b91506110f282611677565b604082019050919050565b600061110a602483611377565b9150611115826116c6565b604082019050919050565b600061112d602583611377565b915061113882611715565b604082019050919050565b6000611150601f83611377565b915061115b82611764565b602082019050919050565b61116f81611450565b82525050565b61117e8161145a565b82525050565b60006020820190506111996000830184611006565b92915050565b600060208201905081810360008301526111b98184611015565b905092915050565b600060408201905081810360008301526111db8185611015565b905081810360208301526111ef8184611015565b90509392505050565b600060608201905081810360008301526112128186611015565b90506112216020830185611166565b61122e6040830184610ff7565b949350505050565b6000602082019050818103600083015261124f8161104e565b9050919050565b6000602082019050818103600083015261126f81611071565b9050919050565b6000602082019050818103600083015261128f81611094565b9050919050565b600060208201905081810360008301526112af816110b7565b9050919050565b600060208201905081810360008301526112cf816110da565b9050919050565b600060208201905081810360008301526112ef816110fd565b9050919050565b6000602082019050818103600083015261130f81611120565b9050919050565b6000602082019050818103600083015261132f81611143565b9050919050565b600060208201905061134b6000830184611166565b92915050565b60006020820190506113666000830184611175565b92915050565b600081519050919050565b600082825260208201905092915050565b600061139382611450565b915061139e83611450565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113d3576113d26114cc565b5b828201905092915050565b60006113e982611450565b91506113f483611450565b925082821015611407576114066114cc565b5b828203905092915050565b600061141d82611430565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561148557808201518184015260208101905061146a565b83811115611494576000848401525b50505050565b600060028204905060018216806114b257607f821691505b602082108114156114c6576114c56114fb565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61179681611412565b81146117a157600080fd5b50565b6117ad81611450565b81146117b857600080fd5b5056fea264697066735822122096ddea56d64a994ddc5865361670513106414457b08f957f396a294a711b90be64736f6c63430008030033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a35780637b56c2b2146101d357806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce919061119f565b60405180910390f35b6100f160048036038101906100ec9190610fbb565b61032f565b6040516100fe9190611184565b60405180910390f35b61010f61034d565b60405161011c9190611336565b60405180910390f35b61013f600480360381019061013a9190610f6c565b610357565b60405161014c9190611184565b60405180910390f35b61015d610458565b60405161016a9190611351565b60405180910390f35b61018d60048036038101906101889190610fbb565b610461565b60405161019a9190611184565b60405180910390f35b6101bd60048036038101906101b89190610f07565b61050d565b6040516101ca9190611336565b60405180910390f35b6101ed60048036038101906101e89190610fbb565b610555565b005b6101f76105a3565b604051610204919061119f565b60405180910390f35b61022760048036038101906102229190610fbb565b610635565b6040516102349190611184565b60405180910390f35b61025760048036038101906102529190610fbb565b610729565b6040516102649190611184565b60405180910390f35b61028760048036038101906102829190610f30565b610747565b6040516102949190611336565b60405180910390f35b6060600380546102ac9061149a565b80601f01602080910402602001604051908101604052809291908181526020018280546102d89061149a565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b600061034361033c61086a565b8484610872565b6001905092915050565b6000600254905090565b6000610364848484610a3d565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006103af61086a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561042f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042690611296565b60405180910390fd5b61044c8561043b61086a565b858461044791906113de565b610872565b60019150509392505050565b60006012905090565b600061050361046e61086a565b84846001600061047c61086a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104fe9190611388565b610872565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61055f8282610cbc565b61059f6040518060400160405280601b81526020017f53656e64696e67202725732720746f6b656e7320746f202725732700000000008152508284610e10565b5050565b6060600480546105b29061149a565b80601f01602080910402602001604051908101604052809291908181526020018280546105de9061149a565b801561062b5780601f106106005761010080835404028352916020019161062b565b820191906000526020600020905b81548152906001019060200180831161060e57829003601f168201915b5050505050905090565b6000806001600061064461086a565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f8906112f6565b60405180910390fd5b61071e61070c61086a565b85858461071991906113de565b610872565b600191505092915050565b600061073d61073661086a565b8484610a3d565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61086682826040516024016107e49291906111c1565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610eaf565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d9906112d6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094990611256565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a309190611336565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa4906112b6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1490611236565b60405180910390fd5b610b28838383610ed8565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba590611276565b60405180910390fd5b8181610bba91906113de565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c4a9190611388565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cae9190611336565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2390611316565b60405180910390fd5b610d3860008383610ed8565b8060026000828254610d4a9190611388565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d9f9190611388565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e049190611336565b60405180910390a35050565b610eaa838383604051602401610e28939291906111f8565b6040516020818303038152906040527fe3849f79000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610eaf565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b600081359050610eec8161178d565b92915050565b600081359050610f01816117a4565b92915050565b600060208284031215610f1957600080fd5b6000610f2784828501610edd565b91505092915050565b60008060408385031215610f4357600080fd5b6000610f5185828601610edd565b9250506020610f6285828601610edd565b9150509250929050565b600080600060608486031215610f8157600080fd5b6000610f8f86828701610edd565b9350506020610fa086828701610edd565b9250506040610fb186828701610ef2565b9150509250925092565b60008060408385031215610fce57600080fd5b6000610fdc85828601610edd565b9250506020610fed85828601610ef2565b9150509250929050565b61100081611412565b82525050565b61100f81611424565b82525050565b60006110208261136c565b61102a8185611377565b935061103a818560208601611467565b6110438161152a565b840191505092915050565b600061105b602383611377565b91506110668261153b565b604082019050919050565b600061107e602283611377565b91506110898261158a565b604082019050919050565b60006110a1602683611377565b91506110ac826115d9565b604082019050919050565b60006110c4602883611377565b91506110cf82611628565b604082019050919050565b60006110e7602583611377565b91506110f282611677565b604082019050919050565b600061110a602483611377565b9150611115826116c6565b604082019050919050565b600061112d602583611377565b915061113882611715565b604082019050919050565b6000611150601f83611377565b915061115b82611764565b602082019050919050565b61116f81611450565b82525050565b61117e8161145a565b82525050565b60006020820190506111996000830184611006565b92915050565b600060208201905081810360008301526111b98184611015565b905092915050565b600060408201905081810360008301526111db8185611015565b905081810360208301526111ef8184611015565b90509392505050565b600060608201905081810360008301526112128186611015565b90506112216020830185611166565b61122e6040830184610ff7565b949350505050565b6000602082019050818103600083015261124f8161104e565b9050919050565b6000602082019050818103600083015261126f81611071565b9050919050565b6000602082019050818103600083015261128f81611094565b9050919050565b600060208201905081810360008301526112af816110b7565b9050919050565b600060208201905081810360008301526112cf816110da565b9050919050565b600060208201905081810360008301526112ef816110fd565b9050919050565b6000602082019050818103600083015261130f81611120565b9050919050565b6000602082019050818103600083015261132f81611143565b9050919050565b600060208201905061134b6000830184611166565b92915050565b60006020820190506113666000830184611175565b92915050565b600081519050919050565b600082825260208201905092915050565b600061139382611450565b915061139e83611450565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113d3576113d26114cc565b5b828201905092915050565b60006113e982611450565b91506113f483611450565b925082821015611407576114066114cc565b5b828203905092915050565b600061141d82611430565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561148557808201518184015260208101905061146a565b83811115611494576000848401525b50505050565b600060028204905060018216806114b257607f821691505b602082108114156114c6576114c56114fb565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61179681611412565b81146117a157600080fd5b50565b6117ad81611450565b81146117b857600080fd5b5056fea264697066735822122096ddea56d64a994ddc5865361670513106414457b08f957f396a294a711b90be64736f6c63430008030033","linkReferences":{},"deployedLinkReferences":{}}')},58:function(f,b,e){},59:function(f,b,e){},66:function(f,b){},76:function(f,b,e){"use strict";e.r(b);var a=e(5),t=e.n(a),n=e(21),d=e.n(n),c=(e(58),e(59),e(60),e(80)),r=e(81),s=e(82),i=e(2),u=e.n(i),o=e(22),p=e(20),l=e(18),y=e(19),m=e(30),j=e(50),h=e(8),x=function(f){var b=f.balance;return Object(h.jsx)("div",{children:Object(h.jsxs)(j.a,{variant:"info",children:[" balance : ",b]})})},w="0xa82F21F033c1A30e8c729Bf2003e0BaA93f6aD62",O=function(f){var b=Object(a.useState)(),e=Object(p.a)(b,2),t=e[0],n=e[1],d=Object(a.useState)(!1),c=Object(p.a)(d,2),r=c[0],s=c[1];function i(){return(i=Object(o.a)(u.a.mark((function b(){var e,a,t,d,c,r;return u.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if("undefined"===typeof window.ethereum){b.next=14;break}return b.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:return e=b.sent,a=Object(p.a)(e,1),t=a[0],d=new l.a.providers.Web3Provider(window.ethereum),c=new l.a.Contract(w,f.tokenContract.abi,d),b.next=10,c.balanceOf(t);case 10:r=b.sent,console.log("Balance: ",r.toString()),n(r.toString()),s(!0);case 14:case"end":return b.stop()}}),b)})))).apply(this,arguments)}function j(){return(j=Object(o.a)(u.a.mark((function b(){var e,a,t;return u.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if("undefined"===typeof window.ethereum){b.next=8;break}return b.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:e=b.sent,a=new l.a.providers.Web3Provider(window.ethereum),t=a.getSigner(),new l.a.Contract(w,f.tokenContract.abi,t).faucet(e[0],100);case 8:case"end":return b.stop()}}),b)})))).apply(this,arguments)}return Object(h.jsx)("div",{children:Object(h.jsx)(y.a,{style:{background:"rgba(227, 104, 222, 0.71)"},children:Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(y.a.Subtitle,{children:"recieve faucet ERC20 to your wallet"}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"d-grid gap-2",children:[Object(h.jsx)(m.a,{onClick:function(){return j.apply(this,arguments)},children:"get faucet token!"}),Object(h.jsx)(m.a,{onClick:function(){return i.apply(this,arguments)},variant:"warning",children:"check my balance"}),r?Object(h.jsx)(x,{balance:t}):null]})]})})})},v=e(49),T="0xa82F21F033c1A30e8c729Bf2003e0BaA93f6aD62",g=function(f){var b=Object(a.useState)(),e=Object(p.a)(b,2),t=e[0],n=e[1],d=Object(a.useState)(),c=Object(p.a)(d,2),r=c[0],s=c[1];function i(){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(u.a.mark((function f(){return u.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:case"end":return f.stop()}}),f)})))).apply(this,arguments)}function x(){return(x=Object(o.a)(u.a.mark((function b(){var e,a,n,d;return u.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:if("undefined"===typeof window.ethereum){b.next=12;break}return b.next=3,i();case 3:return e=new l.a.providers.Web3Provider(window.ethereum),a=e.getSigner(),n=new l.a.Contract(T,f.tokenContract.abi,a),b.next=8,n.transfer(t,r);case 8:return d=b.sent,b.next=11,d.wait();case 11:console.log("".concat(r," Coins successfully sent to ").concat(t));case 12:case"end":return b.stop()}}),b)})))).apply(this,arguments)}return Object(h.jsx)(y.a,{style:{background:"rgba(227, 104, 222, 0.71)"},children:Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(y.a.Subtitle,{children:" send faucet to an address"}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"d-grid gap-2",children:[Object(h.jsx)("input",{onChange:function(f){return n(f.target.value)},placeholder:"Payee 0x address"}),Object(h.jsx)("input",{onChange:function(f){return s(f.target.value)},placeholder:"Amount"}),Object(h.jsx)(m.a,{onClick:function(){return x.apply(this,arguments)},variant:"success",children:"send "})]})]})})};var k=function(){var f=v;return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(c.a,{children:Object(h.jsxs)(r.a,{className:"justify-content-md-center",children:[Object(h.jsxs)(s.a,{children:[Object(h.jsx)("div",{children:"our faucet"}),Object(h.jsx)(O,{tokenContract:f})]}),Object(h.jsxs)(s.a,{children:[Object(h.jsx)("div",{children:" our send area"}),Object(h.jsx)(g,{tokenContract:f})]})]})})})},C=function(f){f&&f instanceof Function&&e.e(3).then(e.bind(null,83)).then((function(b){var e=b.getCLS,a=b.getFID,t=b.getFCP,n=b.getLCP,d=b.getTTFB;e(f),a(f),t(f),n(f),d(f)}))};d.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),C()}},[[76,1,2]]]);
//# sourceMappingURL=main.21118726.chunk.js.map