import { Flex } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import viteLogo from "/vite.svg";

function Header() {
  return (
    <Flex className="header" justify="space-between" align="center">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <Flex gap={20}>
        <Link className="button" to="/">
          首页
        </Link>
        <Link className="button" to="/institution">
          机构
        </Link>
        <Link className="button" to="/team">
          成员
        </Link>
        <Link className="button" to="/guidance">
          教学
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
