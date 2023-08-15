const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController'); 

router.post('/events', eventController.createEvent);

router.get('/getevents', eventController.getAllEvents);

router.get('/getevent/:id', eventController.getEventById);

router.put('/updateevent/:id', eventController.updateEvent);

router.delete('/deleteevent/:id', eventController.deleteEvent);

module.exports = router;
