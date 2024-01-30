

import '../custom-bootstrap.css';
import './formats/Kontaktai.css';


const Kontaktai = () => {

    return (

    <div className='kontaktai'>
      <h1>Kontaktai</h1>
                  
      <div className='text-info'> 

        <div className='text-info-2'> 
          <h3>Adresas</h3>  
          <p >VšĮ Vilniaus Miesto Poliklinika</p>
          <p >Klinikų g. 80A </p>
          <p >LT-10207</p>
          <p >Vilnius</p>
        </div>
  
        <div className='text-info-2'> 
          <h3>Sususiekite</h3>  
          <p >Registratūra:&nbsp;&nbsp;+370 643 12345</p>
          <p >Administracija:&nbsp;&nbsp;+370 654 23456</p>
          <p >Įmonėms:&nbsp;&nbsp;+370 665 34567</p>
          <p >Email:&nbsp;&nbsp;info@poliklinika.lt</p>
        </div>

      </div>

        <div className='kontaktai-map' > 
          <img className='map' src="./map.png" alt={"GoogleMap"} />
        </div> 

      <div className='text-info'> 

        <div className='text-info-2'> 
          <h3>Darbo Laikas</h3>  
          <p >I&nbsp;&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >II&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >III&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >IV&nbsp;&nbsp;- &nbsp;&nbsp;07:00-19:00</p>
          <p >V&nbsp;&nbsp;- &nbsp;&nbsp;07:00-17:00</p>
          <p >VI&nbsp;&nbsp;- &nbsp;&nbsp;Nedirbame</p>
          <p >VII&nbsp;&nbsp;- &nbsp;&nbsp;Nedirbame</p>
        </div>

        <div className='text-info-2'> 
          <h3>Pagalba ne darbo metu</h3>  
          <p >Greitoji pagalba: 112</p>
          <p >Kita Įstaiga: +370 698 76543</p>
          
        </div>
      </div>


                
    </div>


  )};
  
  export default Kontaktai;


