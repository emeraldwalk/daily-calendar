import React from 'react';
import ReactPDF from '@react-pdf/renderer';

import { Schedule } from './components';
import { getMonthlySchedule } from './model/schedule';

if(process.argv.length < 3) {
  console.error('Expected destination pdf path.');
  process.exit(1);
}

ReactPDF.renderToFile(
  <Schedule month={getMonthlySchedule(new Date())}/>,
  process.argv[2]
);