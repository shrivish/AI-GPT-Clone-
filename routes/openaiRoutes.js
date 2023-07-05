const express = require("express");
const { summaryController, paragraphController, chatbotController,
    jsconverterController,
    scifiImageController} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/js-converter",jsconverterController);
router.post("/scifi-image", scifiImageController);
router.post("/chatbot", chatbotController);


module.exports = router;