const Incidents = require("../models/Incidents");

class IncidentsController {
  async index(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const offset = page <= 1 ? 0 : (page - 1) * limit;

    const incidents = await Incidents.listAllIncidents(limit, offset);
    const [totalIncidents] = await Incidents.totalAllIncidents();

    const totalPages = Math.ceil(totalIncidents.count / limit);
    const nextPage =
      parseInt(page) + 1 <= totalPages ? parseInt(page) + 1 : null;
    const previousPage = parseInt(page) - 1 >= 1 ? parseInt(page) - 1 : null;

    const responseData = {
      correntPage: parseInt(page),
      total: parseInt(totalIncidents.count),
      totalPages: totalPages,
      nextPage,
      previousPage,
      incidents
    };

    return res.json(responseData);
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
