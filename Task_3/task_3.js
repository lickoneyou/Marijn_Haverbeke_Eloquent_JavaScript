// Сумма диапазона
// Во введении был упомянут удобный способ подсчёта
// сумм диапазонов чисел:

// console.log(sum(range(1, 10)));

// Напишите функцию range, принимающую два аргумента –
// начало и конец диапазона – и возвращающую массив,
// который содержит все числа из него, включая начальное
// и конечное.
// Структуры данных: объекты и массивы
// 144
// Затем напишите функцию sum, принимающую массив
// чисел и возвращающую их сумму. Запустите указанную
// выше инструкцию и убедитесь, что она возвращает 55.
// В качестве бонуса дополните функцию range, чтобы она
// могла принимать необязательный третий аргумент – шаг
// для построения массива. Если он не задан, шаг равен
// единице. Вызов функции range(1, 10, 2) должен будет
// вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с
// отрицательным шагом так, что вызов range(5, 2, -1)
// возвращает [5, 4, 3, 2].

// console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]

function range(a, b, c = 1) {
  const resArray = [];
  if (c > 0) {
    for (let i = a; i <= b; i += c) {
      resArray.push(i);
    }
  } else {
    for (let i = a; i >= b; i += c) {
      resArray.push(i);
    }
  }

  return resArray;
}

function sum(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}

console.log(range(1, 10));

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// Обращаем вспять массив

// У массивов есть метод reverse, меняющий порядок
// элементов в массиве на обратный. В качестве
// упражнения напишите две функции, reverseArray и
// reverseArrayInPlace. Первая получает массив как
// аргумент и выдаёт новый массив – с обратным порядком
// элементов. Вторая работает как оригинальный метод
// Структуры данных: объекты и массивы
// 145
// reverse – она меняет порядок элементов на обратный в
// том массиве, который был ей передан в качестве
// аргумента. Не используйте стандартный метод reverse.
// Если иметь в виду побочные эффекты и чистые функции
// из предыдущей главы, какой из вариантов вам кажется
// более полезным? Какой более эффективным?
// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

function reverseArray(arr) {
  return arr.reverse();
}

function reverseArrayInPlace(arr) {
  const a = [];

  for (let i = 0; i < arr.length; i++) {
    a.unshift(arr[i]);
  }
  return a;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];

console.log(reverseArrayInPlace(arrayValue));
// → [5, 4, 3, 2, 1]

// Список

// Напишите функцию arrayToList, которая строит такую
// структуру, получая в качестве аргумента [1, 2, 3], а также
// функцию listToArray, которая создаёт массив из списка.
// Также напишите вспомогательную функцию prepend,
// Структуры данных: объекты и массивы
// 147
// которая получает элемент и создаёт новый список, где
// этот элемент добавлен спереди к первоначальному
// списку, и функцию nth, которая в качестве аргументов
// принимает список и число, а возвращает элемент на
// заданной позиции в списке или же undefined в случае
// отсутствия такого элемента.
// Если ваша версия nth не рекурсивна, тогда напишите её
// рекурсивную версию.

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

function arrayToList(arr) {
  const list = {};
  for (let i = 0; i < arr.length; i++) {
    if (!list.value) {
      list.value = arr[i];
      list.rest = null;
      arr.shift();
    }
  }
  function qwer(list) {
    if (arr.length == 0) {
      return list;
    } else {
      for (const key in list) {
        if (list[key] == null) {
          list[key] = {
            value: arr[0],
            rest: null,
          };
          arr.shift();
          return qwer(list[key]);
        }
      }
    }
  }
  qwer(list);
  return list;
}

function listToArray(list) {
  let arr = [];
  function rec(list) {
    for (const key in list) {
      {
        if (list[key] === null) {
          return;
        }
        if (key == "value") {
          arr.push(list[key]);
        } else {
          rec(list[key]);
        }
      }
    }
  }
  rec(list);
  return arr;
}

function prepend(pos, pre) {
  return { value: pos, rest: pre };
}

function nth(list, pos) {
  let count = 0;
  function rec(l) {
    for (const key in l) {
      if (count == pos) {
        return l["value"];
      }
      count++;
      return rec(l["rest"]);
    }
  }

  return rec(list);
}

console.log("arrayToList", arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("=======");
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20



// Глубокое сравнение


// Оператор == сравнивает переменные объектов,
// проверяя, ссылаются ли они на один объект. Но иногда
// полезно было бы сравнить объекты по содержимому.
// Напишите функцию deepEqual, которая принимает два
// значения и возвращает true, только если это два
// одинаковых значения или это объекты, свойства которых
// Структуры данных: объекты и массивы
// 148
// имеют одинаковые значения, если их сравнивать
// рекурсивным вызовом deepEqual.
// Чтобы узнать, когда сравнивать величины через ===, а
// когда – объекты по содержимому, используйте оператор
// typeof. Если он выдаёт "object" для обеих величин, значит
// нужно делать глубокое сравнение. Примите во внимание
// одно дурацкое исключение, существующее по
// историческим причинам: typeof null тоже возвращает
// "object".
// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}
// ));
// // → true

function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}
));
// → true
