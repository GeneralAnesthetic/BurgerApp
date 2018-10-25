var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// the problem is here..... all the console logs from the POST in burger.js are firing
router.get("/burgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(
    "---In Delete --- setting the id from req.params.id, from delete code, to req.params.id: ",
    condition
  );
  burger.delete(condition, function(result) {
    console.log("result from delete AJAX: ", result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // res.redirect("/");
      res.status(200).end();
    }
  });
});
//Webpack organizes dependenc
// ? - makes the route specifier optional
// anything proceded by a colon is going to return program specific data, req.params returns the variables/program specific data entered in by the user
// a return breaks out of whatever function it is in, and be sure that whatever you want to loop through, or even work through, with a function, a return doesn't necessarily have to be a loop, happens BEFORE return is used
// res.renders, res.sends, res.jsons are all terminal, meaning that they can only be hit one at a time depending upon what url aspects are matched by the user, or rather, they all automatically include a res.end()

// THE PROBELM IS HERE! REQ.PARAMS IS FOR URL INFO, REQ.BODY IS FOR OBJECT INFO
router.post("/new", function(req, res) {
  // var condition = "id = " + req.params.id;
  // Send back the ID of the new quote
  console.log(
    "added-burger sent to/received by server & req.params: ",
    req.body,
    req.params
  );
  // res.json({ id: result.insertId });
  burger.create(
    ["name", "devoured"],
    [req.body.name.toString(), !!+req.body.devoured],
    function(result) {
      // result.toString();
      console.log(result, "POST is RECEIVING DATA");
      // Send back the ID of the new burger
      // res.redirect("/burgers");
      res.json({ id: result.insertId });
    }
  );
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  // req.body.id;
  // req.body.devoured;
  console.log("devoured", !req.body.devoured);

  burger.update({ devoured: !req.body.devoured }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.json(result);
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
