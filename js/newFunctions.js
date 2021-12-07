//создание объекта функции с new
/*Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

/*
function Calculator() {
  this.read = function () {
    this.a = +prompt('a = ', 0);
    this.b = +prompt('b = ', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
    this.mul = function () {
    return this.a * this.b;
  };
}

  let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений*/

/*function Accumulator(startingValue) {
  this.value = startingValue;
  this.additionalValue = 0;
  this.read = function () {
    this.value += +prompt('enter value = ', 0);
  };
};

let accumulator = new Accumulator(1); // начальное значение 1
console.log("initiated object value = " + accumulator.value);

accumulator.read(); // прибавит ввод prompt к текущему значению
console.log("read[1] value = " + accumulator.value);

accumulator.read(); // прибавит ввод prompt к текущему значению
console.log("read[2] value = " + accumulator.value);

alert(accumulator.value); // выведет сумму этих значений*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
let obj = {};
//({})?.amethod();
let obj2 = null;
obj2?.mathod();
console.log(obj2?.mathod());
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
//символы толком не понял где и когда их применять. Для понимания нужна большая программа, которой нет сейчас.
/*let id = Symbol("id");
id = "name id";
console.log(id);

let id$ = Symbol.for("global id");
id$ = "global name";
console.log(id$);
id$=id;
console.log(id$);
console.log(id);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*types conversion
эти преобразования не меняют сам объект, а лишь позволяют использовать его в простых методах
*/
/*
let obj = {
  name: "Kolyan",
  age: 40,
  [Symbol.toPrimitive](hint) {
    console.log(`hint:  + ${hint}`);
    return hint == "string" ? this.name : this.age;
  },
  whatAge() {
    return this.age;
  }
}

let obj2 = {
  name: "Ololowa",
  age: 10,
  [Symbol.toPrimitive](hint) {
    console.log(`hint:  + ${hint}`);
    return hint == "string" ? this.name : this.age;
  },
  whatAge() {
    return this.age;
  }
}

//alert(obj);
//alert(+obj);
//alert(obj + 500);
obj.age = obj + 15;
//obj.whatAge = whatAge;
//let x = obj + obj2;
//obj.age - x;
console.log(obj.whatAge());


/*
let objectus = {
  name: "Kolyan",
  age: 30,
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? this.name : this.age;
  }
};

// демонстрация результатов преобразований:
alert(objectus); // hint: string -> {name: "John"}
alert(+objectus); // hint: number -> 1000
alert(objectus + 500); // hint: default -> 1500*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
//числа
/*
let x = 3.5655416515154;
console.log("round " + Math.round(x) + " type " + typeof Math.round(x));
console.log("ceil " + Math.ceil(x) + " type " + typeof Math.ceil(x));
console.log("floor " + Math.floor(x) + " type " + typeof Math.floor(x));
console.log("trunk " + Math.trunc(x) + " type " + typeof Math.trunc(x));
console.log("fixed " + x.toFixed(3) + " type " + typeof x.toFixed(3));

//let a= +prompt("a=", 0);
//let b= +prompt("b=", 0);
//console.log(a+b);
console.log("binary = " + (6.35).toString(2));
let k = 1.35;
console.log((+(k * 10).toFixed(0)) / 10);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
 В этом случае функция должна вернуть null.

 решение
function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

Решение немного сложнее, чем могло бы быть, потому что нам надо обрабатывать null и пустую строку.
Следовательно, запрашиваем ввод числового значения, пока посетитель его не введёт. 
И null (отмена) и пустая строка также соответствуют данному условию, потому что при приведении к числу они равны 0.

После того, как цикл завершится, нам нужно проверить введённое значение на null и 
пустую строку (вернуть null), потому что после преобразования null в число, функция вернёт 0.
*/

/*
var x;

function readNumber() {
  do {
    x = prompt('вводи число user ');
    console.log(x);
    if (x === "" || x === null) {
      x = null;
      return x;
    }
  } while (isNaN(x))
  return +x;
};

readNumber();

console.log("final " + x);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
Пример работы функции:
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525*/

/*
function random(min, max) {
    return min + (max-min) * Math.random();
};
console.log(random(1, 5));
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
}
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/
/*
let myName = "sdsd";

function ucFirst(str) {
  if (!str) {
    return str;
  }

  return str = str[0].toUpperCase() + str.slice(1);
};
myName = ucFirst(myName);
console.log(myName);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
/*
let letter;

function checkSpam(str) {
  if ((str.toLowerCase()).includes('viagra') || (str.toLowerCase()).includes('xxx')) {
    return true;
  } else {
    return false;
  }
};
checkSpam(letter);
*/
/*
let viagra="viagra";
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"*/

/*function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength-1) + "…";
  } else {
    return str;
  };
};*/
/*
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true */
/*
function extractCurrencyValue(str) {
  return parseInt(str.slice(1), 10);
};
let money = "$120$"
console.log(extractCurrencyValue(money));


*/
/*function extractCurrencyValue(str) {
  return +str.slice(1);
}
*/
/*
let money = "$4rfggghfgg5120sdsdfggh$"

function extractCurrencyValue(str) {
  let price = "";
  for (char of str) {
    if (isFinite(char)) {
      price += char;
    }
  }
  return +price;
};
console.log(extractCurrencyValue(money)); 
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл*/
/*
let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[1]="Классика";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Регги");
styles.unshift("Реп");
console.log(styles);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/
/*
function sumInput() {
  let arr = [];
  let sum = 0;
  
  while (true) {
    let newElem = prompt("Enter number: ");
    if (!isFinite(newElem) || (newElem === '') || (newElem === null)) {
      break;
    }
    arr.push(+newElem);
    console.log(arr);
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};
console.log(sumInput());
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.*/
/*
function getMaxSubSum(arr) {
  function cutNegativeSides(arr) {
    if (arr[0] > 0 && arr[arr.length - 1] > 0) {} else {
      if (arr[0] <= 0) {
        arr.shift();
      }
      if (arr[arr.length - 1] <= 0) {
        arr.pop();
      }
    }
  };
  while (true) {
    cutNegativeSides(arr);


  }


  console.log(arr);
  return;
};
//console.log(getMaxSubSum([-1, 2, 3, -9]));
//console.log(getMaxSubSum([2, -1, 2, 3, -9, 0, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
//console.log(getMaxSubSum([-2, -1, 1, 2]));
//console.log(getMaxSubSum([100, -9, 2, -3, 5]));
//console.log(getMaxSubSum([1, 2, 3]));
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
let arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(arr.length, 0, 3, 4);

alert(arr); // 1,2,3,4,5
let arr2 = arr.splice(arr.length -1, 1, 3, 4);
console.log(arr2);
*/
/*
let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return b - a; });

console.log(arr);  // 1, 2, 15
*/
/*var fruits = ['Яблоко', 'Банан'];
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});

// Яблоко 0
// Банан 1

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.*/
/*
function camelize(str) {
  console.log('enter: ', str);
  if (str === '') {
    return str;
  }
  let strArray = str.split('-');
  for (let i = 1; i < strArray.length; i++) {
    //if (strArray[i - 1] === '') {
    //  continue;
   // }
    strArray[i] = (strArray[i])[0].toUpperCase() + strArray[i].slice(1, strArray[i].length);
  }
  str = strArray.join("");
  console.log('out: ', str);
  return str;
};
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
*/
/*
function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)*/
/*
let arr = [5, 3, 8, 1];
console.log('initial array: ', arr);

function filterRange(arr, a, b) {
  return arr.filter(item => (item >= a, item <= b));
};
let filtered = filterRange(arr, 1, 4);
console.log('filtered array: ', filtered);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1] */
/*
let arr = [5, 3, 8, 1];
console.log('initial array: ', arr);

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
};
filterRangeInPlace(arr, 1, 4);
console.log('filtered array: ', arr);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/* 
сортировать по убыванию
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/
/*
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) 
*/
/*
function copySorted(arr) {
  return arr.slice().sort();
};

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log('arr: ', arr);
console.log('sorted: ', sorted);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Пример использования:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию 
с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.*/
/*
function Calculator() {

  this.calculate = function (str) {
    let expression = str.split(" ");
    let a = +expression[0];
    let action = expression[1];
    let b = +expression[2];
    if (isNaN(a) || isNaN(b) || !this.methods[action]) {
      return NaN;
    }
    return this.methods[action](a, b);
  };
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.addMethod = function (newAction, newCalculation) {
    this.methods[newAction] = newCalculation;
  };

};

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("++", (a, b) => a + 2 * b);


let result = powerCalc.calculate("2 ++ 8");
console.log(result);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = /* ... ваш код */
//alert( names ); // Вася, Петя, Маша */
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map((item) => item.name)
console.log(names);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
Например:
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];
let usersMapped = /* ... ваш код ... */
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
/*
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка. 
*/
/*
let vasya = {
  name: "Вася",
  surname: "Пупкин",
  id: 1
};
let petya = {
  name: "Петя",
  surname: "Иванов",
  id: 2
};
let masha = {
  name: "Маша",
  surname: "Петрова",
  id: 3
};
let users = [vasya, petya, masha];
console.log(users);
let usersMapped = users.map((item) => ({
  fullname: `${item.name} ${item.surname}`,
  id: item.id
}));
console.log(usersMapped);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/
/*
let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 28
};

let arr = [vasya, petya, masha];
console.log(arr);
let sortByAge = function (arr) {
  return arr.sort((a, b) => ((a.name >= b.name) ? 1 : -1));
}
sortByAge(arr);
console.log(arr);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
function getAverageAge(arr) {
  return arr.reduce( ((prev, item) => prev + +item.age), 0)/arr.length;
};
console.log(getAverageAge(arr));
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
Например:
function unique(arr) {
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O */
/*
function unique(arr) {
  console.log(arr);
  let uniqArr = arr.slice();
  for (let i = 0; i < uniqArr.length; i++) {
    let uniqueItemIndex=uniqArr.indexOf(uniqArr[i]);
    console.log(uniqArr[i],' index: ', uniqueItemIndex)
    for (let j=uniqArr.length-1; j>0; j--) {

    console.log('j=', j);  
    console.log(uniqArr[j],' last index: ', uniqArr.lastIndexOf(uniqArr[j]))
    console.log('значения равны?',uniqArr[i]===uniqArr[j]);
    console.log('первый и последний индексы разные?', uniqArr.lastIndexOf(uniqArr[j])!==uniqueItemIndex);
    console.log(uniqArr[i]===uniqArr[j] && uniqArr.lastIndexOf(uniqArr[j])!==uniqueItemIndex);

      if (uniqArr[i]===uniqArr[j] && uniqArr.lastIndexOf(uniqArr[j])!==uniqueItemIndex) {
        uniqArr.splice(uniqArr.lastIndexOf(uniqArr[j]), 1);
      }
   console.log('итоговый массив', uniqArr);

    }
  }
  return uniqArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

unique(strings); // кришна, харе, :-O
*/
/*
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*итератор */
/*
let range = {
  from: 1,
  to: 5
};
range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++ +'str'
          };
        } else {
          return {
            done: true
          };
        };
      }
    }
  }
      for (let num of range) {
        console.log(num); // 1, затем 2, 3, 4, 5
      }
      console.log(range); // 1, затем 2, 3, 4, 5
      */
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*let map = new Map();
let john = {
  name: "john",
  age: 21,
  weight: 70,
};
let johnMap = new Map(Object.entries(john));
console.log(johnMap);
let set = new Set(Object.entries(john));
console.log(set);
for (let key of set) {
  console.log(key.name);
}
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
Например:
function unique(arr) {}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(values) ); // Hare,Krishna,:-O
P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений. */
/*
function unique(arr) {
  let set = new Set(arr);
  let uniqueArr = Array.from(set);
  return uniqueArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O
*/
/*
function unique(arr) {
  return Array.from(new Set(arr));
}*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Например:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */
/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  console.log('initial array: ', arr);
  let wordsMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    wordsMap.set(word, arr[i]);
    console.log('текущее слово: ', arr[i]);
    console.log('мэп из слов: ', wordsMap);
  }
  let wordsSet = new Set(wordsMap.keys());
  console.log('сэт из слов: ', wordsSet);
  let anagramArray = Array.from(wordsMap.values(wordsSet.values()));
  console.log(anagramArray);
  return anagramArray;
}
aclean(arr);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал? 
*/
/*
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys);*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
for (let i=0; i<10; i++) {console.log('i++',i);}
for (let i=0; i<10; ++i) {console.log('++i',i);}
*/
/*
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

let double = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log(Object.keys(prices));
console.log(Object.values(prices));
console.log(Object.entries(prices));
Object.values(prices).forEach((value) => value*2);



console.log(doublePrices.meat); // 8
console.log(double.meat); // 8
console.log(prices.meat); // 8

*/
/*
let fruits = ['apple', 'banana'];
console.log(fruits);
for (i=0; i<fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {console.log('for of:', fruit);}
for (let fruit in fruits) {console.log('for in:', fruits[fruit]);}

fruits.age = 25;
console.log(fruits);
for (i=0; i<fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {console.log('for of:', fruit);}
for (let fruit in fruits) {console.log('for in:', fruits[fruit]);}

let x = 222;
console.log(x);
console.log(x.toString());
console.log(x.toString()===x);
let arr = ["a", "b"];
*/
/*
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // "a","b",function
*/
/*
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  console.log(arr);

  for (let item of arr) { // для каждого элемента массива
    console.log(item);
    partialSum += item; // добавляем значение элемента к partialSum
    console.log('до partialSum: ',partialSum);
    console.log('до  maxSum: ',maxSum);

    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    console.log('после partialSum: ',partialSum);
    console.log('после  maxSum: ',maxSum);
  }
  return maxSum;
}
//console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
//console.log( getMaxSubSum([1, 2, 3]) ); // 6
//console.log( getMaxSubSum([-1, -2, -3]) ); // 0
*/
/*
let arr = ["Я", "изучаю", "JavaScript"];
let arr2 = ["и", "охереваю", "с него"]

arr.splice(arr.length, 0, '1sdarfererew', '2sdarfererew');
console.log('добавили калиберду arr: ', arr);
console.log(arr.splice(arr.length - 2, 2));

let arr3 = arr.concat(arr2);

console.log('arr: ', arr);
console.log('arr3: ', arr3);

arr = arr.concat(arr2);
console.log('arr+arr2: ', arr);
let obj = {
  sdsd: 22
};

arr.forEach((aaa, bbb, vvv) => (console.log("item: ", aaa, "\nindex: ", bbb, "\narray: ", vvv)))

let x = arr.find((item) => item == "изучаю1");
console.log("x=", x);
*/
/*
arr.forEach((item, index) => {
  item = arr[index].toUpperCase();
  arr[index]=item;
  console.log(item);
});

console.log('arr after forEach: ', arr);
*/
/*
console.log(
  arr.map(item => item.toUpperCase())
  .reverse()
  .join("|||")
  .split("|")
);
console.log(
  arr.map(item => item.toUpperCase())
  .reverse()
  .join("|||")
);
*/
/*
console.log(arr.reduceRight((prev, value) => (prev + value)));

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
*/
/*
let огурец={};
let recipeMap = new Map([
  [{огурец}, 500],
  ["помидор", 350],
  ["лук",    50]
]);
console.log('keys: ',Array.from(recipeMap.keys()));
console.log('values: ',recipeMap.values());
console.log('entries: ',recipeMap.entries());
 let objjjj = {obj:1111};
let arr = [[ "sdff", "dkljfgjht58ughi"],[2, 22],[3, 33]];
let arrMap = new Map(arr);
console.log(arrMap);

let objfdjjf = {
  qqq: 1,
  www: 2
};console.log(Object.entries(objfdjjf));
let mamama = new Map(Object.entries(objfdjjf));
console.log(mamama);

let objectFromEntries = Object.fromEntries(arr);
console.log('objectFromEntries: ',objectFromEntries);
*/
/*
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
//alert(set.size); // 3

console.log(set.values());
let map = new Map(Object.entries(set.values()));
console.log(map);
*/
/*
function unique(arr) {
  return Array.from( new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));*/
/**Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
У вас есть к ним доступ, но управление этим массивом происходит где-то ещё.
Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

Имея такую вводную информацию, решите, какую структуру данных вы могли бы 
использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть 
подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

P.S. Когда сообщение удаляется из массива messages, оно должно также 
исчезать из структуры данных.

P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. 
Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям. */
/*
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)*/
/*
let str = "hello";
str = str[0].toUpperCase() + str.slice(1);
console.log(str);
let arr = [0, 3, 54, 5, 1, 14, 85, 1, -1, -50];
console.log(arr.length);
arr.forEach((item, index) => {
  if (isFinite(item)) {console.log(index);}
})
let max = Math.max(arr);
console.log(max);
max = Math.max.apply(null, arr);
console.log(max);

let min = Math.min(arr);
console.log(min);
min = Math.min.apply(null, arr);
console.log(min);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650 */
/*
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
  return (Object.keys(obj).length === 0) ? 0 : Object.values(obj).reduce((prev, value) => prev + value);
};
console.log(sumSalaries(salaries)); // 650

*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
  name: 'John',
  age: 30
};
alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные». */
/*
let user = {
  name: 'John',
  nawme: 'John',
  naeme: 'John',
  narme: 'John',
  ntame: 'John',
  nyame: 'John',
  age: 30
};
function count (obj) {
  /*let count=0;
  for (key in obj) {count++;}
  return count;*/
/*
  return Object.keys(obj).length;
};
*/
//console.log( count(user) ); // 2
// второй элемент не нужен
/*
let arr = ["Julius", "Caesar",1, "Consul", "of the Roman Republic"];
let [firstName, , title] = arr;

console.log( title ); // Consul*/
/*
let arr = ["Julius", "Caesar",1, "Consul", "of the Roman Republic"];
let map = new Map([["a",1],["b",2],["c",3]]);
console.log(map);
let [...title] = map;
title.forEach(value=> console.log(value));
/*console.log(title[0]);
console.log(title[1]);
console.log(title[2]);
console.log(title[3]);*/
/*
let options = {
  title1: "Menu",
  width: 100,
  height: 200,
  x:2,
  y:3,

};

let [title1, width, height, eee="1", ...rest] = options;
console.log(width);
console.log(height);
console.log(eee);
console.log(rest.x);
console.log(rest.y);*/
/*
let map = new Map();
map.set("John", 22);
map.set("Michael", 23);
map.set("Mary", 24);
console.log(map);

let obj ={};
obj.John = 22;
obj.Lewis = 23;
obj.Carol = 24;
console.log(obj);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false */
/*
let user = {
  aname: "John",
  years: 30
};
let {aname, years: age, isAdmin = false} =user;
console.log(aname);
console.log(age);
console.log(isAdmin);

*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */
/*let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};*/
/*
function topSalary(salaries) {
  if (Object.keys(salaries).length === 0) {
    return null;
  }
  let nameMaxSalary;
  let max = 0;
  for (keys in salaries) {
    console.log('condition: ', (salaries[keys] > max));
    if (salaries[keys] > max) {
      max = salaries[keys];
      nameMaxSalary = keys;
      console.log('worker: ', keys, '; salary: ', salaries[keys], '; max: ', max);
    } else {
      console.log(keys, ' - лох');
    }
  }
  return nameMaxSalary;
};
console.log(topSalary(salaries));
*/
/*
function topSalary(salaries) {
  if (Object.keys(salaries).length === 0) {
    return null;
  }
  Object.entries(salaries);
  let maxSalaaryName = null;
  let maxSalary = 0;
  for ([namE, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalaaryName = namE;
      maxSalary=salary;
    }
  }

  return maxSalaaryName;
}
console.log(topSalary(salaries));
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*const now = new Date();
console.log(new Date());
let Jan01_1970 = new Date();
console.log(Jan01_1970);
let Jan02_1970 = new Date(24*3600*1000);
console.log(Jan02_1970);
let x = new Date(5265564646464);
console.log(x);
let today = new Date("2021-12-02 14:07:22.202");
console.log(today);
let tomorrow = new Date(2021, 11, 3, 0, 0, 0, 567);
console.log(tomorrow);
let nowMonth = tomorrow.getMonth();
console.log(nowMonth);
console.log(new Date(tomorrow-today));*/
//*
/*
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;
// добавляем для "разогрева" перед основным циклом
bench(diffSubtract);
bench(diffGetTime);
// bench(upperSlice) и bench(upperLoop) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

alert( 'Итоговое время diffSubtract: ' + time1 );
alert( 'Итоговое время diffGetTime: ' + time2 );*/
/*
let now = new Date();
now.setFullYear(2023);
console.log('без UTC: ',now)
let then = new Date();
then.setUTCFullYear(2023);
console.log('    UTC: ',then)
let diff = new Date(now-then);
console.log(diff)
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert. */
/*
let feb12 = new Date(2012, 01, 20, 3, 12); 
console.log(feb12);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ" */
/*
function getWeekDay(date) {

  switch (date.getDay()) {
    case 0:
      return "ВС";
    case 1:
      return "ПН";
    case 2:
      return "ВТ";
    case 3:
      return "СР";
    case 4:
      return "ЧТ";
    case 5:
      return "ПТ";
    case 6:
      return "СБ";
    default:
      "это что за покемон?";
      break;
  }
}
let now = new Date();
console.log(getWeekDay(now));
*/
/*
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}
let date = new Date(2014, 0, 3); // 3 января 2014 года
alert( getWeekDay(date) ); // ПТ
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2*/
/*
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}
let date = new Date(2021, 11, 6); 
alert( getLocalDay(date) ); */
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date. */
/*
let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
  let finalDate = new Date(date.getTime()-days*24*3600*1000).getDate(); 
  return finalDate; 
}

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/
/*
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  console.log('copied date: ',dateCopy);
  console.log( 'set date: ', dateCopy.setDate(date.getDate()) );

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/
/*
function getLastDayOfMonth(year, month) {
  let yearDate = new Date(year, month + 1, 0);
  console.log('current date: ',yearDate);
  console.log(yearDate.getDate());
  return yearDate.getDate();

}
getLastDayOfMonth(2021, 11)
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/** Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/
/*
function getSecondsToday() {
  let now = new Date();
  console.log('now: ',now);
  let nowZeroTime =new Date(now.getFullYear(), now.getMonth(), now.getDate());
  console.log(nowZeroTime);
  let seconds = (now-nowZeroTime)/1000;
  return seconds;
}
console.log('секунд с начала дня: ', getSecondsToday());
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/
/*

function getSecondsToTomorrow() {
  let now = new Date();
  console.log('now: ',now);
  let tomorrow =new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  let seconds = (tomorrow-now)/1000;
  return seconds;
}
console.log('до завтра осталось ',getSecondsToTomorrow(),' секунд');
*/


/**Чтобы получить количество миллисекунд до завтра, можно из «завтра 00:00:00» вычесть текущую дату.

Сперва сгенерируем дату на «завтра» и сделаем следующее:

function getSecondsToTomorrow() {
  let now = new Date();

  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // преобразуем в секунды
}
Альтернативное решение:

function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}
Учтите, что многие страны переходят с зимнего времени на летнее и обратно, так что могут быть дни длительностью в 23 или 25 часов. 
Такие дни, если это важно, можно обрабатывать отдельно. */

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */
/*
function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) { // меньше 1 секунды
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + ' мин. назад';
  }

  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*let obj={lalala:"balala"};
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: [{cat: "bulka", wife:{isbig:"big", iswhite:"+"}, id: Symbol("id"), link:obj}, 'css', 'js', NaN],
  wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // мы получили строку!

console.log(json);
/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
/*
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log( 'jsonчик = ', JSON.stringify(meetup, (key, value) => {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}, space = 2));
*/
/*
let room = {
  number: 23,
  /*toJSON() {
    return this.number;
  }*/
/*};

let meetup = {
  title: "Conference",
  room
};

console.log( JSON.stringify(room) ); // 23

console.log( JSON.stringify(meetup) );*/
/*/*
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
/* пары ключ:значение, которые приходят в replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/

/*let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

console.log( user.friends[1] ); // 1*/
/*
let str = '{"title":"Conference","date/*":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() );*/ // 30 - теперь работает!*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
}; */
/*
let user = {
  name: "Василий Иванович",
  age: 35
};
let JSONxxxxxUser= JSON.stringify(user);
console.log(JSONxxxxxUser);
let nextUser = JSON.parse(JSONxxxxxUser);
console.log(nextUser);
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  /* ваш код */
//}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
/*
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{
    name: "Иванов"
  }, {
    name: "Петров"
  }],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}, space = 2));
*/
/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*let counter=0;
function pow(x, n) {
  counter+=1;
  console.log('counter: ',counter);
  console.log('x: ',x);
  console.log('n: ',n);
  let result = (n==1)? x: x * pow(x,n-1)
  console.log('result ',result);
  return result;
}
console.log(pow(2,3));
let a ={};
console.log(typeof a);
console.log(typeof a == "object");
*/
/*
let company = { // тот же самый объект, сжатый для краткости
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],
    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    //console.log('Array.isArray(department): ', Array.isArray(department));
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    console.log(sum);
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 6700

let x = [{
  name: 'John',
  salary: 1000
}, {
  name: 'Alice',
  salary: 600
}];
console.log('000000000000000000');

console.log(x.reduce((prev, current) => prev + current.salary, 0));
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { /*... ваш код ... */
/*}

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)? */

/*function sumToRecursive(n) {
  //console.log(n);
  return (n==1)? 1 : n+sumToRecursive(n-1);
}

function sumToCycle(n) {
  let sum=0;
  for (let i=1; i<=n; i++)  {
    sum+=i;    
  }
  return sum;
}
function sumToProgression(n) {
  return (1+n)/2 * n;
}
console.log('sumToRecursive: ',sumToRecursive(1000));
console.log('sumToCycle: ',sumToCycle(1000));
console.log('sumToProgression: ',sumToProgression(1000));

function productivityAssertion(f) {
  let start = new Date();
  f(10000000000);
  let end = new Date();
  return (end-start);
}
//console.log('recursive: ',productivityAssertion(sumToRecursive));
console.log('cycle: ',productivityAssertion(sumToCycle));
console.log('progression: ',productivityAssertion(sumToProgression));*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
 */
/*
function factorial(n) {
  return (n == 1) ? 1 : n * factorial(n - 1);
}
console.log(factorial(3));*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

//function fib(n) { /* ваш код */ //}
/*
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды. */

/*function fibRecursive(n) {
  return (n <= 1) ? n : fibRecursive(n - 1) + fibRecursive(n - 2);
}
console.log('fibRecursive: ', fibRecursive(20));

function fibCycle(n) {
  let arr = [0, 1];
  for (i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
console.log('fibCycle: ',fibCycle(200));*/
/** */
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без? */
/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListRecur(list) {
  console.log(list.next != null);
  console.log('текущий элемент', list.value);

  (list.next) ? (printListRecur(list.next)) : console.log('закончили вывод списка');
}
console.log('recur: ', printListRecur(list));

function printListCycle(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}
console.log('cycle: ', printListCycle(list));
*/


/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию. */
/*function lll(n) {
  console.log(n);
  return (n == 0) ? 0 : n + lll(n - 1);
}
console.log(lll(5));
*/
/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListRecurBackwards(list) {
  if (list.next) {
    printListRecurBackwards(list.next);
  }
  console.log(list);
}
printListRecurBackwards(list);

