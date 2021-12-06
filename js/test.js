//**********************************************/
function equalty(x, y) {
    let equal = x == y;
    let srictEqual = x === y;
    return console.log("equal: " + equal + " | strict equal: " + srictEqual);

}
console.log('   comparison objects');
let obj1 = {
    cat: 1
};
let obj2 = {
    cat: 1
};
equalty(obj1, obj2);
console.log('   comparison objects (obj1=obj2)');
obj2 = obj1;
equalty(obj1, obj2);
//**********************************************/
console.log('   comparison undefined');
let a;
let b;
equalty(a, b);
//**********************************************/
console.log('   comparison null');
let www = null;
let eee = null;
equalty(www, eee);
//**********************************************/
console.log('   comparison undefined/null');
equalty(a, eee);
//**********************************************/
console.log('   Object properties name order');
let codes = {
    wsas: "wqwwwAThird",
    wqa: "wqwwwASecond",
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США",
    wq: "wqwwwFirst",
};

for (let code in codes) {
    console.log('property: ' + code + '; value: ' + codes[code]);
}
//**********************************************/
console.log('   Make object');
let user = {};
console.log(user);
user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);
//**********************************************/
console.log('   Sum of properties values');
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
var sum = 0;
for (employee in salaries) {
    sum += salaries[employee];
}
console.log('summ of salaries ' + sum);
//**********************************************/
console.log('   Multiply for 2 numeric properties');

function multiplyNumeric(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2;
        }
    }
}

let menu = {
    width: 200,
    var: 300,
    water: 400,
    height: 300,
    title: "My menu",

    showMenu() {
        console.log(this);
    }
};
let car = {
    engine: 200,
    speed: 300,
    petrol: 400,
    height: 300,
    title: "My car",

    showMenu() {
        console.log(this);
    }
};
menu.showMenu(12);
car.showMenu();

"use strict"
/*let userQQQ = {
    name: "Джон",
    hi: function () { alert(this.name); },
    bye() { alert("Пока"); }
  };
  
  userQQQ.hi(); // Джон (простой вызов метода работает хорошо)
  
  // теперь давайте попробуем вызывать user.hi или user.bye
  // в зависимости от имени пользователя user.name
  //(userQQQ.name == "Джон" ? userQQQ.hi : userQQQ.bye)(); // Ошибка!
*/
function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let usssder = makeUser();

alert(user.ref); // Каким будет результат?

let calculator = {

    read() {
        this.a = +prompt('number a', 0);
        this.b = +prompt('number b', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );