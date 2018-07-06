import React from 'react';
import SuccessImage from './SuccessImage';
import ErrorImage from './ErrorImage';

const StatusImage = (props) => {
  const StatusCode = props.statusCode;
  if(StatusCode === 200){
    return <SuccessImage />
  }
  return <ErrorImage />
};

export default StatusImage;