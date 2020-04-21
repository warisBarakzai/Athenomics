const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const getFileContentsFromIPFS = function(ipfsHash, callback) {
  ipfs.files.cat(ipfsHash, function(err, data) {
    callback(err, data)
  })
}

export default ipfs;