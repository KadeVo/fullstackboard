import Header from './Header.tsx'
import Footer from './Footer.tsx'
import SearchFilter from './SearchFilter.tsx'


function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <SearchFilter />
      </main>
      <Footer />
    </div>
  );
}



export default App
