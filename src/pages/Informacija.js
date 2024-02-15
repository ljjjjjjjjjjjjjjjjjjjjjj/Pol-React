import '../main/custom-bootstrap.css';
import './formats/Informacija.css';
import { useState} from 'react';
import config from '../main/config.js';

const Informacija = () => {

  const [newInfoVisible, setNewInfoVisible] = useState(false);
  const [labInfoVisible, setLabInfoVisible] = useState(false);
  const [freeInfoVisible, setFreeInfoVisible] = useState(false);
  const [paidInfoVisible, setPaidInfoVisible] = useState(false);
  const [templatesInfoVisible, setTemplatesInfoVisible] = useState(false);


  const changeStateNew = () => {
    setNewInfoVisible(!newInfoVisible);
  };

  const changeStateLaborai = () => {
    setLabInfoVisible(!labInfoVisible);
  };

  const changeStateFree = () => {
    setFreeInfoVisible(!freeInfoVisible);
  };

  const  changeStatePaid = () => {
    setPaidInfoVisible(!paidInfoVisible);
  };


  const changeStateTemplates = () => {
    setTemplatesInfoVisible(!templatesInfoVisible);
  };

  

  return ( 
    
    <div className="informacija">

      <div className='informacija-imagecontainer-cover'>
         <img className='informacija-imagecontainer-cover-image' src="./images/poliklinika-3.jpg" alt={"healthcare"} /> 
      </div>  

      <h1>Informacija</h1>
      

      <div className='informacija-box-1'> 
      <br></br>


        <div className='informacija-box-1'>       
          <input type='button' className="informacija-box-additional-info-header" 
          value="&emsp;Tapkite mūsų pacientu &emsp; + &emsp; " 
          onClick={changeStateNew}
          /> 
                      
                   
          {newInfoVisible && (
            <div className='informacija-box-additional-info-content'>
              <p>    
                &emsp;&emsp;Jei esate draustas  <strong>privalomuoju sveikatos draudimu</strong>, galite prisiregistruoti prie 
                šios poliklinikos ir gauti Privalomojo sveikatos draudimo fondo lėšomis kompensuojamas 
                asmens sveikatos priežiūros paslaugas.
                <br></br>      
                &emsp;&emsp;<strong>Norint tapti mūsų pacientu, atvykite į šios poliklinikos registratūrą.</strong> Atvykus į registratūrą 
                Jums reikės užpildyti specialios formos prašymą gydytis poliklinikoje, 
                paciento valios pareiškimą dėl sveikatos priežiūros paslaugų ir pasirinkti konkretų šeimos 
                ar vaikų ligų gydytoją. 
                <br></br>
                &emsp;&emsp;<strong>Su savimi būtina turėti asmens tapatybę patvirtinantį dokumentą</strong> - asmens pasą, tapatybės kortelę, 
                leidimą gyventi Lietuvoje (užsieniečiams), vaikams - lietuvišką gimimo liudijimą ar pasą, 
                leidimą gyventi Lietuvoje (užsieniečiams) ir vieno iš tėvų asmens tapatybę patvirtinantį dokumentą.
              </p>
              <br></br>
            </div>
          )}
        </div>


        <div className='informacija-box-1'>       
          <input type='button' className="informacija-box-additional-info-header" 
          value="&emsp;Informacija dėl laboratorinių tyrimų &emsp; + &emsp; " 
          onClick={changeStateLaborai}
          /> 
                      
                   
          {labInfoVisible && (
            <div className='informacija-box-additional-info-content'>
              <h5> Kraujo tyrimai. Bendrieji reikalavimai.</h5>

              <ul>
                <li> Prieš atliekant kraujo tyrimus 8-14 val. (priklausomai nuo atliekamų tyrimų rūšies) nevalgykite, negerkite sulčių, arbatos, kavos, ypač su cukrumi. Gerkite tik vandenį. </li>
                <li> Likus 1-2 dienoms iki tyrimo, mažiau valgykite riebaus ir kepto maisto, nevartokite alkoholio. Jei laboratorinio tyrimo atlikimo išvakarėse numatoma šventė, geriau atidėkite tyrimą 1-2 dienoms. </li>
                <li> Valandą iki tyrimo nerūkykite. </li>
                <li> Daugelio fermentų ir hormonų kiekis kraujyje įvairiu paros metu gali svyruoti, todėl šiuos tyrimus atlikite iki 10 val. ryto. </li>
                <li> Prieš atliekant kraujo tyrimą venkite fizinio krūvio (nesportuokite) ir streso. Prieš tyrimą nusiraminkite ir pailsėkite 10-15 min. </li>
                <li> Jeigu ruošiatės pradėti vartoti vaistus, tuomet tyrimus geriau atlikite prieš pradėdami juos vartoti arba praėjus 10-14 dienų po gydymosi vaistais. </li>
                <li> Nepatariama atlikti kraujo tyrimų po rentgenologinių ir ultragarsinių tyrimų, masažo, refleksoterapijos arba fizioterapijos procedūrų. </li>
                <li> Moterų hormoninių tyrimų rezultatams įtakos turi fiziologiniai faktoriai, susiję su menstruaciniu ciklu. Todėl, ruošiantis lytinių hormonų tyrimui, reikia nurodyti ciklo fazę ir vadovautis savo gydytojo rekomendacijomis, kurią ciklo dieną reikia atlikti tyrimus. </li>
                <li> Prieš atliekant streso hormonų tyrimą (AKTH, kortizolio, prolaktino ir kt.) būtina nusiraminti, procedūros metu nekreipti dėmesio į pašalinius veiksnius, atsipalaiduoti.</li>
                <li> Tiriantis dėl infekcijų, reikia atsižvelgti į infekcijos raidos stadiją ir imuniteto būklę. Gavus neigiamą tyrimų rezultatą, dar negalima garantuoti, kad infekcijos nėra. Jeigu laboratorinių tyrimų rezultatai priverčia Jus abejoti, tikslinga po 3-5 dienų išsitirti pakartotinai. </li>
              </ul>  

              <h5> Šlapimo tyrimai. Bendrieji reikalavimai.</h5>

              <ul>
                <li> Planuojant surinkti šlapimo mėginį laboratoriniams tyrimams, rekomenduojama pasirūpinti vienkartiniu šlapimo indeliu. Specialų vienkartinį indą galima įsigyti vaistinėje. </li>
                <li> Kelias dienas (arba bent 10 - 12 val.) iki šlapimo surinkimo tyrimams rekomenduojama laikytis standartinės dietos, maitintis įprastu režimu, tačiau vengti aštraus, sūraus maisto ir produktų, 
                  galinčių pakeisti šlapimo spalvą (pvz.: morkų, burokėlių ir pan.). </li>
                <li> Vartoti normalų skysčių kiekį.  </li>
                <li> Nerekomenduojama vartoti alkoholio </li>
                <li> Prieš tyrimo surinkimą reikia vengti didelio fizinio krūvio, ilgalaikio nei įprastai stovėjimo. 
                  Dėl per didelio fizinio krūvio šlapime gali atsirasti baltymų ir ketoninių kūnų arba padidėti jų kiekis. Ilgai stovint, dažnai atsiranda ortostatinė proteinurija. </li>
                <li> Laikytis švaros. </li> 
                <li> Ant indelio užrašyti savo vardą, pavardę, gimimo metus ir ėminio surinkimo laiką. </li>     
              </ul> 
              <br></br> 
    
                 
              
            </div>
          )}
        </div>







        <div className='informacija-box-1'>       
          <input type='button' className="informacija-box-additional-info-header" 
          value="&emsp;Nemokamos paslaugos &emsp; + &emsp; " 
          onClick={changeStateFree}
          /> 
                      
                   
          {freeInfoVisible && (
            <div className='informacija-box-additional-info-content'>
              <p>    
              Apdraustieji privalomuoju sveikatos draudimu Lietuvos gyventojai, turi teisę gauti mūsų įstaigoje teikiamas 
              asmens sveikatos priežiūros paslaugas, už kurias sumoka teritorinės ligonių kasos (toliau - TLK).
                <br></br>      
                &emsp;&emsp;Pirminės ambulatorinės asmens sveikatos priežiūros - šeimos gydytojo, palaikomojo gydymo ir slaugos, 
                psichikos sveikatos centro, odontologinės priežiūros (pagalbos) ir/ar burnos priežiūros  paslaugos  nemokamai teikiamos 
                apdraustiems, prisirašiusiems prie VšĮ Vilniaus rajono centrinės poliklinikos  pacientams.
                <br></br>
                &emsp;&emsp;Antrinės ambulatorinės asmens sveikatos priežiūros paslaugos (gydytojų specialistų konsultacijos) 
                nemokamai teikiamos visiems besikreipiantiems apdraustiems pacientams, turintiems šeimos gydytojo 
                ar kito specialisto siuntimą konkrečiai konsultacijai.
                <br></br>
                &emsp;&emsp;Pacientui kreipiantis dėl gydytojo dermatologo konsultacijos siuntimo nereikia.
                <br></br>
                &emsp;&emsp;Būtinosios pagalbos paslaugos visiems pacientams teikiamos nemokamai.
                <br></br>
                <br></br>
                &emsp;&emsp;Nemokamos asmens sveikatos priežiūros paslaugos, išskyrus būtinąją medicinos pagalbą, teikiamos tik patikrinus, 
                ar asmuo yra apdraustas privalomuoju sveikatos draudimu.
                <br></br>
                &emsp;&emsp;Pasitikrinti, ar esate apdraustas, galite <a href="https://dpsdr.vlk.lt/publicsearch.aspx" target="_blank" rel="noopener noreferrer">valstybinės ligonių kasos puslapyje.</a>
                <br></br>&emsp;
                <br></br>&emsp;
                
                
              </p> 
              

            </div>
          )}
        </div>









        <div className='informacija-box-1'>       
          <input type='button' className="informacija-box-additional-info-header" 
          value="&emsp;Mokamos paslaugos &emsp; + &emsp; " 
          onClick={changeStatePaid}
          /> 
                      
                   
          {paidInfoVisible && (
            <div className='informacija-box-additional-info-content'>
              <h5> Teikiamos mokamos asmens sveikatos priežiūros paslaugos</h5>
                     
              <ul>
                <li> Paslaugos draudžiamiesiems, kurie nėra apdrausti privalomuoju sveikatos draudimu (išskyrus būtinąją pagalbą);</li>
                <li> Paslaugos, kurios nėra numatytos sutartyje su teritorine ligonių kasa; </li>
                <li> Gydytojų specialistų konsultacijos, jei pacientas neturi siuntimo (jei teisės aktuose nėra numatyta kitaip);             </li>
                <li> Paslaugos, tyrimai, procedūros, teikiamos paciento pageidavimu; </li>
                <li> Odontologinės priežiūros paslaugos, kurios nėra padengiamos ligonių kasų;  </li>
                <li> Profilaktiniai darbuotojų ir įsidarbinančiųjų sveikatos tikrinimai;  </li>
                <li> Profilaktiniai vairuotojų mėgėjų, norinčių įsigyti civilinį ginklą, vykstančiųjų į užsienį sveikatos tikrinimai; </li>
                <li> Kitos paslaugos, teisės aktuose nurodytos kaip mokamos;</li>
              </ul>  
              <br></br>
                           
            </div>
          )}
        </div>














        <div className='informacija-box-1'>       
          <input type='button' className="informacija-box-additional-info-header" 
          value="&emsp;Dokumentai ir sutikimo formos &emsp; + &emsp; " 
          onClick={changeStateTemplates}
          /> 
                             
          {templatesInfoVisible && (
            <div className='informacija-box-additional-info-content'>
              <p> &emsp;    
              <a href={ config + '/documentsPublic/Vidaus_tvarkos_taisykles.pdf'} 
              target="_blank" rel="noopener noreferrer">
               Vidaus tvarkos taisyklės (pdf)</a>              
              </p>

              <p> &emsp;    
              <a href={ config + '/documentsPublic/PACIENTO_SUTIKIMAS_forma_nr.1.pdf'} 
              target="_blank" rel="noopener noreferrer">
               Paciento sutikimas dėl jo tyrimo ir gydymo forma Nr.1 (pdf)</a>              
              </p>

              <p> &emsp;    
              <a href={ config + '/documentsPublic/20231127_KAINYNAS.pdf'} 
              target="_blank" rel="noopener noreferrer">
               Mokamų asmens sveikatos priežiūros paslaugų kainynas (pdf)</a>              
              </p>
              <br></br>
              <br></br>
            </div>
          )}
        </div>




        <div className='informacija-box-additional-info-content-left'>    
          <p> Jeigu neradote informacijos Jums rūpimu klausimu, kreipkitės telefonu, e-paštu, 
            arba gyvai atvykus į poliklinikos registratūrą:                            </p>
          <p >Registratūra:&nbsp;&nbsp;+370 643 12345
              <br></br>
              Administracija:&nbsp;&nbsp;+370 654 23456
              <br></br>
              Įmonėms:&nbsp;&nbsp;+370 665 34567
              <br></br>
              Email:&nbsp;&nbsp;info@poliklinika.lt   
          </p>
          <br></br>
              
        </div>







  


          <p className='informacija-box-additional-info-content-left'> 
          <strong>INFORMACIJA PACIENTAMS DĖL POLIKLINIKOS TVARKOS COVID-19 EPIDEMIJOS METU. &nbsp; </strong> 
          Sveikatos apsaugos ministerija (SAM) informuoja, kad savivaldybėse veikiantys visuomenės sveikatos biurai 
          šalies ugdymo įstaigoms ir bendruomenėms sudaro galimybę neatlygintinai gauti savikontrolės testų, 
          skirtų COVID-19 ligos (koronaviruso infekcijos) diagnostikai.
          <br></br>
          Bendrojo ir ikimokyklinio ugdymo įstaigų bendruomenės jau gali neatlygintinai gauti savikontrolės testų mokiniams, 
          jų artimiesiems, pedagogams, kitiems specialistams. Minėtų testų paskirstymu bendruomenėms rūpinsis savivaldybių 
          visuomenės sveikatos biurai, kurių visoje šalyje veikia 49. Taip pat, biurai gali testus dalinti bendruomenėms 
          savivaldybėse vykstančių renginių metu.
          <br></br>
          <br></br>
          SAM primena, kad COVID-19 ligos (koronaviruso infekcijos) ligos sukėlėjas vis dar cirkuliuoja populiacijoje, 
          o šiuo metu stebimas sergamumo didėjimas, todėl labai svarbu, kad būtų užtikrints kuo didesnis simptomus jaučiančių 
          asmenų testavimo prieinamumas. Nacionalinė visuomenės sveikatos priežiūros laboratorija į savivaldybių visuomenės 
          sveikatos biurus pristatė reikiamą kiekį minėtų testų, kad jie kuo greičiau pasiektų savivaldybių gyventojus. 
          Praktika skatinti testuotis taikoma ir kitose šalyse, pavyzdžiui, JAV, kur COVID-19 savikontrolės testai 
          gyventojams siunčiami paštu.
          </p>
          <br></br>





        <div className='informacija-box-additional-info-content-left'>
        <br></br>
        <table className='informacija-table-1' >
          <tr>
            <th>Informacija</th>
            <th>Kita informacija</th>
            <th>Dar daugiau informacijos</th>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
            <td>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
            <td>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</td>
          </tr>
          <tr>
            <td>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
            <td>De finibus bonorum et malorum </td>
            <td>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</td>
          </tr>
        </table>
        </div>



        <div></div>

    

    </div>  

    
  </div>
);
  };
  
  export default Informacija;