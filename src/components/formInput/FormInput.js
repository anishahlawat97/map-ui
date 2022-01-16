import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import './FormInput.css';
import { Button, Card, Input, Select } from 'antd';
import { connect } from 'react-redux';
const { Option } = Select;   

  const FormInput = (props) => {
    const [country, setCountry] = useState('');
    const countries = React.useMemo(()=>['India', 'United Kingdom', 'United States'], []);
    const countryHandler = (e) => {
        setCountry(e.target.value)
        console.log(country)
    }
    const{ cityChange, showDrawer, onClose, visible } = props;

    return (
        <>
        <Button style={{position: 'absolute', right: '1%', top: '10%', zIndex: 1000}} type="primary" onClick={showDrawer}>
            Search Panel
        </Button>
        <Drawer title="Find your next adventure here!" placement="right" onClose={onClose} visible={visible}>
        <Card title="Select A Country" bordered={false} style={{ width: 300 }}>
                    <Input.Group className='site-card-border-less-wrapper' >               
                        <Select onChange={(e)=>{
                            // console.log(e)
                            setCountry(countries[e])
                            }} style={{ minWidth: '240px', maxWidth: '240px' }}>
                                {
                                    countries.map((item, index) => <Option value={index}>{item}</Option>)
                                }
                        </Select>                  
                    </Input.Group>
                    <br/>
                    <Button onClick={()=>cityChange(country)} type='button' style={{ backgroundColor: '#1890FF', borderRadius: '5px', width: '50%', color: 'white' }}>Load</Button>
                    <br />               
                </Card>
        </Drawer>
        </>
    );  
};

const mapStateToProps = (state) => ({
    // country: state.country,
    visible: state.visible,
})

const mapDispatchToProps = (dispatch) => ({      
    cityChange: (country) => { 
        dispatch({type: country})
    },
    showDrawer: () => {
        dispatch({type: 'visible'})
    },
    onClose: () => {
        dispatch({type: '!visible'})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);