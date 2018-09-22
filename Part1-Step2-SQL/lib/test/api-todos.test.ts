import request from "supertest";
import server from '../app';


//Test either todos is coming from post-gre-sql
describe("GET todos test", () => {
  it("should return 200 OK if route Success ", () => {
    return request(server).get("/api/todos/")
      .expect(200);
  });
});

