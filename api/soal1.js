const supertest = require('supertest');
const assert = require('chai').expect;
var fs = require('fs');

describe("Get Soal 1", () => {
    it("Get Soal page 1", async () => {
      
      const res = await supertest("https://api.punkapi.com/")
        .get("v2/beers?page=2&per_page=1")
        .retry(3)
        .expect(200);
      console.log(res.body[0].name);
     
     assert(res.body[0].name).to.be.equal('Trashy Blonde')
    });


    it("Get Soal page 20", async () => {
      
        const res = await supertest("https://api.punkapi.com/")
          .get("v2/beers?page=2&per_page=20")
          .retry(3)
          .expect(200);
        console.log(res.body[0].name);
       
       assert(res.body[0].name).to.be.equal('Vice Bier')
      });


      it("Get Soal page 5", async () => {
      
        const res = await supertest("https://api.punkapi.com/")
          .get("v2/beers?page=2&per_page=5")
          .retry(3)
          .expect(200);
        console.log(res.body[0].name);
       
       assert(res.body[0].name).to.be.equal('Electric India')
      });
});