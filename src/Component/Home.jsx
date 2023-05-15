import Boost from './Boost';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Statistics from './Statistics';

const Home = () => {

    return(
        <div>
           <header>
                < Nav/>
           </header>
            <main>
                <Hero/>
                <Statistics/>
                <Boost/>
                <Footer/>
            </main>
            <footer>
               
            </footer>
        </div>
    )
}
export default Home;