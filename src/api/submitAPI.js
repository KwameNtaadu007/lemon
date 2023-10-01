export async function submitAPI(data) {
    try {
      const response = await fetch('http://localhost:8000/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, id: ((Math.random() * 1000) + 1).toFixed(1) }),
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const responseData = await response.json(); console.log( response.status)
      return responseData;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error; // Re-throw the error to be handled by the caller if necessary
    }
  }