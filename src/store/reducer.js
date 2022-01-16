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
   
}

const reducer = (state=initialMapState, data) => {
    switch(data.type){
        case 'India':
            return {...state, latitude: 20.5937, longitude:  78.9629, currency: '\u20A8 (Rupees)', speed: 'KM/Hr', distance: 'KM', volume: 'Litres', timezone: 'GMT+5:30'}    
        case 'United Kingdom':
            return {...state, latitude: 55.3781, longitude: 3.4360, currency: '	\u00A3 (Pounds)', speed: 'MPH (miles per hours)', distance: 'M (Miles)', volume: 'pint, quart, gallon', timezone: 'GMT'}    
        case 'United States':
            return {...state, latitude: 37.0902, longitude: 95.7129, currency: '\u0024 (Dollars)', speed: 'MPH (miles per hours)', distance: 'M (Miles)', volume: 'pint, quart, gallon', timezone: 'GMT-5 to GMT-10'}        
        case 'Login':
            return {...state, isLogin: true}
        case 'Logout':
            return {...state, isLogin: false}
        case 'collapse':
            return {...state, collapsed: false}
        case '!collapse':
            return {...state, collapsed: true}
        case 'visible':
            return {...state, visible: true}
        case '!visible':
            return {...state, visible: false}
        default:
            return state;
    }
}
export default reducer;