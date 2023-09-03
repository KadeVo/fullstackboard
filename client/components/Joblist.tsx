import { useEffect, useState } from 'react';
import { getJobs } from '../apis/jobapi.ts';
import { Job } from '../../models/types.ts';

function JobsList() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        getJobs()
            .then((data) => {
                setJobs(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <h2>Jobs List</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobsList;