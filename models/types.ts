export interface Job {
    id: number;
    title: string;
    location?: string;
    description: string;
    company_id: number;

}

export interface JobData {
    title: string;
    location?: string;
    description: string;
}

export interface User {
    id: number;
    username: string;
    email: string;

}


export interface Application {
    id: number;
    job_id: number;
    user_id: number;

}

export interface Company {
    id: number;
    name: string;
    industry?: string;
}