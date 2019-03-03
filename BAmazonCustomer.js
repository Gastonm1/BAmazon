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

// connection.query("SELECT * FROM products", function (err, data){
//     console.log(err, data);

// })    <-- DO NOT NEED=====================================================

// Below is a function that uses inquirer to display prompts to the user for what action they should take
function initApp() {
  console.log("◇─◇──◇────◇────◇────◇────◇────◇─────◇──◇─◇");
  console.log("◇─◇──◇────◇────◇──BAmazon──◇────◇────◇─────◇");
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message:
        "Welcome to BAmazon!! Select below to see what we have to offer!",
      choices: ["See all available items", "EXIT"]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "See all available items":
          productList();
          break;

        case "EXIT":
          connection.end();
      }
    });
}

function productList() {
  var query = "SELECT product_name, price, stock_quantity FROM products";
  connection.query(query, function(err, res) {
    console.table(res);
    runSearch();
  });

  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "input",
        message: "Which product would you like to purchase?"
      })
      .then(function(answer) {
        productQuantity();
        // inquirer.prompt({
        //   name: "confirmation",
        //   type: "confirm",
        //   message: "You want to purchase a " + answer.action + " ?",
        //   default: false})

        //   if (answer.default = "Yes") {
        //       productQuantity();
        //   } else
        //         connection.end();
        //   })
        // };
      })
    }
  };

  function productQuantity(){
    connection.query("SELECT * FROM products where `item_id` = 4", function(err, res) {
      console.table(res);
      units();
    });

  function units(){
        inquirer
        .prompt({
          name: "action",
          type: "input",
          message: "How many would you like to buy from inventory?"
        }).then(function(answer){
          inquirer.prompt({
              name: "confirmation",
              type: "confirm",
              message: "You want to order " + answer.action + " units of this product from our inventory?",
              default: false})
        }
  )}
};


       