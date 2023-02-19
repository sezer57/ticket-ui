import { useState } from 'react';
import Header from '../compenents/Header';
import Footer from '../compenents/Footer';
import GetSeats from '../compenents/GetSeats';



const Ticket = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <GetSeats />
      </main>
      <Footer />
    </div>
  );
};

export default Ticket;
