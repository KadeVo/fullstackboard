import connection from "./connection";
import { Job } from '../../models/types.ts';
// import { Company, Application, User } from '../../models/types.ts'; 


export async function getAllJobs(): Promise<Job[]> {
    return connection('jobs').select()
}

export async function addNewJob(newJob: Job): Promise<Job[]> {
    return connection('jobs')
        .insert({ ...newJob })
        .returning('*')
}


export async function deleteJobById(id: number) {
    return connection('jobs').delete().where({ id })
}