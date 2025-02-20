export default function getSeason(date) {
  if (typeof (date) == 'undefined')
    return 'Unable to determine the time of year!'

  try {
    date.toUTCString()
  }
  catch {
    throw new Error('Invalid date!')
  }
  switch (date.getMonth()) {
    case 0: case 1: case 11: {
      return 'winter';
    }
    case 2: case 3: case 4: {
      return 'spring';
    }
    case 5: case 6: case 7: {
      return 'summer';
    }
    case 8: case 9: case 10: {
      return 'autumn';
    }
  }
}
