const projectsData = [
  {
    title: 'NowOrLater',
    description:
      'Mobile messenger app that enables conditional SMS based on geolocation and/or timing',
    list: [
      'Designed responsive front-end using React and react-native enabled user authentication with firebase authentication',
      'Utilized Google maps API to enable geolocation and tracking of distance between destination and current location',
      'Implemented Firebase and firestore to store messages and allow for real-time interaction',
    ],
    video: 'VRd2dxdrOvI',
    image: null,
  },
  {
    title: 'Stock Analytics',
    description:
      'Analytical web app that renders real-time stock prices on to line charts with trend line overlay capabilities',
    list: [
      'Constructed front-end search bar using React form to search for companies and Semantic UI to create responsive layout',
      'Employed IEX API to filter company stock prices, and visualized real-time data using react-vis and socket.io',
      'Implemented time-series analysis to capture moving averages and filter data being relayed to trend lines',
    ],
    video: null,
    image: require('../image/image-placeholder1.png'),
  },
];

export default projectsData;
