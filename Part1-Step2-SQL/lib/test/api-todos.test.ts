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

describe('POST /task restful Api', function() {
  it('responds with json', function(done) {
    request(server)
      .post('/api/todos/')
      .send(
          {
            title: "test for inserting",
            place: "e lab",
            description: "at 11 Pm!"
            
        })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

