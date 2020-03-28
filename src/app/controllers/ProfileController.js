const Incidents = require("../models/Incidents");

class ListIncidentsOngController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await Incidents.findAllIncidentsOng(ong_id);

    return res.json(incidents);
  }
}

module.exports = new ListIncidentsOngController();
