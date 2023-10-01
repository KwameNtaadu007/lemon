import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import ReservationCard from '../components/ReservationCard';
import { fetchAPI } from '../api/fetchAPI';


const Reservations = () => {
  const [reservations, setReservations] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
       setIsLoading(true);
     setTimeout(()=>{
        const data =  fetchAPI();
          data.then((res)=>{
            if(res){
              setReservations(()=>([...res]))
              setIsLoading(false)
            }
          })
         
     },1000)
  },[])


  
  
  return (

   <div>
    <div className='primary-bg w-100 '>
    <div className='container d-flex justify-content-between align-items-center w-100 mb-3 p-2'>
      <h2 className='m-4 text-white'>Reservations</h2>  <Link className='btn btn-action'  to={'/reservation'}>Reserve A Table</Link>
      </div>
    </div>
     <div className='container d-flex flex-column justify-content-between align-items-center'>
      {isLoading&&<div className='small row'>Loading...</div>}
      <div className='d-flex align-content-start flex-wrap mx-auto my-2'>
       
         {reservations&&reservations.map(reservation=><ReservationCard reservation={reservation} key={reservation.id} />)}
      </div>
    </div>
   </div>
  )
}

export default Reservations
