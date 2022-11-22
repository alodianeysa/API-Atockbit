const supertest = require('supertest');
const assert = require('chai').expect;
var fs = require('fs');

describe("Get Soal 2", () => {
    it("Get Soal all page", async () => {
      
      const res = await supertest("https://api.punkapi.com/")
        .get("v2/beers")
        .retry(3)
        .expect(200);
      console.log(res.body[0].name);
     
     assert(res.body[0].name).to.be.equal('Buzz')
    });

});