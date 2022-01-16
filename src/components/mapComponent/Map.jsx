import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup, useMap,
} from 'react-leaflet';
import './Map.css';
import { connect } from 'react-redux';
import { Icon } from 'leaflet';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

// mapping each state value to prop
const mapStateToProps = (state) => ({
  latitude: state.latitude,
  longitude: state.longitude,
  currency: state.currency,
  speed: state.speed,
  distance: state.distance,
  volume: state.volume,
  timezone: state.timezone,
});
// to re-center the map on change
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
}

// map component
function Maps(props) {
  const {
    latitude, longitude, currency, speed, distance, volume, timezone,
  } = props;
  const icon = new Icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [35, 35],
  });
  return (
    <div className="map">
      {/* osm using leflet.js */}
      <MapContainer
        center={[latitude, longitude]}
        zoom={5}
        scrollWheelZoom
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[
            latitude,
            longitude,
          ]}
          icon={icon}
        >
          <Popup>
            <Typography>
              <span className="infoCard">Currency: </span>
              {currency}
            </Typography>
            <Typography>
              <span className="infoCard">Unit of Speed: </span>
              {speed}
            </Typography>
            <Typography>
              <span className="infoCard">Unit of Distance: </span>
              {distance}
            </Typography>
            <Typography>
              <span className="infoCard">Unit of Volume: </span>
              {volume}
            </Typography>
            <Typography>
              <span className="infoCard">Timezone info: </span>
              {timezone}
            </Typography>
          </Popup>
        </Marker>
        <ChangeMapView coords={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}
// defining prop type
Maps.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
};
// connecting the component to the redux store
export default connect(mapStateToProps)(Maps);
