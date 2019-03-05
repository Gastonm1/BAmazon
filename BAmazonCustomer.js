var mysql = require("mysql");
var inquirer = require("inquirer");

// Connection to sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Musketeers33!",
  database: "BAmazon_DB"
});

// Connect MySQL server & the sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
  initApp();
});

// Below is a function that uses inquirer to display prompts to the user for what action they should take
function initApp() {
  console.log("◇─◇──◇────◇────◇────◇────◇────◇─────◇──◇─◇");
  console.log("◇─◇──◇────◇────◇──BAmazon──◇────◇────◇─────◇");
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message:
        "Welcome to BAmazon!! We encourage you to check out what we have to offer!",
      choices: ["See all available items", "EXIT"]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "See all available items":
          productList();
          break;

        case "EXIT":
          console.log("Thanks for coming!");
          connection.end();
      }
    });
}

function productList() {
  var query = "SELECT product_name, price, stock_quantity FROM products";
  connection.query(query, function(err, res) {
    console.table(res);
    console.log("in run search");
    runSearch();
  });

  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "input",
        message: "Type the product name that you would like to purchase."
      })
      .then(function(answer) {
        console.log(answer.action);
        productQuantity(answer.action);
      });
  }
}

function productQuantity(answer) {
  connection.query(
    "SELECT * FROM products where product_name = ?",
    [answer],
    function(err, res) {
      console.table(res);
      units(res);
    }
  );

  function units(results) {
    inquirer
      .prompt({
        name: "action",
        type: "input",
        message: "How many would you like to buy from our inventory?"
      })
      .then(function(answer) {
        inquirer
          .prompt({
            name: "confirmation",
            type: "confirm",
            message:
              "You want to order " +
              answer.action +
              " units of this product from our inventory?",
            default: false
          })
          .then(function(confirmation) {
            if (answer.action <= results[0].stock_quantity) {
              connection.query(
                "UPDATE products SET stock_quantity = ? WHERE product_name = ?",
                [
                  results[0].stock_quantity - answer.action,
                  results[0].product_name
                ],
                function(err, res) {
                  if (err) {
                    throw err;
                  }
                }
              );
              connection.query(
                "SELECT * FROM products where product_name = ?",
                [results[0].product_name],
                function(err, res) {
                  console.table(res);
                }
              );
              console.log(`\nFulfilled Order!\n`);
              console.log(
                `You spent ${answer.action *
                  results[0].stock_quantity} dollars!`
                  
              )
              buyMore();
            } else {
              console.log("Insufficient Quantity!");
              console.log("Please try again!");
            }
          });
          function buyMore(){
            inquirer
            .prompt({
              name: "More monies?",
              type: "confirm",
              message:
                "\nDo you want to spend more monies?",
              default: false
            }).then(function(answer) {
              switch (answer.action) {
                case "Yes":
                  productList();
                  break;
        
                case "No":
                  console.log("Thanks for coming!");
                  connection.end();
              }
            });
            }
          }
      )
      }
  }

