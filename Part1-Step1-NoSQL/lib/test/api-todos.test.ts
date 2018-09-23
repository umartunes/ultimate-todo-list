import request from "supertest";
import server from '../app';


//Test either todos are coming or not
describe("GET todos list test", () => {
  it("should return 200 OK", () => {
    return request(server).get("/api/todos/")
      .expect(200);
  });
});
//Test single todo are coming or not
describe("GET single todo test", () => {
  it("should return 200 OK ", () => {
    return request(server).get("/api/todos/5ba0b338622c260b9881c58e")
      .expect(200);
  });
});

//Test insert todo are coming or not
describe("POST single todo test", () => {
  it("should return 200 OK", () => {
    return request(server)
      .post("/api/todos")
      .send(
        {
          title: "testing",
          place: "Fsd",
          description: "at 1 Pm!"
        })
      .expect(200);
  });
  //Test update todo are coming or not
  describe("PUT single todo test", () => {
    it("should return 200 OK", () => {
      return request(server)
        .put("/api/todos/5ba0b338622c260b9881c58e")
        .send(
          {
            title: "testing",
            place: "Fsd",
            description: "at 1 Pm!"
          })
        .expect(200);
    });
  });

  //Test Delete todo are coming or not
  describe("DELETE single todo test", () => {
    it("should return 200", () => {
      return request(server)
        .delete("/api/todos/5ba0b338622c260b9881c58e")
        .expect(200);
    });
  });
});


