import React from 'react';
import './Calendar.scss';

const Calendar = () => {

  return (
    <div className={'calendar'}>
      {[...Array(10)].map((day, i) => <div key={`date-${i}`} className={'calendar__item'}>{i}</div>)}
    </div>
  );
};

export default Calendar;