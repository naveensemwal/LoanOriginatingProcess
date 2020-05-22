import React, { Suspense } from "react";
import { Layout, Menu } from "antd";
import {
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Redirect, Route, Switch } from 'react-router-dom';
import navigation from '../../_nav';
import routes from '../../routes';
import "antd/dist/antd.css";
import "./DefaultLayout.css"
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class DefaultLayout2 extends React.Component {

  state = {
    collapsed: false
  };

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  getMenuContent(menuItem) {
    return <Link to={menuItem.url}>{menuItem.name}</Link>
  }

  getMenuItem(menuItem, index) {
    if (menuItem.children) {
      return <SubMenu key={index} icon={<MailOutlined />} title={menuItem.name}>
        {menuItem.children.map((submenu, subindex) => {
          return <Menu.Item key={`${menuItem.name + subindex}`} icon={<MailOutlined />}>
            {this.getMenuContent(submenu)}
          </Menu.Item>
        })}
      </SubMenu>
    }
    else {
      return <Menu.Item key={index} icon={<MailOutlined />}>
        {this.getMenuContent(menuItem)}
      </Menu.Item>
    }
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Link to="/dashboard">
            <div className={`logo ${this.state.collapsed ? "min-logo" : "max-logo"}`}>
              {this.state.collapsed ? <img src={sygnet} width="40px" height="40px" className="img-avatar" alt="admin@bootstrapmaster.com" /> :
                <img src={logo} className="img-avatar" alt="admin@bootstrapmaster.com" />}
            </div>
          </Link>

          <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
            {navigation.navs.map((menuItem, index) => {
              if (menuItem.itemGroup.length) {
                return <Menu.ItemGroup key="g1" title={menuItem.name}>
                  {menuItem.itemGroup.map((itemGroup, index) => {
                    return this.getMenuItem(itemGroup, `ig-${index}`)
                  }
                  )}
                </Menu.ItemGroup>
              }
              else {
                return this.getMenuItem(menuItem, index)

              }

            })}

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <DefaultHeader onLogout={e => this.signOut(e)} />

          </Header>
          <Content style={{ margin: "16px" }}>
            <Suspense fallback={this.loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </Content>
          <Footer >
            <DefaultFooter />
          </Footer>
        </Layout>
      </Layout >
    );
  }
}
