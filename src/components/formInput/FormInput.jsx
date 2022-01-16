import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Drawer, Button, Card, Input, Select,
} from 'antd';
import './FormInput.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const { Option } = Select;

function FormInput(props) {
  const [country, setCountry] = useState('');
  const countries = React.useMemo(() => ['India', 'United Kingdom', 'United States'], []);
  const {
    cityChange, showDrawer, onClose, visible,
  } = props;

  return (
    <>
      {/* open up the drawer */}
      <Button
        style={{
          position: 'absolute', right: '1%', top: '10%', zIndex: 1000,
        }}
        type="primary"
        onClick={showDrawer}
      >
        Search Panel
      </Button>
      {/* loads the drawer to choose a country map to load */}
      <Drawer title="Find your next adventure here!" placement="right" onClose={onClose} visible={visible}>
        <Card title="Select A Country" bordered={false} style={{ width: 300 }}>
          <Input.Group className="site-card-border-less-wrapper">
            <Select
              defaultValue={0}
              onChange={(e) => {
                setCountry(countries[e]);
              }}
              style={{ minWidth: '240px', maxWidth: '240px' }}
            >
              {countries.map((item, index) => <Option value={index}>{item}</Option>)}
            </Select>
          </Input.Group>
          <br />
          <Button
            onClick={() => cityChange(country)}
            type="button"
            style={{
              backgroundColor: '#1890FF', borderRadius: '5px', width: '50%', color: 'white',
            }}
          >
            Load
          </Button>
          <br />
        </Card>
      </Drawer>
    </>
  );
}

const mapStateToProps = (state) => ({
  visible: state.visible,
});

// mapping each dispatch to props
const mapDispatchToProps = (dispatch) => ({
  cityChange: (country) => {
    dispatch({ type: country });
  },
  showDrawer: () => {
    dispatch({ type: 'visible' });
  },
  onClose: () => {
    dispatch({ type: '!visible' });
  },
});
// defining the prop type
FormInput.propTypes = {
  cityChange: PropTypes.func.isRequired,
  showDrawer: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
// connecting the component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
