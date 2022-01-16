// Store to maintain the states of various components
const initialMapState = {
  latitude: '20.5937',
  longitude: '78.9629',
  currency: '',
  speed: '',
  distance: '',
  volume: '',
  timezone: '',
  isLogin: false,
  collapsed: false,
  visible: false,

};
// reducer function
const reducer = (state = initialMapState, data = {}) => {
  switch (data.type) {
    case 'India':
      return {
        ...state, latitude: 20.5937, longitude: 78.9629, currency: '\u20A8 (Rupees)', speed: 'KM/Hr', distance: 'KM', volume: 'Litres', timezone: 'GMT+5:30',
      };
    case 'United Kingdom':
      return {
        ...state, latitude: 51.5072, longitude: 0.1276, currency: '\u00A3 (Pounds)', speed: 'MPH (miles per hours)', distance: 'M (Miles)', volume: 'pint, quart, gallon', timezone: 'GMT',
      };
    case 'United States':
      return {
        ...state, latitude: 38.9072, longitude: -77.0369, currency: '\u0024 (Dollars)', speed: 'MPH (miles per hours)', distance: 'M (Miles)', volume: 'pint, quart, gallon', timezone: 'GMT-5 to GMT-10',
      };
    case 'Login':
      return { ...state, isLogin: true };
    case 'Logout':
      return { ...state, isLogin: false };
    case 'collapse':
      return { ...state, collapsed: false };
    case '!collapse':
      return { ...state, collapsed: true };
    case 'visible':
      return { ...state, visible: true };
    case '!visible':
      return { ...state, visible: false };
    default:
      return state;
  }
};
export default reducer;
