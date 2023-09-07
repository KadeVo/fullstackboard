import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getJobs, deleteJob } from '../apis/jobapi';
import { Job } from '../../models/types.ts';

function JobsList() {
    const { data, isLoading, error } = useQuery(['jobs'], getJobs);
    const queryClient = useQueryClient();

    const handleDelete = async (id: number) => {
        try {
            console.log('Deleting job with ID:', id);
            await deleteMutation.mutateAsync(id);
            console.log('Job deleted successfully.');
            queryClient.invalidateQueries(['jobs']);
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    const deleteMutation = useMutation(deleteJob, {
        onSuccess: async () => {
            console.log('Delete mutation success.');
            const currentJobs: Job[] | undefined = queryClient.getQueryData([
                'jobs',
            ]);
            console.log('Current jobs:', currentJobs);
        },
    });

    if (error) {
        return <div>Something went wrong</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Jobs List</h1>
            <ul>
                {data?.map((job) => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>Location: {job.location}</p><br />
                        <p>Job Description: <br /><br />{job.description}</p><br />
                        <button onClick={() => handleDelete(job.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobsList;