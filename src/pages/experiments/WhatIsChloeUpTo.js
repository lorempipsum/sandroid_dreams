import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import styles from './WhatIsChloeUpTo.module.css';

const Tose = () => {
  const [activity, setActivity] = useState("Pick a date");
  const [
    selectedDate,
    setSelectedDate,
  ] = React.useState(
    new Date()
  );

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  const ACTIVITIES = {
    // key: date
    // value: activity
    '2021-04-10': 'Fuck all',
  };

  const PLACEHOLDER_ACTIVITY = "Idk but.. probably fuck all";

  const handleDateChange = (date) => {
    const newDate = formatDate(date);
    let newActivity =
      ACTIVITIES[newDate];
    if (newActivity === undefined) {
      newActivity = PLACEHOLDER_ACTIVITY;
    }
    console.log(`new activity is: ${newActivity}`);
    setActivity(newActivity);
    setSelectedDate(date);
  };


  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>
          What Is Chloe Up To On ...
        </h1>
      </div>

      <div className={styles.dateForm}>
        <MuiPickersUtilsProvider
          utils={DateFnsUtils}
        >
          <KeyboardDatePicker
          autoOk
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label':
                'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className={styles.activity}>
        {activity}
      </div>
    </div>
  );
};

export default Tose;
