//Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system.
let prices = [5,10,15,20,25]; // declared an array with 5 numerical values
prices.push(30); //added new price to the array
prices.shift();//Removed the first price from the array

console.log('Prices', prices); //Logged the updated price list to the console

// Task 2: Modifying Customer Orders Scenario
let orders = [10,20,30,40,50];// Declared  array orders with  five numerical values
orders[2] +=5;// Increased the third order by 5
let total_orders = orders.reduce((total,number) => total + number, 0); //sums all numerical variable in the array

console.log(orders);//Logged the updated array. 
console.log(total_orders); // logged the total order count to the console.
