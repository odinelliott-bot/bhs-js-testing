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