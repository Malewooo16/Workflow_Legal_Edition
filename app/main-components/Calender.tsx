"use client"

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from '@/utilities/appointments';

//import { appointments } from '../../../demo-data/month-appointments';

const Demo = () => {
  const [data] = useState(appointments);

  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState defaultCurrentDate="2018-07-27" />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Demo;
