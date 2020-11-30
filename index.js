//Adding required constants
const http = require('http');
const dns = require('dns');
const readline = require("readline");


//Establishing A Host Name and a Port
const hostname = '127.0.0.1';
const port = 3000;


//Declaring Options
const options = {
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
  };

//Creating Command Line Interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Prompting User for Input
rl.question("Enter a domain to lookup: ", function(thedns) {
    dns.lookup(thedns, options, (err, address, family) =>
    console.log('IP ADRESS: %j FAMILY: IPv%s', address, family));
    rl.close();
    
});
