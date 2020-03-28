const connection = require("../../database/connection");

class Ongs {
  async listAllOngs() {
    return await connection("ongs").select("*");
  }

  async findOng(colunms, id) {
    return await connection("ongs")
      .where("id", id)
      .select(colunms)
      .first();
  }

  async insertNewOng(id, name, email, whatsapp, city, uf) {
    return await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
  }
}

module.exports = new Ongs();
