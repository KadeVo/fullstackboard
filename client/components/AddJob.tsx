import { ChangeEvent, FormEvent, useState } from 'react';
import { addJob } from '../apis/jobapi';
import { Job, JobData } from '../../models/types.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const initialFormData = {
    title: '',
    location: '',
    description: ''
}

export default function JobForm() {
    const [form, setForm] = useState<JobData>(initialFormData);
    const queryClient = useQueryClient();

    const jobMutation = useMutation(addJob, {
        onSuccess: async (newJob) => {
            const currentJobs: Job[] | undefined = queryClient.getQueryData(['job']);
            if (currentJobs) {
                queryClient.setQueryData(['job'], [...currentJobs, newJob]);
            } else {
                queryClient.invalidateQueries(['job']);
            }
        }
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const newForm = { ...form, [name]: value };
        setForm(newForm);
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        jobMutation.mutate(form);
        setForm(initialFormData);
    }

    if (jobMutation.isLoading) {
        return <div>Adding your Job listing</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Job</button>
        </form>
    );
}