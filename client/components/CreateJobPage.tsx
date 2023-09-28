import AddJobForm from './AddJob.tsx'

function CreateJobPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-semibold mb-4">
        Create your listing today!
      </h1>
      <AddJobForm />
    </div>
  )
}

export default CreateJobPage
