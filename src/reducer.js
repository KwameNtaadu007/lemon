
// Define a function that returns an array of time slots from 17:00 to 22:00
export function initializeTimes() {
    // Create an empty array to store the time slots
    const times = [];
    // Loop from 17 to 22 (inclusive)
    for (let hour = 17; hour <= 22; hour++) {
      // Convert the hour to a string with two digits
      const hourString = hour.toString().padStart(2, "0");
      // Push the time slot to the array
      times.push(hourString + ":00");
    }
    // Return the array of time slots
    return times;
  }


  export function reducer(state, action) {
    switch (action.type) {
      case "select":
        // If the action type is "select," remove the selected time from availableTimes
        return state.filter((time) => time !== action.payload);
  
      case "reset":
        // If the action type is "reset," return the initial state by calling initializeTimes
        return initializeTimes();
  
      case "updateTimes":
        // If the action type is "updateTimes," calculate availableTimes based on selectedDate
        const { selectedDate } = action.payload;
        console.log(selectedDate)
        let times =calculateAvailableTimes(selectedDate)
   
        return times;
  
      default:
        // If the action type is not recognized, return the current state unchanged
        return state;
    }
  }
  
  // Define a function to calculate available times based on the selected date
  function calculateAvailableTimes(selectedDate) {

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
  

 
  // submitAPI(formData)