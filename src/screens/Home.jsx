import React from 'react';
import 'antd/dist/antd.css';
import './Home.css';
import {
  Button, Layout, Menu, Typography,
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormCard from '../components/formInput/FormInput';
import Maps from '../components/mapComponent/Map';

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  collapsed: state.collapsed,
});

// Mapping each dispatch to a prop
const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => {
    dispatch({ type: 'Login' });
  },
  toggleLogout: () => {
    dispatch({ type: 'Logout' });
  },
  collapse: () => {
    dispatch({ type: 'collapse' });
  },
  notCollapse: () => {
    dispatch({ type: '!collapse' });
  },

});

const {
  Header, Footer, Sider, Content,
} = Layout;
// sider component
function SiderDemo(props) {
  const {
    toggleLogin, toggleLogout, collapse, notCollapse, isLogin, collapsed,
  } = props;
  return (
    // layout using Ant.design
    <Layout>
      <Sider style={{ backgroundColor: 'grey' }} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"><h1 id="menu">Menu</h1></div>
        <Menu style={{ backgroundColor: 'grey' }} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            My Account
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Get In Touch
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background-header" style={{ padding: 0 }}>
          {!collapsed ? (
            <MenuFoldOutlined
              style={{
                color: 'white', position: 'absolute', left: '10%', top: '3%', width: '8%',
              }}
              onClick={notCollapse}
            />
          ) : (
            <MenuUnfoldOutlined
              style={{
                color: 'white', position: 'absolute', left: '2%', top: '3%', width: '8%', height: '100%',
              }}
              onClick={collapse}
            />
          ) }
          {!isLogin ? (
            <Button
              style={{
                position: 'absolute', right: '1%', top: '2%', width: '8%', borderRadius: '8px',
              }}
              onClick={toggleLogin}
            >
              Login
            </Button>
          ) : (
            <>
              <Button
                style={{
                  position: 'absolute', right: '10%', top: '2%', width: '8%', borderRadius: '8px',
                }}
                onClick={toggleLogout}
              >
                Logout
              </Button>
              <Button style={{
                position: 'absolute', right: '1%', top: '2%', width: '8%', borderRadius: '8px',
              }}
              >
                My Profile
              </Button>
            </>
          )}
        </Header>
        {/* main content */}
        <Content
          className="site-layout-background"
          style={{
            minHeight: 280,
            maxHeight: '800px',
          }}
        >
          <FormCard />
          <Maps />
        </Content>
        <Footer className="site-layout-background-footer" style={{ padding: 10 }}>
          <Typography style={{ color: 'white', textAlign: 'center' }}>Copyrights Reserved</Typography>
        </Footer>
      </Layout>
    </Layout>
  );
}

// setting proptypes
SiderDemo.propTypes = {
  toggleLogin: PropTypes.func.isRequired,
  toggleLogout: PropTypes.func.isRequired,
  collapse: PropTypes.string.isRequired,
  notCollapse: PropTypes.string.isRequired,
  isLogin: PropTypes.string.isRequired,
  collapsed: PropTypes.string.isRequired,
};
// connecting to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);
