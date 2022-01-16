import React from "react";
import "antd/dist/antd.css";
import "./Home.css";
import { Button, Layout, Menu, Typography } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import FormCard from "../components/formInput/FormInput.js";
import Maps from "../components/mapComponent/Map.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({   
    isLogin: state.isLogin,
    collapsed: state.collapsed,
  })

  const mapDispatchToProps = (dispatch) => ({
      toggleLogin: () => {          
          dispatch({type: 'Login'})
      },
      toggleLogout: () => {        
          dispatch({type: 'Logout'})
      },
      collapse: () => {        
          dispatch({type: 'collapse'})
      },
      notCollapse: () => {
        dispatch({type: '!collapse'})
      },
           

  })

const { Header, Footer,  Sider, Content } = Layout;
const SiderDemo = (props) => {
  const {toggleLogin, toggleLogout, collapse, notCollapse, isLogin, collapsed }= props;
    return (
      <Layout>
        <Sider style={{backgroundColor: 'grey'}} trigger={null} collapsible collapsed={collapsed}>
          <div className="logo"><h1 id="menu">Menu</h1></div>
          <Menu style={{backgroundColor: 'grey'}} theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              My Account
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Get In Touch
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background-header" style={{ padding: 0 }}>
            {!collapsed ? <MenuFoldOutlined style={{color: 'white', position: 'absolute', left: '10%', top: '3%', width: '8%'}} onClick={notCollapse}/> : <MenuUnfoldOutlined style={{color: 'white', position: 'absolute', left: '2%', top: '3%', width: '8%', height: '100%'}} onClick={collapse}/> }  
            {!isLogin ? <Button style={{position: 'absolute', right: '1%', top: '2%', width: '8%', borderRadius: '8px'}} onClick={toggleLogin}>Login</Button> : <><Button style={{position: 'absolute', right: '10%', top: '2%', width: '8%', borderRadius: '8px'}} onClick={toggleLogout}>Logout</Button><Button style={{position: 'absolute', right: '1%', top: '2%', width: '8%', borderRadius: '8px'}}>My Profile</Button></>}           
          </Header>
          <Content
            className="site-layout-background"
            style={{             
              minHeight: 280,
              maxHeight: '800px'
            }}
          >
            <FormCard />            
            <Maps/>
          </Content>
          <Footer className="site-layout-background-footer" style={{ padding: 10 }}>
            <Typography style={{color: 'white', textAlign: 'center'}}>Copyrights Reserved</Typography>
          </Footer>
        </Layout>
      </Layout>
    ) 
}
export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);
