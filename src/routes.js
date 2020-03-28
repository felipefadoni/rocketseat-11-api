const express = require("express");

const routes = express.Router();

const OngsController = require("./app/controllers/OngsController");
const IncidentsController = require("./app/controllers/IncidentsController");

// ONGs
routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.store);

// Incidents
routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
