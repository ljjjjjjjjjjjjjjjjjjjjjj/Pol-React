
import './formats/Home.css';
import '../main/custom-bootstrap.css';



const Home = () => {
  return (
    <div className="home">
      

      <div className='home-imagecontainer-cover'>
         <img className='home-imagecontainer-cover-image' src="./images/healthcare_1600_longplus.png" alt={"healthcare"} /> 
      </div>  

      <div className='home-box-1'> 

      <h3>Poliklinikoje teikiamos PSDF biudžeto lėšomis kompensuojamos (nemokamos) paslaugos</h3>

      <p className="home"> 
         Vadovaujantis sutartimis su Valstybine ligonių kasa, šioje poliklinikoje teikiamos nemokamos, 
         PSDF lėšomis kompensuojamos, paslaugos:</p>


      <ul>
        <li> <strong>Pirminės ambulatorinės asmens sveikatos priežiūros paslaugos.&nbsp; </strong> 
         Jos teikiamos visiems pacientams, kurie teisės aktų nustatyta tvarka yra apdrausti privalomuoju sveikatos draudimu 
         ir yra prisirregistravusių prie poliklinikos gyventojų sąraše;</li>
      </ul>  

      <ul>
        <li> <strong>Antrinės ambulatorinės sveikatos priežiūros paslaugos.&nbsp; </strong> 
        Jos teikiamos pacientams, teisės aktų nustatyta tvarka, apdraustiems privalomuoju sveikatos draudimu 
        bei turintiems gydytojo siuntimą konsultacijai 
        (išskyrus antrinės sveikatos priežiūros paslaugas teikiantį gydytoją dermatologą ir odontologą);</li>
      </ul>

      <ul>
        <li> <strong>Būtinoji medicinos pagalba.&nbsp; </strong> 
        okia pagalba teikiama nemokamai visiems nuolatiniams gyventojams, neatsižvelgiant į tai, 
        ar jie apdrausti privalomuoju sveikatos draudimu, ar ne. </li>
      </ul>

      

      </div>  

      
    </div>
  );
};

export default Home;