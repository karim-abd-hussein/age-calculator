
import { useState } from 'react';
import './style/Main.css';

export default function Main(){


  function ClosureValue(){

    let value='';
    let event=null;

  function changeValue(e){
    value=e.target.value;
    event=e;
  }

  function getValue(){

    // resetValue();
    return value;

  }

  function isEmpty(){

    if(value===''){
      return true;
    }
      return false;

  }

  function resetValue(){

    if(event){
      event.target.value='';
    value='';

      return true;
    }

    return false;
  }

  return {changeValue,getValue,isEmpty,resetValue};

  }


  const day= ClosureValue();
  const month= ClosureValue();
  const year=  ClosureValue(); 
  
  const [days,setDays]=useState('--');
  const [months,setMonths]=useState('--');
  const [years,setYears]=useState('--');

  const [errorClass,setErrorClass]=useState('hidden');
  const [illustrationClass,setIllustrationClass]=useState("illustration gray");
  const [border,setBorder]=useState('grayBorder');

  function resetValues(){
    day.resetValue();
    month.resetValue();
    year.resetValue();

  }

  function setRedStyle(){

    resetValues();

    setErrorClass('visible');
    setIllustrationClass('illustration red');
    setBorder('redBorder');

    setTimeout(() => {

      setIllustrationClass("illustration gray");
      setErrorClass('hidden')
      setBorder('grayBorder');
    
    }
      ,2000);

  }


  function displayAge(){

    
      if(day.isEmpty()||month.isEmpty()||year.isEmpty()){

        setRedStyle();

        return;
      }




        
        const date=new Date();

        let absDay=(date.getDate()-Number(day.getValue()));
        let absMonth=(date.getMonth()+1)-Number(month.getValue());
        let absYear=(date.getFullYear()-Number(year.getValue()));

        if(absMonth<0){

          absYear--;
          absMonth=12+absMonth;

        }

        if(absDay<0){

          absMonth--;
          absDay=30+absDay;
        }
    
        setDays(absDay);
        setMonths(absMonth);
        setYears(absYear);

        resetValues();

  }

  return(

    <main >

    <div> 
    <div >
    <p className={illustrationClass}> Day</p>
    <input maxLength={2} className={border} onChange={e => day.changeValue(e)} type="text" placeholder="DD"/>
    <p className={errorClass}>require</p>
    </div>

    <div >
    <p className={illustrationClass}>Month</p>
    <input maxLength={2} className={border} onChange={e => month.changeValue(e)} type="text" placeholder="MM"/>
    <p className={errorClass}>require</p>
    </div>

    <div >
    <p className={illustrationClass}>Year</p>
    <input maxLength={4} className={border} onChange={e => year.changeValue(e)} type="text" placeholder="YYYY"/>
    <p className={errorClass}>require</p>
    </div>

    <picture onClick={displayAge} >
    <img src="/icon-arrow.svg" alt="arrow icon" />
    </picture>
    </div>
    
    <div>

    <h1> <span>{years}</span>years</h1>
    <h1> <span>{months}</span>months</h1>
    <h1> <span>{days}</span>days</h1>
  
    </div>

  </main>

  );
}


