import React from 'react';
import './OverAllStatus.scss';

const OverAllStatus = ({overAllStatus}) => <p
  className={`OverAllStatus-p ${overAllStatus ? 'OverAllStatus-success' : 'OverAllStatus-error'}`}>
  {overAllStatus ? 'All Systems are Operational' : 'All Systems are not Operational'}
</p>;

export default OverAllStatus;