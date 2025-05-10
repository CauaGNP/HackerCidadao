'use client';

import { useState } from 'react';
import styles from './calendar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Agenda = () => {
  const [events] = useState([
    { id: 1, title: '', time: '', day: 'Segunda' },
    { id: 2, title: '', time: '', day: 'Segunda' },
    { id: 3, title: '', time: '', day: 'Terça' },
    { id: 4, title: '', time: '', day: 'Quarta' },
    { id: 5, title: '', time: '', day: 'Quinta' },
  ]);

  const [selectedDay, setSelectedDay] = useState('Todos');

  const filteredEvents = selectedDay === 'Todos' 
    ? events 
    : events.filter(event => event.day === selectedDay);

  return (
    <div className={styles.agendaContainer}>
        <header className={styles.header}>
          <Link href="/" className={styles.backButton}>
              <Image
                  src="/left-arrow.png"
                  width={25}
                  height={25}
                  alt="Back button"
              />
          </Link>
          <h1 className={styles.headerTitle}>Minha Agenda</h1>
      </header>
      
      <main className={styles.main}>
      <div className={styles.dayFilters}>
        {['Todos', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map(day => (
          <button
            key={day}
            className={`${styles.dayButton} ${selectedDay === day ? styles.active : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      
      <div className={styles.eventsGrid}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventHeader}>
                <span className={styles.eventDay}>{event.day}</span>
                <span className={styles.eventTime}>{event.time}</span>
              </div>
              <h3 className={styles.eventTitle}>{event.title}</h3>
            </div>
          ))
        ) : (
          <p className={styles.noEvents}>Nenhum evento encontrado para este dia.</p>
        )}
      </div>
      </main>

    </div>
  );
};

export default Agenda;