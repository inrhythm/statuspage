import React from 'react';
import SuccessImage from './SuccessImage';
import ErrorImage from './ErrorImage';

const SUCCESS_STATUS_CODE = 200;

const StatusImage = ({statusCode}) => {

  if (statusCode === SUCCESS_STATUS_CODE) {
    return <SuccessImage/>
  }

  return <ErrorImage/>
};

export default StatusImage;