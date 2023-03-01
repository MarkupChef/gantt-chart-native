import React, {useState} from 'react';
import Timeline from "../Timeline";
import Calendar from "../Calendar";
import './Chart.scss';

export interface DatesPositions {
  id: number;
  left: number;
}

const Chart = () => {
  const [datesPosition, setDatesPosition] = useState<DatesPositions[]>([]);

  const tasks = [
    {
      from: 1,
      to: 4,
      color: '#3bc000'
    },
    {
      from: 3,
      to: 5,
      color: '#00a3c0'
    },
    {
      from: 2,
      to: 7,
      color: '#00a3c0'
    },
  ];

  return (
    <div className={'chart'}>
      <Calendar setDatesPosition={setDatesPosition}/>
      {tasks.map((task, i) => (
        <Timeline key={i}
                  start={(datesPosition.find(date => date.id === task.from))}
                  end={(datesPosition.find(date => date.id === task.to))}/>
        )
      )}
    </div>
  );
};

export default Chart;