function printListRecurForwards(list) {
  console.log(list)
  return (list.next) ? printListRecurForwards(list.next) : console.log('всё');
}
printListRecurForwards(list);
*/
/**Вариант с использованием цикла сложнее, чем в предыдущей задаче.

Нет способа сразу получить последнее значение в списке list. Мы также не можем «вернуться назад», к предыдущему элементу списка.

Поэтому мы можем сначала перебрать элементы в прямом порядке и запомнить их в массиве, а затем вывести то, что мы запомнили, в обратном порядке:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

printReverseList(list);
Обратите внимание, что рекурсивное решение на самом деле делает то же самое: проходит список, запоминает элементы в цепочке вложенных вызовов (в контексте выполнения), а затем выводит их. */
/*
function printListCycle(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}
console.log('cycle: ', printListCycle(list));
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*let x = [3, 4, 1];
console.log(Math.max(...x));
let str = "Hello"
console.log(...str);
let y = {
  "a":1,
  "b":2
}
//console.log([...y]); //not iterable
console.log(Array.from(Object.entries(y)));*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*let name = "John";
sayHi(); // Pete
function sayHi() {
  alert("Hi, " + name);
}

name = "Pete"; // (*)

sayHi(); // Pete*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4 */
/*function sum(b) {
  return function (a) {
    return a+b;
  };
}
console.log(sum(1)(2));
console.log(sum(4)(-5));
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:

/* .. ваш код для inBetween и inArray */
//let arr = [1, 2, 3, 4, 5, 6, 7];

//alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

//alert( arr.filter(inArray([1, 2, 10])) ); // 1,2 */
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {

  return function (x) {
    return x >= a && x <= b
  };
}

let yyy = [1 , 2 ,3];
console.log(yyy.includes(1));

function inArray(arr) {
  return function (num) {
    return arr.includes(num);
  };
}


console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, скажем, вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть, чтобы вместо функции, мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого. */
/*
let users = [{
    name: "John",
    age: 20,
    surname: "Johnson"
  },
  {
    name: "Pete",
    age: 18,
    surname: "Peterson"
  },
  {
    name: "Ann",
    age: 19,
    surname: "Hathaway"
  }
];

function byField(prop) {
  return (a, b) => a[prop] > b[prop] ? 1 : -1;
};

(users.sort(byField('name')));
users.forEach(value => console.log(value.name));

console.log(users.sort(byField('age')));
users.forEach(value => console.log(value.name));
*/
/*
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => console.log(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => console.log(user.name)); // Pete, Ann, John*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/**Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано. */
/*
function makeArmy() {

  let shooters = [];
  let i = 0;

  while (i < 10) {
    let k=i;
    let shooter = function () { // функция shooter
      console.log(k); // должна выводить порядковый номер
    };
    
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();


army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*for (i = 2; i < 5; i++) {
  var k = 2;
  var k = 555;
  var k;
}
console.log(k);
if (5 > 3) {
  var www = 3;
}
console.log(www);
*/
/*
let a = function () {
  sss = 6 * 2;
  var sss;


  return console.log(sss)
};
a();
*/
/*
if (!window.Promise) {
  alert("Ваш браузер очень старый!");
}*/
/*
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}
// для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа
ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));*/
/*
function makeCounter() {
  // вместо
  // let count = 0

  function counter() {
    return counter.count++;
  };
  counter.count = 0;
  console.log(typeof counter)
  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1

*/
/*
let sayHi = function func(hi) {
  if (hi) {
    console.log(hi);
  } else {
    console.log("who are you? i didnt call you? go away!")
  }
}
sayHi('hi');
sayHi('mf');
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**важность: 5
Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, 
можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так. */
/*

function makeCounter() {
  let count = 0;
  
  function counterFunction() {
    return ++count;
  }
  counterFunction.set = function (num) {
    return count = num;
  };
  
  counterFunction.decrease = function () {
    return --count;
  };
  return counterFunction;
}
makeCounter.setting =2;

let counter = makeCounter();
console.log(makeCounter.setting);
console.log('10 set: ',counter.set(10)); // установить новое значение счётчика
console.log('+1: ',counter()); // 10
console.log('+1: ',counter()); // 10
console.log('+1: ',counter()); // 10
console.log('+1: ',counter()); // 10
console.log('+1: ',counter()); // 10

console.log('-1: ',counter.decrease()); // уменьшить значение счётчика на 1
console.log('-1: ',counter.decrease()); // уменьшить значение счётчика на 1
console.log('-1: ',counter.decrease()); // уменьшить значение счётчика на 1
console.log('-1: ',counter.decrease()); // уменьшить значение счётчика на 1

console.log('+1: ',counter()); // 10 (вместо 11)
*/
/*Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.*/
/*function sum(a) {
  sum.summa = 0;
  sum[SymbolToPrimitive] = function (hint) {
    return (hint=='number')? summa: 'string';
  }
  return sum();
}


sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15*/
/*В общем, чтобы это хоть как-нибудь заработало, результат, возвращаемый sum, должен быть функцией.
Между вызовами эта функция должна удерживать в памяти текущее значение счётчика.
Согласно заданию, функция должна преобразовываться в число, когда она используется с оператором ==. Функции – объекты, так что преобразование происходит, как описано в главе Преобразование объектов в примитивы, поэтому можно создать наш собственный метод, возвращающий число.
Код:

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15
Пожалуйста, обратите внимание на то, что функция sum выполняется лишь однажды и просто возвращает функцию f.

Далее, при каждом последующем вызове, f суммирует свой аргумент со значением currentSum и возвращает себя же.

В последней строке f нет никакой рекурсии.

Вот как выглядит рекурсия:

function f(b) {
  currentSum += b;
  return f(); // <-- рекурсивный вызов
}
В нашем случае мы просто возвращаем функцию, не вызывая её:

function f(b) {
  currentSum += b;
  return f; // <-- не вызывает себя. Просто возвращает
}
Функция f будет использоваться в последующем вызове и снова возвращать себя 
столько раз, сколько будет необходимо. Затем, при использовании в качестве числа или строки, 
метод toString возвращает currentSum – число. Также здесь мы можем использовать Symbol.toPrimitive или valueOf для преобразования.*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
////let func = new Function('a,b', 'return a + b');
//console.log(func(1,2));

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*let timerId = setInterval(() => console.log("ничего не происходит"), 1000);
//console.log(timerId); // идентификатор таймера
clearTimeout(timerId);
console.log('catcatcat');
console.log('catcatcat');
console.log('catcatcat');
console.log('catcatcat');*/
/**Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */


