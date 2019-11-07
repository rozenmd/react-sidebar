import React from "react";
import styled from "@emotion/styled";

import Sidebar from "./Sidebar";

const RootLayout = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
`;

const Main = styled.div`
  flex: 1;
  min-width: 0;
  z-index: 0;
`;

const MainContent = styled.div`
  display: flex;
  padding: 16px;
`;

const Layout = ({ children }) => {
  return (
    <RootLayout>
      <Sidebar />
      <Main>
        <MainContent>{children}</MainContent>
      </Main>
    </RootLayout>
  );
};

export default Layout;
