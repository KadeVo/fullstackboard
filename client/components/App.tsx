import Header from './Header.tsx'
import Footer from './Footer.tsx'
import SearchFilter from './SearchFilter.tsx'
import JobsList from './Joblist.tsx';
import AddJobForm from './AddJob.tsx';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <SearchFilter />
        <JobsList />
        <AddJobForm />
      </main>
      <Footer />
    </div>
  );
}



export default App