//setTimeout(printNumbers(from, to), 1000);*/
/*
//через timeout
function printNumbers(from, to) {
  console.log('считаем от ',from,' до ',to)
  let current = from;
  if (from >= to) {
    return;
  };
  let timer = setTimeout(function showNum() {
    console.log('current timer: ', current);
    current++;
    if (current <= to) {
      timer = setTimeout(showNum, 1000);
    }
  }, 1000);

}
printNumbers(10, 20);
printNumbers(20, 23);
*/

//через interval
/*
function printNumbers(from, to) {
  console.log('считаем от ', from, ' до ', to)
  let current = from;
  if (from >= to) {
    return;
  };

  let timer = setInterval(function showNum() {
    if (current <= to) {
      console.log('current timer: ', current);
      current++;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
printNumbers(10, 20);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Что покажет setTimeout?
важность: 5
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
} */
/*
let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}

slow = cachingDecorator(slow);
console.log('вот она функция: ',slow);

console.log( slow(1) ); // slow(1) кешируем
console.log( "Again: " + slow(1) ); // возвращаем из кеша
console.log( slow(2) ); // slow(2) кешируем
console.log( "Again: " + slow(2) ); // возвращаем из кеша

let map= new Map();
map.set("name", "Misha");
map.set("name", "Grisha");
console.log(map);
*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // теперь 'this' передаётся правильно
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

alert( worker.slow(2) ); // работает
alert( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // работает
console.log( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/**Декоратор-шпион
важность: 5
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS. */
/*
function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

function spy(func) {
  
  return function wrapper (args) {
    wrapper.calls.push(...args);
    return func(args);
  }
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*function pow(x, n) {
  console.log(n);
  return (n==1)? x : x*pow(x, n-1);
}
console.log(pow(2, 4));*/
/*
let company = {

  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  shmales: [{
    name: 'John',
    salary: 1001
  }, {
    name: 'Alice',
    salary: 601
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

function getArraysSalaries(obj) {
  console.log("step");
  let summa = 0;
  for (let part of Object.values(obj)) {
    console.log(summa);
    if (Array.isArray(part)) {
      summa += part.reduce((prev, item) => (prev + item.salary), 0)
      console.log(summa);
    } else {
      summa += getArraysSalaries(part);
      console.log("summa if not arr: ", summa)
    }
  }
  console.log("step summa: ", summa);

  return summa;
}
console.log("my answer:", getArraysSalaries(company));


function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
console.log('answer of book: ',sumSalaries(company));

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(department) {
  return Object.values(department).reduce((prev, employee)=>(prev+employee),0);
}
console.log( sumSalaries(salaries) ); // 650*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/