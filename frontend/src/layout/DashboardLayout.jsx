import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

const navigationItems = [
  {
    key: "/",
    label: "Trang chủ",
    path: "/",
  },
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

const DashboardLayout = ({ children, removePadding = false }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: removePadding ? "hidden" : "auto",
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
          defaultSelectedKeys={["/"]}
          selectedKeys={[
            ["/customer/create", "/customer/list"].includes(
              window.location.pathname
            )
              ? window.location.pathname
              : window.location.pathname.includes("/customer/")
              ? "/customer/create"
              : "",
          ]}
          items={navigationItems}
          onSelect={(info) => navigate(info.key)}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
          height: "unset",
        }}
      >
        <Content
          style={{
            margin: removePadding ? "0" : "24px 16px 0",
            overflowY: removePadding ? "hidden" : "auto",
          }}
        >
          <div
            style={{
              padding: removePadding ? 0 : 24,
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
