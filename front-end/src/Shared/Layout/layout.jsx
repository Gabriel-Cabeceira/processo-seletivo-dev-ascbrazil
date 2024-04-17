import { Content } from "../Components/Content/Content";
import { Header } from "../Components/Header/Header";
import { SideBar } from "../Components/SideBar/SideBar";



export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <Content>
        {children}
      </Content>
    </div>
  );
};
