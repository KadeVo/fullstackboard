import request from 'superagent'
import { Job, Company, Application, User } from '../../models/types.ts';

const rootUrl = '/api/v1/jobs'

export function getJobs(): Promise<Job[]> {
    return request.get(rootUrl).then((res) => {
        return res.body
    })
}