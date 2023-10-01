import React,{useState} from 'react'
import ReservationForm from '../components/ReservationForm'
import Confirmation  from '../components/Confirmation';
import { submitAPI } from "../api/submitAPI";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [formData, setFormData] =useState({})

  const toggleConfirmation=()=>{ console.log('fired')
        setConfirm(!confirm)
  }
  async function handleConfirmation(action,data){console.log('fired');
        if(action==='confirm'){
            setFormData(data); console.log(formData);
            setConfirm(true);
        }
        if(action==='submit'){
          const result = await submitAPI(formData);
          if (result) { console.log(result)
            navigate(`/confirmed/${result.id}`); // Navigate to the confirmed page on success
          }
        }
  }
  return (
    <div className=' mb-3'>
      <div className={`${confirm? 'bg-light':'primary-bg'} w-100 p-4`}>
          <div className='container px-'>
              <h1 style={{color:'var(--primary-two)'}}>{confirm ? 'Reservation' : 'Table'}</h1>
              <h3 className={`${confirm ? 'primary-text' : ''}`}>{confirm ? 'Confirmation' : 'Reservation'}</h3>
          </div>
      </div>
      <div className='mb-4 mt-4 py-3'>
        <span className={`${confirm? 'd-none':''}`}>
        <ReservationForm handleConfirm={handleConfirmation} />
        </span>
        <span className={`${confirm? '':'d-none'}`}>
        <Confirmation handleConfirm={handleConfirmation} toggleConfirm={toggleConfirmation} formData={formData} />

        </span>
      </div>
   </div>
  )
}

export default Reservation