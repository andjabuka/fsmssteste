import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventModal from './Modal';
import './style/Calendar.css'; 

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [calendarId, setCalendarId] = useState('');

  
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&conferenceDataVersion=1&timeMin=${startOfDay.toISOString()}&timeMax=${endOfDay.toISOString()}`
        );
        const data = await response.json();

        const sortedEvents = (data.items || []).sort((a, b) => {
          const startA = new Date(a.start?.dateTime || a.start?.date);
          const startB = new Date(b.start?.dateTime || b.start?.date);
          return startA - startB;  // Ordena por data
        });

        setEvents(sortedEvents);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, [date]);

  const formatDate = (dateTime) => {
    if (!dateTime) return 'Data não disponível';
    const date = new Date(dateTime);
    return date.toLocaleString();
  };

  const handleDateChange = (offset) => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + offset);
      return newDate;
    });
  };

  const openModal = (event) => {
    setSelectedEvent(event);  // Define o evento selecionado
    setIsModalOpen(true);  // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Fecha o modal
  };
  return (
    <div className="container2">
      <h1>Eventos</h1>
      <h1>Evento indicados pelos Fórum</h1>
      <div className="button-container">
        <button className="navigation-button2" onClick={() => handleDateChange(-1)}>Dia Anterior</button>
        <button className="navigation-button2" onClick={() => handleDateChange(1)}>Próximo Dia</button>
      </div>
      <br></br>
      <h2>Eventos para {date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</h2>
      <ul className="event-list2">
        {events.length > 0 ? (
          events.map((event) => {
            const startDate = formatDate(event.start?.dateTime);
            const endDate = formatDate(event.end?.dateTime);
            const location = event.location || 'Local não disponível';

            return (
              <li key={event.id} className="event-card2">
                <h3>{event.summary}</h3>
                <p>Início: {startDate}</p>
                <p>Fim: {endDate}</p>
                <p>Local: {location}</p>
                <button className="details-button2" onClick={() => openModal(event)}>Ver Detalhes</button>
              </li>
            );
          })
        ) : (
          <p>Nenhum evento disponível para a data selecionada.</p>
        )}
      </ul>

      {/* Modal para o evento */}
      <EventModal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
    </div>
  );
};

export default Calendar;