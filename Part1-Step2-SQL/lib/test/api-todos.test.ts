import request from "supertest";
import server from '../app';


//Test either todos is coming from post-gre-sql
describe("GET todos test", () => {
  it("should return 200 OK if route Success ", () => {
    return request(server).get("/api/todos/")
      .expect(200);
  });
});

//Test either todos insert in post-gre-sql
describe('POST /task restful Api', function () {
  it('responds with json', function (done) {
    request(server)
      .post('/api/todos/')
      .send(
        {
          title: "test for inserting 3",
          place: "e lab",
          description: "test NO# 3"
        })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

//test todo route to get a one single todo
describe("GET Onetodo test", () => {
  it("should return 200 OK", () => {
    return request(server).get("/api/todos/5")
      .expect(200);
  });
});


//test Update  req in todos route
describe('Put /tasks restful Api', function () {
  it('responds with json', function (done) {
    request(server)
      .put('/api/todos/5')
      .send(
        {
          title: "test put route",
          description: "at 1pm",
          place: "e lab put route",
        })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

//test todo delete
describe("DELETE todo test", () => {
  it("should return 200 OK", () => {
    return request(server).delete("/api/todos/10")
      .expect(200);
  });
});
