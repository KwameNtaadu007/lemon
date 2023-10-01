
  
  // Define a function to calculate available times based on the selected date
  export function datefetchAPI(selectedDate) {

    const today = new Date();
    const selectedDateTime = new Date(selectedDate);
    const availableTimes = [];
    
    if (selectedDateTime >= today) {
      const currentHour = today.getHours();
      for (let hour = currentHour + 1; hour <= 23; hour++) {
        const hourString = hour.toString().padStart(2, "0");
        availableTimes.push(hourString + ":00");
      }
    } // If selectedDate is in the past, availableTimes remains empty
   
    return availableTimes;
  }

  export function fetchAPI(){
    const data = fetch('http://localhost:8000/reservations')
          .then(res=> { 
              if(res.ok){
                return res.json()
                }else{
                  console.log(res.status, res.statusText)
                }
         })
          .then((data)=>{
              return data; 
          }).catch(err=> console.log(err));
        return data;
  }




  