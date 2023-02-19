
import { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';

const getSeats  = () => {
  const [seats, setSeats] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [tc, setTckimlik] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8080/v1/ticket/seats')
      .then(response => response.json())
      .then(data => setSeats(data));
  }, [isSubmitting]);
  const numbers = new Set(seats.map(seat => seat.numbers));

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
   if (selectedSeats.length === 0) {
     setSelectedSeats([seatNumber]);
   } else if (selectedSeats[0] === seatNumber) {
     setSelectedSeats([]);
   }
 };

const Seat = ({ number, selected, isBooked, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  let seatColorClass = '';
  if (selected) {
    seatColorClass = 'bg-green-500';
  } else if (isHovering && !isBooked) {
    seatColorClass = 'bg-gray-300 cursor-pointer';
  } else if (isBooked) {
    seatColorClass = 'bg-red-400 cursor-not-allowed';
  } else {
    seatColorClass = 'bg-gray-200 cursor-pointer';
  }
  const handleClick = isBooked ? null : onClick;


  return (
    <div
      className={`p-1 ${seatColorClass} w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {number}
    </div>
  );
};


   const rows = [];
   const numOfSeatsPerRow = numbers.size;
   
   
     const row = [];
     for (let j = 0; j < numOfSeatsPerRow; j++) {
       const seatNumber =  j  + 1;
       const isSelected = selectedSeats.includes(seatNumber);
       const SeatIsTaken =  seats[j].seatsIsTaken === "false"? false:true;
      
       row.push(
        
         <div key={seatNumber} className="mx-1">
           <Seat
             number={seatNumber}
             selected={isSelected}
             isBooked={SeatIsTaken}
             onClick={() => handleSeatClick(seatNumber)}
           />
         </div>
       );
     }
     rows.push(<div key={0} className="flex justify-center p-1">{row}</div>);
 



    
      const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
          await axios.post('http://127.0.0.1:8080/v1/ticket/passenger/add', { 
            name: name,
            tc: tc,
            numbers: selectedSeats.toString()
           });
          setIsSubmitted(true);
          
          window.location.reload();
        } catch (error) {
          console.error(error);
        } finally {
          setIsSubmitting(false);
        }
      };

      const submitButtonClass = classNames('px-4 py-2 bg-blue-500 text-white rounded', {
        'opacity-50 cursor-not-allowed': isSubmitting});

    
  return (
   
    <div>
      
    <main className="flex-grow">
          
          <div className="bg-gray-50 p-8 rounded-md">
           <div className="">
              <h2 className="flex justify-center text-xl font-semibold mb-4">Select your seat(s)</h2>
              <div className="justify-center items-center gap-1">{rows}</div>
              <div className="flex flex-wrap justify-center items-center p-5 ">
              <div 
                className="bg-blue-700  text-white font-bold py-2 px-4 rounded"
               >
               {selectedSeats.length === 0 ? (
        <p>No seats selected</p>
      ) : (
        <p>Selected seats: {selectedSeats.join(", ")} </p>
      )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
      {selectedSeats.length === 0 ? (
        <p>No seats selected</p>
      ) : (
        
        <div className="p-4">
      {isSubmitted ? (
        <p className="text-green-600">Form submitted successfully!</p>
        
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 p-2 rounded w-full"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
           <label htmlFor="tckimlik" className="block mb-2 font-bold">TCKimlik</label>
           <input
              type="number"
              id="tckimlik"
              name="tckimlik"
              className="border border-gray-400 p-2 rounded w-full"
              maxLength="11"
               value={tc}
              onChange={(event) => setTckimlik(event.target.value)}
            />
          </div>
          <button type="submit" className={submitButtonClass} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>

       
      

      )}
    </div>
          <div className="flex justify-center text-xl font-semibold mb-4 pt-5"></div>
    
    </main>
      
    </div>
  );
};

export default getSeats
