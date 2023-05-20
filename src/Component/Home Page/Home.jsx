import Boost from '../Boost page/Boost';
import Footer from '../Footer page/Footer';
import Hero from '../hero page/Hero';
import Nav from '../Navigation Page/Nav';
import Statistics from '../Statistic Page/Statistics';

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