import { useState, useEffect } from 'react';
import { getJobs, deleteJob } from '../apis/jobapi';
import { Job } from '../../models/types.ts';


function JobsList() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        getJobs().then((data) => {
            setJobs(data);
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
            <h2>Jobs List</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <button onClick={() => handleDelete(job.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobsList;