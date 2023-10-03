import express from 'express'
import * as db from '../db/jobs.ts'

const router = express.Router()

router.get('/jobs', async (req, res) => {
  try {
    const allJobs = await db.getAllJobs()
    res.json(allJobs)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/jobs', async (req, res) => {
  const { searchTerm, location } = req.query
  const sanitizedSearchTerm = typeof searchTerm === 'string' ? searchTerm : ''
  const sanitizedLocation = typeof location === 'string' ? location : ''
  try {
    const filteredJob = await db.getFilteredJob(
      sanitizedSearchTerm,
      sanitizedLocation
    )
    res.json(filteredJob)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
})

router.post('/jobs', async (req, res) => {
  try {
    const newJob = req.body
    console.log(newJob)
    const addingJob = await db.addNewJob(newJob)
    res.json(addingJob)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/jobs/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteApplicationsByJobId(id)
    const deleteJobResult = await db.deleteJobById(id)
    res.json(deleteJobResult)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
