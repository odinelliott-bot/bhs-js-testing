/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

function sleep_in(weekday,vacation){
    if (weekday == true && vacation == false) {
        return false;
    }
    return true;
}

function monkey_trouble(a_smile, b_smile){
    if( a_smile == true && b_smile == true || a_smile != true && b_smile != true) {
        return true;
    }
    return false;
}
function string_times(str, n) {
let answer = "";
  for (let i = 0; i < n; i++) {
    answer += str;
  }
  return answer;
}
function front_times(word, n) {
    answer = "";
    let ans = word.substring(0,3);
    for (let i = 0; i < n; i++) {
        answer += ans;
    }
    return answer;
}
function string_bits(str) {
let ans = "";
    for(let i=0; i < str.length; i++) {
        if (i % 2 === 0) {
            ans += str[i];
        }
    }
    return ans;
}
function caughtSpeeding(speed, is_birthday){
    if (is_birthday == true) {
        speed = speed - 5;
    }
    if (speed <= 60) {
        return 0;
    }
    if (speed >= 61 && speed <= 81) {
        return 1;
    } 
    if (speed >= 81) {
        return 2;
    }

}
function fizz_buzz(n){
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    if (n % 3 === 0) {
        return "Fizz";
    }
    if (n % 5 === 0) {
        return "Buzz";
    }
    return n + "!";
}
function specialEleven(n){
    if (n % 11 === 0 || n % 11 === 1) {
        return true;
    }
    return false;
}
function withoutDoubles(n1, n2, is) {
    var answer = n1 + n2;
    if(n1 === n2 && is == true) {
        answer += 1;
    }
    if(n1 == 6 && n2 == 6 && is == true) {
        return 7;
    }
    return answer;
}
function left2(str) {
    let first = str.substring(0,2);
    let str2 = str.substring(2, str.length)
    let answer = str2 + first;
    return answer;
}

function firstLast6(arr) {
   if (arr[0] === 6 || arr[arr.length - 1] === 6) {
       return true;
   }else{
       return false;
   }
}

function has23(arr) {
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] == 2 || arr[i] == 3) {
           return true;
       }
   }
   return false;
}
function fix23(arr) {
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] == 2 && arr[i+1] == 3) {
        arr[i+1] = 0;
       }
   }
   return arr;
}
function countYZ(arr) {
   let num = 0;


   for (let i = 0; i < arr.length; i++) {
       if (arr[i] === "y" || arr[i] === "z" || arr[i] === "Y" || arr[i] === "Z") {
           if (i === arr.length - 1 || arr[i + 1] === " ") {
               num++;
           }
       }
   }


   return num;
}
function endOther(strI,strII) {


strI = strI.toLowerCase();
strII = strII.toLowerCase();


   for (let i=0; i < strI.length; i++) {
       if (strI.substring(1,i) === strII || strI.substring(i, strI.length) === strII) {
           return true;
       }
   }
   for (let i=0; i < strII.length; i++) {
       if (strII.substring(1,i) === strI || strII.substring(i, strII.length) === strI) {
           return true;
       }
   }
   return false;
}
function starOut(str) {
   let ans = ""
   for (let i=0; i < str.length; i++) {
       if (str[i] != "*" && str[i+1] != "*" && str[i-1] != "*") {
           ans += str[i]
       }
   }
   return ans;
}
function getSandwich(str) {
  let first = str.indexOf("bread");
  let last = str.lastIndexOf("bread");

  if (first !== -1 && last !== -1 && first !== last) {
    return str.substring(first + 5, last);
  }

  return "";
}
function canBalance(nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j <= i; j++) {
      leftSum += nums[j];
    }
    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }
    if (leftSum === rightSum) {
      return true;
    }
  }
  return false;
}
function countClumps(nums) {
  let count = 0;
  let clumped = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      if (!clumped) {
        count++;
        clumped = true;
      }
    } else {
      clumped = false;
    }
  }
  return count;
}
function sameEnds(str) {
    let ans = "";
    let a = 1;        
    let b = str.length;

    for (let i = 0; i < str.length / 2; i++) {
        let last = str.substring(b - a, b);
        let first = str.substring(0, a);
        if (first === last) {
            if(!( last.length > str.length / 2)) {
            ans = first;
            }
        }
        a++; 
    }
    return ans;
}
