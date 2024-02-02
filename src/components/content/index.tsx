import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import "./index.css";

function Content() {
  return (
    <Flex className="content">
      <Outlet />
    </Flex>
  );
}

export default Content;
