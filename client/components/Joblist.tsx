import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getJobs, deleteJob } from '../apis/jobapi'
import { Job } from '../../models/types.ts'

function JobsList() {
  const { data, isLoading, error } = useQuery(['jobs'], getJobs)
  const queryClient = useQueryClient()

  const handleDelete = async (id: number) => {
    try {
      console.log('Deleting job with ID:', id)
      await deleteMutation.mutateAsync(id)
      console.log('Job deleted successfully.')
      queryClient.invalidateQueries(['jobs'])
    } catch (error) {
      console.error('Error deleting job:', error)
    }
  }

  const deleteMutation = useMutation(deleteJob, {
    onSuccess: async () => {
      console.log('Delete mutation success.')
      const currentJobs: Job[] | undefined = queryClient.getQueryData(['jobs'])
      console.log('Current jobs:', currentJobs)
    },
  })

  if (error) {
    return <div>Something went wrong</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Jobs List</h1>
      <ul>
        {data?.map((job) => (
          <li
            key={job.id}
            className="mb-6 p-4 border border-gray-300 rounded-md"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="mb-2">Location: {job.location}</p>
            <p className="mb-2">
              Job Description: <br />
              {job.description}
            </p>
            <button
              onClick={() => handleDelete(job.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobsList
