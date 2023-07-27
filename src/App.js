import "./App.css";
import { useState } from "react";
import { OSMMap, InputForm, RegionInfo } from "./components";

import { Layout, Button, Tooltip, Space } from "antd";

import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle = {
  textAlign: "center",
  minHeight: "auto",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
  position: "relative",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Header style={headerStyle}>
          <Space style={{ float: "right" }}>
            <Tooltip title="User Profile">
              <Button
                type="primary"
                shape="circle"
                icon={<UserOutlined />}
              ></Button>
            </Tooltip>
            <Button type="primary" size="small">
              Logout
            </Button>
          </Space>
        </Header>
        <Layout hasSider>
          <Sider
            style={siderStyle}
            collapsible="true"
            trigger={null}
            collapsed={collapsed}
          >
            <div
              className="custom-sider-trigger"
              onClick={handleCollapse}
              style={{ cursor: "pointer" }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            {!collapsed && <>Mapup Assingment</>}
          </Sider>
          <Content style={contentStyle}>
            <Space
              style={{
                position: "absolute",
                top: 0,
                right: 10,
                zIndex: 1,
              }}
              direction="vertical"
            >
              <InputForm />
              <RegionInfo />
            </Space>
            <OSMMap />
          </Content>
        </Layout>
        <Footer style={footerStyle}></Footer>
      </Layout>
    </div>
  );
}

export default App;
