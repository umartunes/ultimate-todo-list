import request from "supertest";
import server from '../app';


//Test either todos are coming or not
describe("GET todos list test", () => {
  it("should return 200 OK", () => {
    return request(server).get("/api/todos/")
      .expect(200);
  });
});

