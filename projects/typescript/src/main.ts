
// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];
interface  Guiltarist {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray,
}

type userId = stringOrNumber;

// literal types
let myName = 'ismail';

let userName: 'ismail' | 'john' | 'doe' = 'ismail';
userName = 'john';


// functions
const  add = (a: number,b: number) => {
  return a + b;
} 
const logmsg = (message: any): void => {
  console.log(message);
}

logmsg('Hello, TypeScript!');
logmsg(add(5, 10));

let subtract = function (a: number, b: number): number {
  return a - b;
}
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
}

logmsg(multiply(5, 10));


//optional parameters

const addAll = (a:  number, b: number, c?: number): 
number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
}

//default parameters values
const sumAll = (a:  number, b: number, c: number = 2): 
number => {
    return a + b + c;
  }
logmsg(addAll(2,3, 2));
logmsg(addAll(2, 3));
logmsg(sumAll(2, 3));


// rest parameters

const total = (...nums: number[]): number => {
  return  nums.reduce((prev, curr) => prev + curr);
}

logmsg(total(1, 2, 3, 4));

const createError = (errMsg : string): never => {
  throw new Error(errMsg);
}
 const infinite = ()  => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
 }
// custom type guard
  const isNumber = (value: any):  boolean => {
    return typeof value === 'number'
    ? true : false;
  }


    // use of never type
 const numberOrString = ( value: number | string ): 
 string => {
  if (typeof value === 'string')  return 'string'
  if (isNumber(value)) return 'number'
  return createError('This should never happen');
  }
 




