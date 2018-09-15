const humanReadableTime = time => {
  const t = time.split(' ');
  let res = '';
  switch (t[1]) {
    case 's':
      res = 'ثانیه';
      break;

    case 'm':
      res = 'دقیقه';
      break;

    case 'h':
      res = 'ساعت';
      break;

    case 'd':
      res = 'روز';
      break;

    case 'w':
      res = 'هفته';
      break;
  }
  return `${t[0]} ${res} قبل`;
};

export default humanReadableTime;
