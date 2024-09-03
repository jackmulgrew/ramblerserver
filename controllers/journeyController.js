const Journey = require('../models/journeyModel')
const mongoose = require('mongoose')


//get all journeys
const getJourneys = async (req, res) => {
    const user_id = req.user._id

    const journeys = await Journey.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(journeys)
}
// get a single journey
const getJourney = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such journey'})
    }
  
    const journey = await Journey.findById(id)
  
    if (!journey) {
      return res.status(404).json({error: 'No such journey'})
    }
  
    res.status(200).json(journey)
  }

//create new journey
const createJourney = async (req, res) => {
    const {start, startdate, startenddate, startfile, transport, departure, arrival, transportfile, end, enddate, endenddate, endfile} = req.body

    let emptyFields = []

    if(!start) {
      emptyFields.push('start')
    }
    if(!startdate) {
      emptyFields.push('startdate')
    }
    if(!startenddate) {
      emptyFields.push('startenddate')
    }
    if(!startfile) {
      emptyFields.push('startfile')
    }
    if(!transport) {
      emptyFields.push('transport')
    }
    if(!departure) {
      emptyFields.push('departure')
    }
    if(!arrival) {
      emptyFields.push('arrival')
    }
    if(!transportfile) {
      emptyFields.push('transportfile')
    }
    if(!end) {
      emptyFields.push('end')
    }
    if(!enddate) {
      emptyFields.push('enddate')
    }
    if(!endenddate) {
      emptyFields.push('endenddate')
    }
    if(!endfile) {
      emptyFields.push('endfile')
    }

    if(emptyFields.length > 0) {
      return res.status(400).json({ error:'Please fill in all the fields', emptyFields })
    }

        //add doc to db
    try {
      const user_id = req.user._id
        const journey = await Journey.create({start, startdate, startenddate, startfile, transport, departure, arrival, transportfile, end, enddate, endenddate, endfile, user_id})
        res.status(200).json(journey)
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

// delete a journey
const deleteJourney = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such journey'})
    }
  
    const journey = await Journey.findOneAndDelete({_id: id})
  
    if(!journey) {
      return res.status(400).json({error: 'No such journey'})
    }
  
    res.status(200).json(journey)
  }
  
  // update a journey
  const updateJourney = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such journey'})
    }
  
    const journey = await Journey.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!journey) {
      return res.status(400).json({error: 'No such journey'})
    }
  
    res.status(200).json(journey)
  }

module.exports = {
    getJourneys,
    getJourney,
    createJourney,
    deleteJourney,
    updateJourney
}