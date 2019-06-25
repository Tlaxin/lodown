'use strict';

// YOU KNOW WHAT TO DO //

/*
* identity: returns any given value unchanged.
*
* @param{Any Value} value: given value
* @return{Any Value}: returns any value unchanged
*/

function identity(value){
    return value;
}

module.exports.identity = identity;

/*
* typeOf: return the data type that correlates to the given value.
*
* @param{Any Value} value: given value
* @return{String}: returns the string value of the data type that correlates to the given value.
*/

function typeOf(value){
    if(Array.isArray(value)){
        return 'array';
    } else if(value === null){
        return 'null';
    } else{
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/*
* first: when given a number, it returns the first number of elements in the array
* if no number is given, it returns the first element alone.
* if number<0, or no array is given, it return an empty array.
*
* @param{Array} array: any given array
* @param{Number} number: any number > 0
* @return{Array}: an array full of the first # of elements givrn by the number param
*/

function first(array, number){
    let myArr = [];
if(!Array.isArray(array) || number < 0){
        return myArr;
}else if(!number){
    return array[0];
} else if(number <= array.length){
        for(var i = 0; i < number; i++){
        myArr.push(array[i]);
        }
}else {
    for(var i = 0; i < array.length; i++){
        myArr.push(array[i]);
    }
}
return myArr;
}
module.exports.first = first;

/*
* last: when given a number, it return the last number of elements in the array
* if no number is given, it returns the last element alone.
* if number < 0, or no array is given, it return an empty array.
*
* @param{Array} array: any given array
* @param{Number} number: any number > 0
* @return{Array}: an array full of the last # of elements givrn by the number param
*/

function last(array, number){
    let myArr = [];
if(!Array.isArray(array) || number < 0){
        return myArr;
}
else if(!number){
    return array[array.length - 1];
}
else if(number < array.length){
    for(var i = number - 1; i < array.length; i++){
        myArr.push(array[i]);
    }
    return myArr;
}
else{
    return array;
}
}

module.exports.last = last;

/*
* indexOf: if the given value is not in the array, it returns -1
* if value is in array, it returns the first index it is found.
*
* @param{Array} array: any given array;
* @param{any value} value: any value the array may contain;
* @return{Number}: the index position where the element === value given;
*/

function indexOf(array, value){
    if(!array.includes(value)){
        return -1;
    }
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
}

module.exports.indexOf = indexOf;

/*
* contains: returns boolean value if even 1 value is equal to an array element
* 
* @param{Array} arraye: any given array
* @param{any value} value: any given value to be checked for in the array
* @retuen{Boolean}: if any elemnt in the array === value
* return true, else return false.
*/

function contains(array, value){
    let counter = 0;
    for(var i = 0; i < array.length; i++){
         array[i] === value ? counter++ : counter += 0;
    }
   return counter > 0 ?  true :  false;
}

/*
* each: Designed to loop over a collection, Array or Object, and applies the 
* action Function to each value in the collection.
* 
* @param {Array or Object} collection: The collection over which to iterate.
* @param {Function} action: The Function to be applied to each value in the 
* collection
*/
 
 module.exports.contains = contains;
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;

/*
* unique: loops through an array pushing value into a new array,
* while not pushing any value that has already been stored into the new array.
*
* @param{Array} array: any given array
* @return{Array}: a new array featuring all the value from the previous array,
* but with nu duplicates.
*/

function unique(array){
    let myArr = [];
    for(var i = 0; i < array.length; i++){
      if(indexOf(myArr, array[i]) === -1){
        myArr.push(array[i]);
      }
    }
    return myArr;
}

module.exports.unique = unique;

/*
* filter: passes every elemnts of the givn array to the function given,
* and results that are evaluated true are pushed into a new array and returned
*
* @param {Array} arr: a given array
* @param {Function} func: an unkown function that we pass
* the elemnt, index, and array to do something.
* @return {Array}: a new array filled with the elemnts of the previous array
* however, only the values that evaluated true when passed through the function
*/

function filter(arr,func){
    let myArr = [];
    each(arr, function(e,i,a){
      if(func(arr[i], i, arr)){
      myArr.push(arr[i]);
      }
});
return myArr;
}

module.exports.filter = filter;

/*
* reject: passes every elemnts of the givn array to the function given,
* and results that are evaluated false are pushed into a new array and returned 
*
* @param{Array} arr: a given array
* @param{Function} func: what the function does is unkown until runtime
* @return{Array}: a new array filled with the elemnts of the previous array
* however, only the value that evaluated false when passed through the function
*/

function reject(arr, func){
  return  filter(arr, function(e,i,a){
      return !func(e, i, a);
      });
}

module.exports.reject = reject;

/*
* partition: passes the elemnts, index, and array to the given function,
* it pushes true evaluations into the first array, and false into the second,
* both arrays are nested inside of another array
*
* @param{Array} arr: any array
* @param{Function} func: what the function does is unkown until runtime
* @return{Array}: after passing element, ndex, and array to the function
* results that evaluated true went in the array in index[0], also inside of the main array,
* results that evaluated false went in the array in index[1], also insideof the main array.
*/

function partition(arr, func){
    console.log(arr);
    let myArr= [[], []];
    each(arr, function(e, i ,a){
        if(func(e, i, a)){
         myArr[0].push(arr[i]);   
        }
         if(!func(e, i, a)){
         myArr[1].push(arr[i]);   
        }
    });
    return myArr;
}

module.exports.partition = partition;

/*
* map: takes an array or object and a function
* if an array, passes the element, index and array to the given function.
* if an object, passes value, key, and object to the given function.
* each result is stored in a new array and returned.
*
* @param{Array or Object} collection: a given collection either an array or object.
* @param{Function} func:  what the function does is unkown untill runtime.
* @return{Array}: a new array containg the results of the function call on 
* the given collection. 
*/

function map(collection, func){
    let myArr = [];
      collection.each(function(val, i, coll){
          myArr.push(func(collection[i], i, coll));
      });
  return myArr;
}

module.exports.map = map;

/*
* pluck: iterates through an array of object, and given a property, pushes all the properties 
* of every object into a new array and returns it.
*
* @param{Array} arrObj: an array where every element is an object.
* @param{String} prop: refers to a property on the objects given.
* return{Array} value: a new array containg the property value, given value,
* of every object in the previous array.
*/

function pluck(arrObj, prop){
   return map(arrObj, function(ele, i, arr){
        return arr[i][prop]; 

    });
}

module.exports.pluck = pluck;

/*
* every: if its an array, it passes the element, index, and array to the function.
* if it an object is passes the value, the key, and the object to the function.
* if all passes to the function return true, every returns true, else
* it returns false. If the function is undefined, every checks to make sure every element
* evalutes to a truthy value.
*
* @param{Object or Array} coll: any array or object.
* @param{Function} test: a function to recieve the passed info from above.
* @return{Boolean}: true or false boolean value based upon the callback function.
*/

function every(coll, test){
 let counter = 0;
  each(coll, function(val, call, file){
    if(!test){
        if(!val){
            counter++;
        }
        // !val ? counter++ : counter;
    }
    else if(!test(val, call, file)){
          counter++;
    }
  });
    return counter === 0 ? true :  false;
   
}

module.exports.every = every;

/*
* some: if the first parameter is an array, some passes the element, index, and array
* to the function. If the first parameter is an object iit passes the value, the key, and
* the object to the function. If all passes to the function return false, some returns false.
* If one pass returns true, some returns true.
* @param{Object or Array} coll: any array or object.
* @param{Function} func: a function to recieve the passed info from above.
* @return{Boolean}: true or false boolean value based upon the callback function.
*/

function some(coll, func){
     let counter = 0;
  each(coll, function(val, call, file){
  if(!func){
     if(val){
       counter++;  
     } 
  }
  else if(func(val, call, file)){
      counter++;
  }
});
   return counter === 0 ? false : true;
}

module.exports.some = some;

/*
* reduce: passes the array element, index, and array to the function,
* after evaluating each iteration it takes the results from the function call and 
* saves them to the seed along with the previous result.
*
* @param{Array} arr: any array
* @param{Function} func: a function taking the passed results from the array.
* @param{any value} seed: so the seed holds the previous result, once the next loop
* iteration takes place, the new value is stored to the seed along with the previous value.
* it jons the previous result and curret result to 1 reuslt. this can be adding, subracting
* or whatever the function tells us to with the current and previous result.
* @return{any value}: the seed is returned and will be whatever datatype you set the seed too.
*/

function reduce(arr, func, seed){
    if(seed !== undefined){
        for(let i = 0; i < arr.length; i++){
            seed = func(seed, arr[i], i);
        }
    } else{
        seed = arr[0];
          for(let i = 1; i < arr.length; i++){
            seed = func(seed, arr[i], i);
          }
    }
    return seed;
}

module.exports.reduce = reduce;

/*
* extend: takes 2 or more objects and takes the properties from obj2, obj3, ...
* and stores them in obj1, by either adding or updating the properties. Once finsihed with
* all objects, it returns the updated object1.
* by looking at our code, it looks as if we hav no parameters, howeer by using the 
* keyword argumentsew can set as many parameters we need.
* @param{Object}: this is the frst object given, this
* is the object that will be updated by all the others then we return this object.
* @param(Object): this can be any number of objects, we will pull the properties
* from these objects and give them to object 1.
* @return{Object}: extend returns the firt object, modified to hold all of the properties
* from all the other objects passed to extend.
*/

function extend(){
 for(var i = 1; i < arguments.length; i++){
    for(var key in arguments[i]){
        if(arguments[i].hasOwnProperty(key)){
        arguments[0][key] = arguments[i][key];
        }
    }
 }
    return arguments[0];
}

module.exports.extend = extend;