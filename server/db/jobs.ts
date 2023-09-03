import connection from "./connection";
import { Job, Company, Application, User } from '../../models/types.ts';


export async function getAllJobs(): Promise<Job[]> {
    return connection('jobs').select()
}