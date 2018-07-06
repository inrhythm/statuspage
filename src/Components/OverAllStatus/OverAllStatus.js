import React from 'react';
import './OverAllStatus.scss';

const OverAllStatus = ({overAllStatus}) => <p
  className={`OverAllStatus-p ${overAllStatus ? 'OverAllStatus-success' : 'OverAllStatus-error'}`}>
  {overAllStatus ? 'All IR Services are Operational' : 'Few IR services are down'}
</p>;

export default OverAllStatus;