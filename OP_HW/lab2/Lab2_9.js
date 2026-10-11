'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Mykola', phone: '+380671234567' },
  { name: 'Yevhen', phone: '+380676543210' }
];

const findPhoneByName = (name) => {
  for (const person of phonebook) {
    if (person.name === name) {
      return person.phone;
    }
  }
};
console.log(findPhoneByName("Mykola"));
console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Yevhen"));

module.exports = { phonebook, findPhoneByName };