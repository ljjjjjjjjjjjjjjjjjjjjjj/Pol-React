
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
         PSDF lėšomis kompensuojamos, paslaugos:
      </p>


      <p className="home"> 
      <strong>Pirminės ambulatorinės asmens sveikatos priežiūros paslaugos.&ensp; </strong> 
         Jos teikiamos visiems pacientams, kurie teisės aktų nustatyta tvarka yra apdrausti privalomuoju sveikatos draudimu 
         ir yra prisirregistravusių prie poliklinikos gyventojų sąraše;
         <br></br>
         <br></br>

         <strong>Antrinės ambulatorinės sveikatos priežiūros paslaugos.&ensp; </strong> 
        Jos teikiamos pacientams, teisės aktų nustatyta tvarka, apdraustiems privalomuoju sveikatos draudimu 
        bei turintiems gydytojo siuntimą konsultacijai 
        (išskyrus antrinės sveikatos priežiūros paslaugas teikiantį gydytoją dermatologą ir odontologą);
        <br></br>
        <br></br>

        <strong>Būtinoji medicinos pagalba.&ensp; </strong> 
        okia pagalba teikiama nemokamai visiems nuolatiniams gyventojams, neatsižvelgiant į tai, 
        ar jie apdrausti privalomuoju sveikatos draudimu, ar ne.


      </p>

         
      


      </div>  

      <div className='home-box-1'> 

      <h3>Sveika gyvensena</h3>

      

      <p> 
      Norint išlaikyti gerą fizinė ir dvasinę savijautą, reikia imtis prevencinių priemonių. <br></br>
      Sveikai gyvenantys žmonės gali nutolinti vėžio, širdies ir kraujagyslių ligų ir 2-ojo tipo diabeto diagnozę. <br></br>
      Tyrimas rodo, kad sveikai gyvenančios moterys be šių ligų gyveno vidutiniškai 10 metų ilgiau, palyginti su moterimis, 
      kurių gyvenimo būdas nepasižymi sveikais įpročiais. <br></br>
      O vyrai, gyvendami sveikai, gali nutolinti ligas senatvėje maždaug 7 metais. 

      </p>

      <div className='home-imagecontainer-cover'>
         <img className='home-imagecontainer-cover-image' src="./images/Healthy-family-4.jpg" alt={"healthcare"} /> 
      </div> 


      <ul>
        <li> <strong>Miegas.&ensp; </strong> 
        Miegokite ne mažiau kaip 7–8 val. per parą. Gerai pamiegojęs ir pailsėjęs žmogus būna darbingesnis, laimingesnis, 
        sveikesnis ir, žinoma, gražesnis. Beje, anot mokslininkų, ilgiau miegoti taip pat nedera. 
        Per ilgas miegojimas kenkia taip pat, kaip ir jo trūkumas.</li>
        
      </ul>  


      <ul>
        <li> <strong>Mityba.&ensp; </strong> 
        Svarbu subalansuota mityba: valgyti įvairų maistą, vengti riebaus maisto (ypač įsotintų gyvulinių riebalų), vengti cholesterolio, 
        vartoti pakankamai kaloringą ir skaidulingą maistą, vengti per didelio kiekio cukraus,nevartoti per daug druskos.  </li>
      </ul>  



      <ul>
        <li> <strong>Fizinis aktyvumas.&ensp; </strong> 
        reguliarus fizinis aktyvumas padeda kontroliuoti kūno būklę ir svorį, pagerinti sveikatą ir nuotaiką, 
        sumažinti su nutukimu siejamų ligų riziką. Ilgalaikiais tyrimais įrodyta, jog fizinis pasyvumas yra vienas pagrindinių 
        lėtinių neinfekcinių ligų, ypač širdies ir kraujagyslių sistemos bei nutukimo, rizikos veiksnių. 
        Su fiziniu pasyvumu siejama 3,5 proc. visų ligų, ir 5 - 10 proc. mirčių Europos regione. 
        Fizinis aktyvumas padeda gerinti žmogaus sveikatą, mažėja nutukimo rizika, o tuo pačiu ir lėtinių neinfekcinių ligų atsiradimo rizika.</li>
      </ul>  

      <ul>
        <li> <strong>Žalingų įpročių atsisakymas.&ensp; </strong>
        Tabako rūkymas – viena reikšmingiausių sveikatos problemų ir viena pagrindinių išvengiamų mirties priežasčių. 
        Pasaulio sveikatos organizacijos (PSO) duomenimis nuo rūkymo sukeltų ligų (plaučių vėžio, širdies ir kraujagyslių bei kt.) 
        kasmet miršta per 3,5 milijono žmonių, o kiekvieną dieną – apie 10 000! 
        Metus rūkyti iki 30 metų, vidutinė gyvenimo trukmė pailgėja apie 10 metų, iki 40 metų – maždaug 9 metais, iki 50 metų –  vidutiniškai 6 metais, apie 60 metų – 3 metais.
        Mesti rūkyti niekada nevėlu, o tabako atsisakymo nauda sveikatai akivaizdi.
        </li>
      </ul>


      </div> 

  

      
    </div>
  );
};

export default Home;