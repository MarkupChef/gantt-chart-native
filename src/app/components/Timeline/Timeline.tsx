import React, {FC} from 'react';
import './Timeline.scss';
import Task from "./Task";
import {DatesPositions} from "../Chart/Chart";

interface TimelineProps {
  start: DatesPositions | undefined;
  end: DatesPositions | undefined;
}

const Timeline:FC<TimelineProps> = ({start, end}) => {

  const left = start ? start.left: 0;
  const width = left && end ? end.left - left : 0;

  return (
    <div className={'timeline'}>
      <Task left={left} width={width}/>
    </div>
  );
};

export default Timeline;