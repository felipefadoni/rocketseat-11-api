const express = require("express");

const { celebrate, Segments, Joi } = require("celebrate");

const ValidatorRoutes = require("./app/validators/ValidatorsRoutes");

const routes = express.Router();

const OngsController = require("./app/controllers/OngsController");
const IncidentsController = require("./app/controllers/IncidentsController");
const ProfileController = require("./app/controllers/ProfileController");
const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

// ONGs
routes.get("/ongs", OngsController.index);
routes.post("/ongs", ValidatorRoutes.createOngs(), OngsController.store);

// Incidents
routes.get(
  "/incidents",
  ValidatorRoutes.listAllIncidents(),
  IncidentsController.index
);

routes.post(
  "/incidents",
  ValidatorRoutes.createIncidentOng(),
  IncidentsController.store
);

routes.delete(
  "/incidents/:id",
  ValidatorRoutes.deleteIncidentOng(),
  IncidentsController.delete
);

// Profile Ongs
routes.get("/profile", ValidatorRoutes.perfilOng(), ProfileController.index);

module.exports = routes;
