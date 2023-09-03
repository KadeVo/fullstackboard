import Header from './Header';
import Footer from './Footer';
import SearchFilter from './SearchFilter';
import JobsList from './Joblist';

function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <SearchFilter />
                <JobsList />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;