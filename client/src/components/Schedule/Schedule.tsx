import React from 'react';
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';
import { Day, MonthlySchedule } from '../../model/schedule';

const styles = StyleSheet.create({
  month: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
  },
  headerCell: {
    backgroundColor: '#222',
    border: '1pt solid #ccc',
    color: '#fff',
    padding: '4pt',
    textAlign: 'center',
    width: '14.28%'
  },
  week: {
    flexDirection: 'row',
    flexGrow: '1',
  },
  day: {
    border: '1pt solid #ccc',
    fontSize: '16pt',
    padding: '10pt',
    textAlign: 'right',
    width: '14.28%'
  }
});

// [612.0, 792.0]
const size = 'LETTER';

function dayStyle(
  day: Day
) {
  const today = new Date().getDate();

  if(day.date === today) {
    return {
      ...styles.day,
      backgroundColor: '#777',
      color: '#fff'
    };
  }

  if(!day.isInMonth) {
    return {
      ...styles.day,
      border: 'none'
    };
  }

  if(day.dayOfWeek % 6 === 0) {
    return {
      ...styles.day,
      backgroundColor: '#eee'
    }
  }

  return styles.day;
}

export interface ScheduleProps {
  month: MonthlySchedule
}

const Schedule: React.FC<ScheduleProps> = ({
  month
}) => (
  <Document>
    <Page size={size} orientation="landscape" style={styles.month}>
      <View style={styles.header}>
        {
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            .map(day => (
              <Text key={day} style={styles.headerCell}>{day.substr(0, 3)}</Text>
            ))
        }
      </View>
      {
        month.weeks.map((week, i) => (
          <View key={i} style={styles.week}>
          {
            week.days.map(day => (
              <Text key={day.date} style={dayStyle(day)}>{day.isInMonth && day.date}</Text>
            ))
          }
          </View>
        ))
      }
    </Page>
  </Document>
);

export default Schedule;