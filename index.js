const http = require('http');
const dns = require('dns');
const readline = require("readline");

const hostname = '127.0.0.1';
const port = 3000;

const options = {
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
  };


  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a domain to lookup: ", function(thedns) {
    dns.lookup(thedns, options, (err, address, family) =>
    console.log('address: %j family: IPv%s', address, family));
    rl.close();
    
});
