'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };

  obj1.name = 'Aurelius'; //значення поля name зміниться
  obj2.name = 'Aurelius'; //значення поля name зміниться

    //obj1 = {name: "Marcus Aurelius"};
    //Помилка через те, що ми не можемо змінювати значення константої
  obj2 = { name: 'Marcus Aurelius' };  
      //Спрацьовує, так як obj2 - змінна
    console.dir(obj1);
    console.dir(obj2);
};
console.log(fn());

module.exports = { fn };