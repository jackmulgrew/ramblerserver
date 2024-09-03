const express = require('express')
const {
    createJourney, 
    getJourneys,
    getJourney,
    deleteJourney,
    updateJourney
} = require('../controllers/journeyController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all journey routes
router.use(requireAuth)

// this is to get all journeys
router.get('/', getJourneys)

//GET a single journey
router.get('/:id', getJourney)

//POST a new journey
router.post('/', createJourney)

//DELETE a journey
router.delete('/:id', deleteJourney)

//UPDATE a journey
router.patch('/:id', updateJourney)



module.exports = router  