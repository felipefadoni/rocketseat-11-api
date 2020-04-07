const request = require("supertest");
const app = require("../../src/app");
const connection = require('../../src/database/connection')

describe("ONG", () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "Ongs Teste Web Fadoniasda sda sdasd ",
      email: "felipe@webfadoni.comas",
      whatsapp: "12996632821",
      city: "São josé dos campos",
      email: "asldkalsd@globo.com",
      uf: "SP",
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
  
});
