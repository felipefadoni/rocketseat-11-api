const connection = require("../../database/connection");

class Incidents {
  async listAllIncidents() {
    return await connection("incidents").select("*");
  }

  async findIncident(colunms, id) {
    return await connection("incidents")
      .where("id", "=", id)
      .select(colunms)
      .first();
  }

  async insertNewIncident(title, description, value, ong_id) {
    const insert = await connection("incidents")
      .insert({
        title,
        description,
        value,
        ong_id
      })
      .returning(["id"]);

    return insert[0];
  }

  async deleteIncident(ong_id, id) {
    return await connection("incidents")
      .where("id", id)
      .where("ong_id", ong_id)
      .delete();
  }
}

module.exports = new Incidents();
