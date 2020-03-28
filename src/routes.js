const express = require("express");

const routes = express.Router();

const OngsController = require("./app/controllers/OngsController");
const IncidentsController = require("./app/controllers/IncidentsController");
const ProfileController = require("./app/controllers/ProfileController");
const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

// ONGs
routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.store);

// Incidents
routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.delete);

// Profile Ongs
routes.get("/profile", ProfileController.index);

module.exports = routes;
