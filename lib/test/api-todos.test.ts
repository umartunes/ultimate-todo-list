import * as request from "supertest";
import App from '../app';


//Test either todos are coming or not
describe("GET todos test", () => {
  it("should return 200 OK if user is authenticated", () => {
    return request(App).get("/api/todos/")
      .expect(200);
  });
});


//Test single todo are coming or not
describe("GET single todo test", () => {
  it("should return 200 OK if user is authenticated", () => {
    return request(App).get("/api/todos/5ba0b338622c260b9881c58e")
      .expect(200);
  });
});

//Test insert todo are coming or not
describe("POST single todo test", () => {
  it("should return 200 OK if user is authenticated", () => {
    return request(App)
    .post("/api/todos")
    .send(
      {
        title: "testing",
        palce:"Fsd",
        discription: "at 1 Pm!"
    })
      .expect(200);
  });
});

//Test update todo are coming or not
describe("PUT single todo test", () => {
  it("should return 200 OK if user is authenticated", () => {
    return request(App)
    .put("/api/todos/5ba0b338622c260b9881c58e")
    .send(
      {
        title: "testing",
        palce:"Fsd",
        discription: "at 1 Pm!"
    })
      .expect(200);
  });
});


//Test Delete todo are coming or not
describe("DELETE single todo test", () => {
  it("should return 200 OK if user is authenticated", () => {
    return request(App)
    .delete("/api/todos/5ba0b338622c260b9881c58e")
      .expect(200);
  });
});
