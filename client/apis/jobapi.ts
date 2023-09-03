import request from 'superagent'
import { Job, Company, Application, User } from '../../models/types.ts';

const rootUrl = '/api/v1/jobs'

export async function getJobs(): Promise<Job[]> {
    try {
        const res = await request.get(rootUrl);
        return res.body;
    } catch (error) {
        throw error;
    }
}


export async function addJob(job: Job): Promise<Job> {
    try {
        const res = await request.post(rootUrl).send(job);
        return res.body;
    } catch (error) {
        throw error;
    }
}

export async function deleteJob(id: number): Promise<void> {
    try {
        await request.delete(`${rootUrl}/${id}`);
    } catch (error) {
        throw error;
    }
}