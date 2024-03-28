#! /usr/bin/env node 

import inquirer from "inquirer";

let my_balance = 15000; // Initialize the account balance

let my_atm_pin = 1867; // Initialize the ATM PIN

// Prompt the user for their ATM PIN
let pin_answer = await inquirer.prompt({
  name: "pin",
  message: "Please enter your ATM Pin:",
  type: "number", // Use type "number" for PIN input
});

// Check if the entered PIN is correct
if (pin_answer.pin === my_atm_pin) {
  console.log("You have entered Correct ATM PIN");

  // Prompt the user to select the transaction type
  let operation_answer = await inquirer.prompt([
    {
      name: "operation",
      message: "Select operation for transaction",
      type: "list",
      choices: ["Cash withdrawl", "Fast cash", "Balance inquiry"],
    },
  ]);

  // Check if the requested amount is less than or equal to the balance

  if (operation_answer.operation === "Cash withdrawl") {
    let amount_answer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount for transaction",
        type: "number",
      },
    ]);

    if (amount_answer.amount <= my_balance) {
      let Balance = my_balance - amount_answer.amount;
      console.log(`The remaining balance is ${Balance}`);
    } else {
      console.log(`You have insufficient balance`);
    }
  }

  // Fast cash logic (with pre-defined amounts for efficiency)
  else if (operation_answer.operation === "Fast cash") {
    let fast_cash_answer = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["1000", "5000", "10000", "20000"],
      },
    ]);
    if (fast_cash_answer.amount <= my_balance) {
      let balance2 = my_balance - fast_cash_answer.amount;
      console.log(`Your remaining balance is ${balance2}`);
    } else {
      console.log(`You have insufficient balance`);
    }
  }

  // Balance inquiry logic (simple output for efficiency)
  else if (operation_answer.operation === "Balance inquiry") {
    console.log(my_balance);
  }
} else {
  console.log(`You have entered an invalid ATM Pin`);
}
