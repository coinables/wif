var wif = require('wif')

function privateKeyFrom(hexInput, istestnet){
	//hexInput = 0000000000000000000000000000000000000000000000000000000000000001
	
	if(istestnet){
		var privateKey = Buffer.from(hexInput, 'hex')
		var key = wif.encode(239, privateKey, true) // for the testnet use: wif.encode(239, ...
		// => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
	} else {
		var privateKey = Buffer.from(hexInput, 'hex')
		var key = wif.encode(128, privateKey, true) // for the testnet use: wif.encode(239, ...
		// => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
	}
	
	return {
		pk: key
	}
}

function privateKeyUncompressed(hexInput, istestnet){
	//hexInput = 0000000000000000000000000000000000000000000000000000000000000001
	
	if(istestnet){
		var privateKey = Buffer.from(hexInput, 'hex')
		var key = wif.encode(239, privateKey, false) // for the testnet use: wif.encode(239, ...
	} else {
		var privateKey = Buffer.from(hexInput, 'hex')
		var key = wif.encode(128, privateKey, false) // for the testnet use: wif.encode(239, ...
	}
	
	
	return {
		pk: key
	}
}


module.exports = {
	privateKeyFrom,
	privateKeyUncompressed
}

//binding functions to keys 
//browserify export.js --standalone keys > keys.js