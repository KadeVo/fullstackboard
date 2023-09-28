import { ChangeEvent, FormEvent, useState } from 'react'
import { addJob } from '../apis/jobapi'
import { Job, JobData } from '../../models/types.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const initialFormData = {
  title: '',
  location: '',
  description: '',
}

export default function JobForm() {
  const [form, setForm] = useState<JobData>(initialFormData)
  const queryClient = useQueryClient()

  const jobMutation = useMutation(addJob, {
    onSuccess: async (newJob) => {
      const currentJobs: Job[] | undefined = queryClient.getQueryData(['job'])
      if (currentJobs) {
        queryClient.setQueryData(['job'], [...currentJobs, newJob])
      } else {
        queryClient.invalidateQueries(['job'])
      }
    },
  })

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    jobMutation.mutate(form)
    setForm(initialFormData)
  }

  if (jobMutation.isLoading) {
    return <div className="text-center">Adding your Job listing</div>
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Job
      </button>
    </form>
  )
}
