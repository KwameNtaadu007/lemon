import React,{useReducer} from 'react'
import ReservationForm from './ReservationForm'
import {reducer,initializeTimes} from '../reducer';

const Reservations = () => {
  const triggerInitialize = initializeTimes();
  const [availableTimes, dispatch] = useReducer(reducer, triggerInitialize);

  
  // useEffect(()=>{
  //   const availableTimes = fetchAPI(new Date('09/16/2023'));
  //   console.log(availableTimes);
  // },[])

  
  return (
    <div className='container'>
      <h2 className='m-4'>Reservations</h2>
      <div className='d-flex align-items-center justify-content-center'>
          <span className='w-75'>
          <ReservationForm dispatch={dispatch}   availableTimes={availableTimes}/>
          </span>
      </div>
    </div>
  )
}

export default Reservations
