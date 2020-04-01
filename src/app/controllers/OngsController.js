const crypto = require("crypto");

const Ongs = require("../models/Ongs");

class OngsController {
  async index(req, res) {
    const ongs = await Ongs.listAllOngs();
    return res.json(ongs);
  }

  async store(req, res) {
    try {
      const { name, email, whatsapp, city, uf } = req.body;

      const id = crypto.randomBytes(4).toString("HEX");

      await Ongs.insertNewOng(id, name, email, whatsapp, city, uf);

      return res.json({ id });
    } catch (error) {
      if (error.constraint === "ongs_email_unique")
        return res
          .status(400)
          .json({ msgError: "O E-mail informado já está cadastrado." });

      if (error.constraint === "ongs_whatsapp_unique")
        return res
          .status(400)
          .json({ msgError: "O Whatsapp informado já está cadastrado." });

      return res.status(400).json({
        msgError:
          "Ocorreu um problema ao salvar, entre em contato com o suporte técnico.",
        errorData: JSON.stringify(error)
      });
    }
  }
}

module.exports = new OngsController();
