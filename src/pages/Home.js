
import './formats/Home.css';
import '../main/custom-bootstrap.css';



const Home = () => {
  return (
    <div className="home">
      

      <div className='home-imagecontainer-cover'>
         <img className='home-imagecontainer-cover-image' src="./images/healthcare_800.png" alt={"healthcare"} /> 
      </div>     

      <p className="home"> template template template template template template template <br></br>
         template template template template template template template <br></br>
         template template template template template template template.</p>

      <p className="home"> template template template template template template template <br></br>
         template template template template template template template <br></br>
         template template template template template template template.</p>

      <p className="home"> template template template template template template template <br></br>
         template template template template template template template <br></br>
         template template template template template template template.</p>

      <p className="home"> template template template template template template template <br></br>
         template template template template template template template <br></br>
         template template template template template template template.</p>
    </div>
  );
};

export default Home;