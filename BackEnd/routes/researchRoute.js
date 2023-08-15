const express = require('express');
const router = express.Router();
const researchController = require('../controller/researchController'); 

router.post('/researches', researchController.createResearch);

router.get('/getresearches', researchController.getAllResearches);

router.get('/getresearch/:id', researchController.getResearchById);

router.put('/updateresearch/:id', researchController.updateResearch);

router.delete('/deleteresearch/:id', researchController.deleteResearch);

module.exports = router;
