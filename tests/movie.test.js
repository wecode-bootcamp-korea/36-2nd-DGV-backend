const request = require("supertest");

const { createApp } = require("../app");
const { MySQLDatabase } = require("../models/database");

describe("movie title call test", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await MySQLDatabase.initialize();
  });

  afterAll(async () => {
    await MySQLDatabase.destroy();
  });

  test("Success: Title Call", async () => {
    await request(app)
      .get("/movies") 
      .expect(200);
  });
});

describe('movie list by orderBase call test', ()=>{
    let app;

    beforeAll(async()=>{
        app = createApp();
        await MySQLDatabase.initialize();
    });

    afterAll(async()=>{
        await MySQLDatabase.destroy();
    });

    test("Success: orderBy Call",async()=>{
        await request(app)
        .get("/movies/list")
        .query({orderBase : "opening_date"})
        .expect(201)
    })

    test("Failed: orderBy call", async()=>{
        await request(app)
        .get("movies/list")
        .query()
        .expect(400)
        .expect({message: "query_notfound"})
    
    })

    // test("Failed: invalid input", async()=>{
    //     await request(app)
    //     .get("movies/list")
    //     .query( )
    //     .expect(500)
    //     .expect({message: "INVALID_DATA_INPUT"})
    // })

})
