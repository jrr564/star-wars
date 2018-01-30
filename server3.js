// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}, {
  routeName: "r2d2",
  name: "R2D2",
  role: "Droid",
  age: 66,
  forcePoints: 0
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
app.get("/api/:hhhhh?", function(req, res) {
  // What does this code do?
  var chosen = req.params.hhhhh;

  if (chosen) {
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < hhhhhh.length; i++) {
      if (chosen === hhhhh[i].routeName) {
        return res.json(hhhhh[i]);
      }
    }

    return res.send("No character found");
  }

  // What does this code do?
  return res.json(hhhhh);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
