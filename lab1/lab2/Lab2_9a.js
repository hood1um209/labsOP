'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Mykola': '+380671234567',
  'Yevhen': '+380676543210'
};


const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName("Mykola"));          
console.log(findPhoneByName("Marcus Aurelius")); 
console.log(findPhoneByName("Yevhen"));          

module.exports = { phonebook, findPhoneByName };