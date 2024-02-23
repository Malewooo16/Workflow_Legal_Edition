"use client"

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
  WeekView,
  DayView
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from '@/utilities/appointments';

//import { appointments } from '../../../demo-data/month-appointments';

export default function CalenderDemo() {
  const [data] = useState(appointments);
  const [currentViewName, setCurrentViewName] = useState('work-week');

  const handleCurrentViewNameChange = (newViewName:any) => {
    setCurrentViewName(newViewName);
  };

  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState
          defaultCurrentDate="2018-07-25"
          currentViewName={currentViewName}
          onCurrentViewNameChange={handleCurrentViewNameChange}
        />

        <WeekView startDayHour={10} endDayHour={19} />
        <WeekView
          name="work-week"
          displayName="Work Week"
          excludedDays={[0, 6]}
          startDayHour={9}
          endDayHour={19}
        />
        <MonthView />
        <DayView />
        <Toolbar />
        <DateNavigator />
        
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip
            showCloseButton
            showOpenButton
          />
          <AppointmentForm
            readOnly
          />
      </Scheduler>
    </Paper>
  );
};


