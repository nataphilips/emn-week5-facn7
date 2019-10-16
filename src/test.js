var test = require("tape");
const { filter } = require("../public/index.js");

test("Testing Tape is working", function(t) {
  var arr = [{ title: "1" }, { title: "2" }];
  t.equal(filter("1", arr), ["1"], "One should equal one");
  t.end();
});
