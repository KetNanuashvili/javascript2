//N1
function sum1(...numbers) {
    let numberSum2 = 0;
    for (let item of numbers) {
        if(item>0){
            numberSum2 += item;
        }
    }
    return numberSum2;
}
let result1 =  sum1(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result1);
//N2
function sum(...numbers) {
    let numberSum = 0;
    for (let item of numbers) {
        numberSum += item;
    }
    return numberSum;
}

let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);
//N3
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
    }
    function printnameUser(obj) {
        if (obj.isloggedin) {
            return obj.firstname + " " + obj.lastname;
        }
        return false;
    }
    let result3 = printnameUser(user);
    console.log(result3); 

//N4
//function getMaxValue(...numbers){
    //let maxValue = 0;
    //for(let item of numbers){
        //if (item > maxValue){
            //maxValue = item;
        //}
        //return maxValue;
    //}
//}
//let result4 = getMaxValue(5,-3,9,-1,300,-200, 1000,50,14);
//console.log(result4);


function getMaxValue(numbers) {
    let maxValue = 0;
    for (let item of numbers) {
        if (item > maxValue) {
            maxValue = item;
        }
    }
    return maxValue;
}

console.log(getMaxValue([5,-3,9,-1,300,-200, 1000,50,14]));

//N5
let array = [1,2,4,10,34,5,7,87];
for (let i of array){
    if(i >0 && i <10){
   console.log(i);
   }
}

//N6
let numbers =[1,2,3,4,5,6,7,8,9,10];
for (let item of numbers) {
    if (item ===5) {
        break;
    }
    console.log(item);
}
