const Incidents = require("../models/Incidents");

class IncidentsController {
  async index(req, res) {
    const incidents = await Incidents.listAllIncidents();
    return res.json(incidents);
  }

  async store(req, res) {
    const ong_id = req.headers.authorization;
    const { title, description, value } = req.body;

    const newIncident = await Incidents.insertNewIncident(
      title,
      description,
      value,
      ong_id
    );

    res.json(newIncident);
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const findIncident = await Incidents.findIncident(["ong_id"], id);

    if (!findIncident)
      return res.status(400).json({ message: "Incidente não foi localizado." });

    if (findIncident.ong_id !== ong_id)
      return res
        .status(401)
        .json({ message: "Você não tem permissão para deletar." });

    await Incidents.deleteIncident(ong_id, id);

    return res.status(204).send();
  }
}

module.exports = new IncidentsController();
