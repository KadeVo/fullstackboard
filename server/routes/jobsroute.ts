import { Router } from 'express'
import * as db from '../db/jobs.ts'


const router = Router()

router.get('/', async (req, res) => {
    try {
        const allJobs = await db.getAllJobs()
        res.json(allJobs)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong' })
    }
})