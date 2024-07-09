import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Button, Drawer } from 'antd';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Retrieve user data and token from local storage
  const storedUserData = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload('/');
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <Link to="/">
            <HomeOutlined style={{ fontSize: '24px', color: '#fff' }} />
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu-horizontal">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/listings">Listings</Link>
          </Menu.Item>
        </Menu>
        <div className="navbar-user">
          {storedUserData && storedToken ? (
            <div className="navbar-user-info">
              <div>
                
                <span className="user-name">Welcome , {storedUserData.username}</span>

              </div>
              <div>
              <Button onClick={handleLogout} style={{ marginLeft: '10px' }}>
                Logout
              </Button>
              </div>
            </div>
          ) : (
            <div className="login-and-register">
              <Link to="/login">
                <Button type="primary">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>
        <Button className="menu-button" icon={<MenuOutlined />} onClick={toggleDrawer} />
      </Header>
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
        className="drawer-menu"
      >
        <Menu mode="vertical">
          <Menu.Item key="1">
            <Link to="/" onClick={toggleDrawer}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/listings" onClick={toggleDrawer}>Listings</Link>
          </Menu.Item>
          {storedUserData && storedToken ? (
            <Menu.Item key="3" onClick={handleLogout}>
              Logout
            </Menu.Item>
          ) : (
            <>
              <Menu.Item key="4">
                <Link to="/login" onClick={toggleDrawer}>Login</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/register" onClick={toggleDrawer}>Register</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;
