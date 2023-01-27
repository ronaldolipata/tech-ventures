import NavBar from './NavBar';
import Search from './Search';
import Jobs from './Jobs';
import Value from './Value';
import Footer from './Footer';

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
