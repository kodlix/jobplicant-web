import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

const ProgressTrackerBar = ({ value, className }) => {
  return (
    <ProgressBar value={value} showValue={false} className={className}></ProgressBar>
  );
}

export default ProgressTrackerBar;