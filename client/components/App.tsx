import Header from './Header.tsx'
import Footer from './Footer.tsx'
import SearchFilter from './SearchFilter.tsx'
import JobsList from './Joblist.tsx';


function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <SearchFilter />
        <JobsList />
      </main>
      <Footer />
    </div>
  );
}



export default App
