import chai from "chai";
import request from "supertest";

const expect = chai.expect;
const currentMovieId = 529203 ;
const currentMovieTitle = "The Croods: A New Age";

let api;
let token;

describe("Upcoming endpoint", () => {
  beforeEach(function(done) {
    this.timeout(6000)
    try {
      api = require("../../../../index");
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
    setTimeout(()=>{
      request(api)
      .post("/api/users")
      .send({
        "username":"user1",
        "password":"test1"
      })
      .end((err,res) =>{
        token= res.body.token;
        done();
      });
    },4000)
  });

  afterEach(() => {
    api.close(); 
    delete require.cache[require.resolve("../../../../index")];
  });
  describe("GET /upcoming ", () => {
    it("should return 20 upcoming movies and a status 200", (done) => {
      request(api)
        .get("/api/upcoming")
        .set("Accept", "application/json")
        .set("Authorization",token)
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.equal(20);
          done();
        });
    });
  });

  describe("GET /upcoming/:id", () => {
      it("should return the matching movie", () => {
        return request(api)
          .get(`/api/upcoming/${currentMovieId}`)
          .set("Accept", "application/json")
          .set("Authorization", token)
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("title", currentMovieTitle);
          });
      });
  });
  
});