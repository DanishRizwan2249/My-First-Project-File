let pattern = /^[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~\.]*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
let email = "example@example.com";
let result = pattern.test(email);
console.log(result); 

email = "example@example.";
result = pattern.test(email);
console.log(result); 
