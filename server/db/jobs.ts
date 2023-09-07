import connection from "./connection";
import { Job } from '../../models/types.ts';


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

export async function deleteApplicationsByJobId(jobId: number) {
    try {
        await connection('applications').where({ job_id: jobId }).delete();
        return { success: true, message: 'Applications deleted successfully' };
    } catch (error) {
        console.error('Error deleting applications by job ID:', error);
        throw error;
    }
}