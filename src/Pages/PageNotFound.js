import React from 'react';
import { Typography } from '@mui/material';
import Routing from '../Routes/Routing.js';


const PageNotFound = () => {
  return (
    <>
      <Routing>
            <Typography>Error 404.. Page Not Found !</Typography>
        </Routing>
    </>
  )
}

export default PageNotFound;
