export const GetIconSource = (artwork) => {
  if (artwork.isCurrentlyAccessible) {
    if (!!artwork.visitedOn) {
      switch (artwork.type) {
        case 'Graffiti':
          return require('../assets/graffiti-visited-96.png');
        case 'Gemälde':
          return require('../assets/easel-visited-96.png');
        default:
          return require('../assets/sculpture-visited-96.png');
      }
    } else {
      switch (artwork.type) {
        case 'Graffiti':
          return require('../assets/graffiti-96.png');
        case 'Gemälde':
          return require('../assets/easel-96.png');
        default:
          return require('../assets/sculpture-96.png');
      }
    }
  } else {
    switch (artwork.type) {
      case 'Graffiti':
        return require('../assets/graffiti-disabled-96.png');
      case 'Gemälde':
        return require('../assets/easel-disabled-96.png');
      default:
        return require('../assets/sculpture-disabled-96.png');
    }
  }
};

export const GetGermanDateString = (date) => {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
