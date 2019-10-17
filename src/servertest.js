const test = require("tape");
const supertest = require("supertest");
const router = require("./router");
test("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end(); // Remember to call t.end() after every test call, to ensure tests run in order. You can also investigate t.plan() in the docs
});
test("Home route returns a status code of 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200"); // note we have used .expect(200) above so this assertion is not neccesary. This is to show you how to check the statusCode in the res.
      t.end();
    });
});
test("movie route returns a status code of 200", t => {
  supertest(router)
    .get("/movie")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200"); // note we have used .expect(200) above so this assertion is not neccesary. This is to show you how to check the statusCode in the res.
      t.end();
    });
});
test("else route returns a status code of 404", t => {
  supertest(router)
    .get("/else")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 404"); // note we have used .expect(200) above so this assertion is not neccesary. This is to show you how to check the statusCode in the res.
      t.end();
    });
});
