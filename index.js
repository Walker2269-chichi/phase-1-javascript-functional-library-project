// Collection Functions (for Arrays or Objects)

// 1. myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // 2. myMap
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  // 3. myReduce
  function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      let startIndex = 0;
      if (acc === undefined) {
        acc = collection[0];
        startIndex = 1;
      }
      for (let i = startIndex; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      let startIndex = 0;
      if (acc === undefined) {
        acc = collection[Object.keys(collection)[0]];
        startIndex = 1;
      }
      let keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
    return acc;
  }
  
  // 4. myFind
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  // 5. myFilter
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  // 6. mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  
  // 1. myFirst
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // 2. myLast
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const valA = callback(a);
      const valB = callback(b);
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    array.forEach(item => {
      if (Array.isArray(item) && (shallow ? true : item.some(Array.isArray))) {
        myFlatten(item, shallow, newArr);
      } else {
        newArr.push(item);
      }
    });
    return newArr;
  }
  
  // Object Functions
  
  // 1. myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // 2. myValues
  function myValues(object) {
    return Object.values(object);
  }
  
  // Example usage:
  
  const arr = [1, 2, 3, 4, 5];
  const obj = { a: 1, b: 2, c: 3 };
  
  // Testing myEach
  myEach(arr, (val) => console.log(val)); // logs: 1, 2, 3, 4, 5
  myEach(obj, (val) => console.log(val)); // logs: 1, 2, 3
  
  // Testing myMap
  console.log(myMap(arr, (num) => num * 2)); // [2, 4, 6, 8, 10]
  
  // Testing myReduce
  console.log(myReduce(arr, (acc, val) => acc + val, 10)); // 25
  
  // Testing myFind
  console.log(myFind(arr, (num) => num % 2 === 0)); // 2
  
  // Testing myFilter
  console.log(myFilter(arr, (num) => num % 2 === 0)); // [2, 4]
  
  // Testing mySize
  console.log(mySize(arr)); // 5
  console.log(mySize(obj)); // 3
  
  // Testing myFirst
  console.log(myFirst(arr)); // 1
  console.log(myFirst(arr, 3)); // [1, 2, 3]
  
  // Testing myLast
  console.log(myLast(arr)); // 5
  console.log(myLast(arr, 3)); // [3, 4, 5]
  
  // BONUS Testing mySortBy
  console.log(mySortBy(arr, (num) => Math.sin(num))); // Sorted based on sin values
  
  // BONUS Testing myFlatten
  console.log(myFlatten([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
  console.log(myFlatten([1, [2], [3, [[4]]]], true)); // [1, 2, 3, [[4]]]
  
  // Testing myKeys and myValues for Objects
  console.log(myKeys(obj)); // ["a", "b", "c"]
  console.log(myValues(obj)); // [1, 2, 3]
  