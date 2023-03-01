import React, {FC, useEffect, useRef} from 'react';
import './Calendar.scss';
import {DatesPositions} from "../Chart/Chart";

interface CalendarProps {
  setDatesPosition: (val:DatesPositions[]) => void;
}

const Calendar:FC<CalendarProps> = ({setDatesPosition}) => {

  const datesRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const newArr:DatesPositions[] = [];

     datesRefs.current.forEach((date, index) => {
        if (date && date.offsetLeft) {
          newArr.push({
            id: index,
            left: date.offsetLeft
          });
        }
     });

    setDatesPosition(newArr);

  }, []);

  return (
    <div className={'calendar'}>
      {[...Array(10)].map((day, i) => <div key={`date-${i}`} ref={el => datesRefs.current.push(el)} className={'calendar__item'}>{i}</div>)}
    </div>
  );
};

export default Calendar;