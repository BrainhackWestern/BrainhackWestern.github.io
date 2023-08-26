const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const formatDate = (date: Date) => {
  const dayName = days[date.getDay()];
  const month = months[date.getMonth()];
  return `${dayName}, ${month} ${date.getDate()}`;
};

export default formatDate;
