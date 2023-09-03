import { useState, useEffect } from 'react';
import { getJobs, deleteJob } from '../apis/jobapi';
import { Job } from '../../models/types.ts';


function JobsList() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        getJobs()
            .then((data) => {
                setJobs(data);
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
            });
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteJob(id);
            setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    return (
        <div>
            <h1>Jobs List</h1>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>Location: {job.location}</p><br></br>
                        <p>Job Description: <br></br><br></br>{job.description}</p><br></br>
                        <button onClick={() => handleDelete(job.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobsList;