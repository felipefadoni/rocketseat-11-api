const Ongs = require("../models/Ongs");

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ong = await Ongs.findOng(["name"], id);

    if (!ong) return res.status(400).json({ message: "Ong não localizada." });

    return res.json(ong);
  }
}

module.exports = new SessionController();
