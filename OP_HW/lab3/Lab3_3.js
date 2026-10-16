'use strict';

function ipToInt(ip = '127.0.0.1') {
    const num = ip.split('.');

    return num.reduce((result, byte, index) => {
        return result + (byte << (8 * (3 - index)));
    }, 0);
}
console.log(ipToInt('127.0.0.1'));
console.log(ipToInt('10.0.0.1')); 
console.log(ipToInt('192.168.1.10'));
console.log(ipToInt('165.225.133.150'));
console.log(ipToInt('0.0.0.0'));
console.log(ipToInt());

module.exports = { ipToInt };