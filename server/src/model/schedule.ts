export interface Day {
  date: number,
  dayOfWeek: number,
  isInMonth: boolean
}

export interface Week {
  days: Day[]
}

export interface MonthlySchedule {
  weeks: Week[]
}

export function getMonthlySchedule(
  now: Date
): MonthlySchedule {
  const month = now.getMonth();
  const year = now.getFullYear();

  const monthStart = new Date(
    year,
    month,
    1
  );

  const monthEnd = new Date(
    year,
    month + 1,
    0
  );

  let weekStart = new Date(
    year,
    month,
    1 - monthStart.getDay()
  );

  const weeks: Week[] = [];

  while(weekStart <= monthEnd) {
    const week: Week = {
      days: []
    };

    for(let i = 0; i < 7; ++i) {
      const day = new Date(
        weekStart.getFullYear(),
        weekStart.getMonth(),
        weekStart.getDate() + i
      );

      week.days.push(
        {
          date: day.getDate(),
          dayOfWeek: i,
          isInMonth: day.getMonth() === month
        }
      );
    }

    weeks.push(week);

    weekStart = new Date(
      weekStart.getFullYear(),
      weekStart.getMonth(),
      weekStart.getDate() + 7
    );
  }

  return {
    weeks
  };
}