const express = require("express");
const createReferralController = require("../Controllers/createReferralController");
const router = express.Router();

router.post("/createReferral", createReferralController);
