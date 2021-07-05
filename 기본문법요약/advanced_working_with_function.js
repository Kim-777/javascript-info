console.log('======================================================== 1. Recursion and stack ========================================================');


console.log('======================================================== 2. Rest parameters and spread syntax ========================================================');


function sumAll(...args) {
    let sum = 0;

    for(let arg of args) sum += arg;

    return sum;
}

// 나머지 매개변수는 항상 파라미터 마지막에 위치하고 있어야 합니다.

console.log(sumAll(1,2,3,4));

// spread 문법은 이터러블 객체의 요소를 나열해주는 것 입니다. 꼭 배열이 아니라 이터러블 객체라는 것 알아두기.
let arrayForSpread = [1, 2, 3, 4 ,5];
console.log(Math.max(...arrayForSpread));



console.log('======================================================== 3. Variable scope, closure ========================================================');
// 자바스크립트는 함수 지향 언어. 생성한 함수를 다른 함수에 인수로 넘길 수 있으며, 생성된 곳이 아닌 곳에서 함수를 호출할 수도 있기 때문입니다.
// 자바 명세에는 렉시컬 환경이라는 엔진이 사용하는 객체가 존재.


console.log('======================================================== 4. The old "var" ========================================================');


console.log('======================================================== 5. Global object ========================================================');


console.log('======================================================== 6. Function object, NFE ========================================================');


console.log('======================================================== 7. new ========================================================');


console.log('======================================================== 8. setTimeout, setInterval ========================================================');


console.log('======================================================== 9. Decorator, forwarding, call/apply ========================================================');


console.log('======================================================== 10. Function binding ========================================================');


console.log('======================================================== 11. Arrow Functions revisited ========================================================');