import * as request from "supertest";
import {App} from '../app';


//test v1.0 todo route is working or not
describe("GET todo test", () => {
  it("should return 200 OK", () => {
    return request(App).get("/todo/api/v1.0/")
      .expect(200);
  });
});


//test v1.0 todo route to get a one single item
describe("GET todo test", () => {
  it("should return 200 OK", () => {
    return request(App).get("/todo/api/v1.0/tasks?id=5b9feb1a9e6b212e30aa68e7")
      .expect(200);
  });
});


//test v1.0 todo route to get all items
describe("GET todo test", () => {
  it("should return 200 OK", () => {
    return request(App).get("/todo/api/v1.0/tasks")
      .expect(200);
  });
});


//test post signup req in user route
describe('POST /task restful Api', function() {
  it('responds with json', function(done) {
    request(App)
      .post('/todo/api/v1.0/tasks')
      .send(
          {
            title: "sleep",
            discription: "at 1 Pm!",
            done: false
        })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


//test post signup req in user route
describe('Put /tasks restful Api', function() {
  it('responds with json', function(done) {
    request(App)
      .put('/todo/api/v1.0/tasks?id=5b9feb1a9e6b212e30aa68e7')
      .send(
          {
            title: "sleep plan",
            discription: "at 1pm",
            done: false
        })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


//test v1.0 todo delete
describe("GET todo test", () => {
    it("should return 200 OK", () => {
      return request(App).delete("/todo/api/v1.0/tasks?id=5b9feb1a9e6b212e30aa68e7")
        .expect(200);
    });
  });