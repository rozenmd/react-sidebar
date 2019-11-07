import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { DashboardIcon } from "../Icons";

const SidebarContainer = styled.div`
  display: flex;
  height: 100vh;
  left: 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const ResponsiveSidebar = styled.div`
  @media (max-width: 960px) {
    width: 64px;
  }
  background-color: #ffffff;
  box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
  position: relative;
  transition: background-color 300ms cubic-bezier(0.2, 0.6, 0.6, 1),
    width 150ms cubic-bezier(0.2, 0.6, 0.6, 1);
  width: ${props => (props.sidebarStatus === "OPEN" ? "256px" : "64px")};
`;

const SidebarContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  overflow-y: auto;
  padding: 8px;
`;

const expanderOpen = () => css`
  background: #24124d;
  content: "";
  height: 10px;
  left: calc(50% - 5px);
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-1px, -5px);
  width: 2px;
`;
const expanderClosed = () => css`
  background: #24124d;
  content: "";
  height: 10px;
  left: calc(50% + 5px);
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-1px, -5px);
  width: 2px;
`;

const Expander = styled.span`
  align-items: center;
  background: rgba(0, 0, 0, 0);
  bottom: 0;
  cursor: pointer;
  display: flex;
  opacity: 0;
  position: absolute;
  right: -9px;
  top: 0;
  transition: opacity 150ms cubic-bezier(0.2, 0.6, 0.6, 1);
  width: 18px;
  &:hover {
    opacity: 1;
  }
  &:before {
    ${props => {
      return props.sidebarStatus === "OPEN" ? expanderOpen : expanderClosed;
    }}
  }
  &:after {
    background: transparent;
    bottom: 0;
    content: "";
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-1px);
    width: 2px;
  }
`;

const StyledLink = styled.a`
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 8px;
  color: #a7a0b8;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  outline: 0;
  padding: 8px;
  text-align: left;
  transition: background-color 150ms cubic-bezier(0.2, 0.6, 0.6, 1),
    box-shadow 150ms cubic-bezier(0.2, 0.6, 0.6, 1),
    color 150ms cubic-bezier(0.2, 0.6, 0.6, 1);
  width: 100%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
    color: #ffffff;
  }
`;

const SidebarTop = styled.div`
  margin-bottom: 16px;
`;

const SidebarIcon = styled.span`
  line-height: 0;
  margin-right: 8px;
`;

const SidebarText = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Sidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useState("OPEN");
  const toggleSidebar = () => {
    if (sidebarStatus === "OPEN") {
      setSidebarStatus("CLOSED");
    } else if (sidebarStatus === "CLOSED") {
      setSidebarStatus("OPEN");
    }
  };
  return (
    <SidebarContainer>
      <ResponsiveSidebar sidebarStatus={sidebarStatus}>
        <SidebarContents>
          <SidebarTop>
            <StyledLink>
              <SidebarIcon>
                <DashboardIcon />
              </SidebarIcon>
              <SidebarText>All Sites</SidebarText>
            </StyledLink>
          </SidebarTop>
        </SidebarContents>
        <Expander onClick={toggleSidebar} sidebarStatus={sidebarStatus} />
      </ResponsiveSidebar>
    </SidebarContainer>
  );
};

export default Sidebar;
