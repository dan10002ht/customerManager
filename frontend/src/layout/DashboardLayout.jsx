import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

const navigationItems = [
  {
    key: "/customer/create",
    label: "Thêm khách hàng",
    path: "/customer/create",
  },
  {
    key: "/customer/list",
    label: "Danh sách khách hàng",
    path: "/customer/list",
  },
];

const DashboardLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/customer/create"]}
          items={navigationItems}
          onSelect={(info) => {
            navigate(info.key);
          }}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Content
          style={{
            margin: "24px 16px 0",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
