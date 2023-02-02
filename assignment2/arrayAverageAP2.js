const arrayAverage = (arr) => {
    let total = 0;
     for(let number of arr){
        total += number;
     }
     return total/arr.length;
}

let arr1 = [10, 15, 20, 25, 30];
console.log(arrayAverage(arr1));