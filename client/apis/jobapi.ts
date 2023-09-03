import request from 'superagent'
import { Job, JobData } from '../../models/types.ts';
// Import below when ready - Clearing for lint
// import  Company, Application, User from '../../models/types.ts'

const rootUrl = '/api/v1/jobs'

export async function getJobs(): Promise<Job[]> {
    const res = await request.get(rootUrl);
    return res.body;

}


export async function addJob(job: JobData): Promise<Job> {
    const res = await request.post(rootUrl).send(job);
    return res.body;

}

export async function deleteJob(id: number): Promise<void> {
    await request.delete(`${rootUrl}/${id}`);
}