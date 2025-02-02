// Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system.
let prices = [20,17,25,15,12];
prices.push(21);
prices.shift();
console.log("Prices: " + prices);

// Task 2 Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities.
let orders = [43,27,40,34,38];
orders[2] += 5; //adding 5 orders to the third item in the array

let sum = 0;
for (let i = 0; i < orders.length; i++) {     
    sum += orders[i];
}
//this for loop works by calculating the sum of all items in the array. after running, i++ moves the loop on to the next item.
// i < orders.length repeats the process if there are more items left in the array. sum += orders[i] is how the summing is done

console.log("List of orders: " + orders);
console.log("Total number of orders: " + sum);

// Task 3: Employee Performance Tracking Scenario: HR System You are tracking employee performance data.
let employee = {
    name: "casey",
    role: "manager",
    performanceScore: 95,
    isActive: true
};
employee.performanceScore = 90;
employee.promotionEligible = false;
console.log("Employee information: ", employee); 

// Task 4: Customer Feedback Records Scenario: Feedback Management You are collecting customer feedback data.
let feedback = [{ 
    customerName: "elise",
    feedbackText: "Good support, but some delays",
    rating: 85
},
{
    customerName: "albert",
    feedbackText: "No issues",
    rating: 100
},
{
    customerName: "john",
    feedbackText: "John approves",
    rating: 95
}
];
feedback.push({ // adding a new object the array with .push (forgot to do this on commit 4)
    customerName: "aj",
    feedbackText: "10 big booms",
    rating: 98
});
console.table(feedback); //Decided to do console.table rather than console.log so the responses don't appear as {...}

// Task 5: Inventory Management System Scenario: Stock Analysis You are developing a system to track inventory details.
let inventory =  {
    itemName: "Piano",
    stockCount: 15,
    price: 899
};
inventory.calculateTotalValue = function () {return this.stockCount * this.price;} //creating the function that calculates total value
console.log("Inventory info:", inventory)
console.log("Total inventory value:", inventory.calculateTotalValue());