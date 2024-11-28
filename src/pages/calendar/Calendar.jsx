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

  // Função para buscar a API_KEY e CALENDAR_ID do backend
  const fetchCalendarConfig = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/google/calendar');
      const { API_KEY, CALENDAR_ID } = response.data;
      setApiKey(API_KEY);
      setCalendarId(CALENDAR_ID);
    } catch (error) {
      console.error('Erro ao buscar a configuração do calendário:', error);
    }
  };

  useEffect(() => {
    fetchCalendarConfig(); // Chama a função para buscar as chaves no backend
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      if (!apiKey || !calendarId) {
        console.error('Chave da API ou ID do calendário não definidos.');
        return;
      }

      try {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const response = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
          {
            params: {
              key: apiKey,
              conferenceDataVersion: 1,
              timeMin: startOfDay.toISOString(),
              timeMax: endOfDay.toISOString(),
            },
          }
        );

        const sortedEvents = (response.data.items || []).sort((a, b) => {
          const startA = new Date(a.start?.dateTime || a.start?.date);
          const startB = new Date(b.start?.dateTime || b.start?.date);
          return startA - startB;
        });

        setEvents(sortedEvents);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, [date, apiKey, calendarId]);

  const formatDate = (dateTime) => {
    if (!dateTime) return 'Data não disponível';
    const date = new Date(dateTime);
    return date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
  };

  const handleDateChange = (offset) => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + offset);
      return newDate;
    });
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
