import * as request from "supertest";
import App from '../app';


//test v1.0 todo route is working or not
describe("GET todo test", () => {
  it("should return 200 OK", () => {
    return request(App).get("/api/todos/")
      .expect(200);
  });
});

