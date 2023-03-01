import React, {FC} from 'react';
import './Task.scss';

interface TaskProps {
  left: number | undefined;
  width: number | undefined;
}

const Task:FC<TaskProps> = ({left, width}) => {

  return (
    <div className={'task'} style={{left: left, width: width}}>
      
    </div>
  );
};

export default Task;