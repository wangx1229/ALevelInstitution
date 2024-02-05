import { Flex, Image } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./index.css";

function Header() {
  return (
    <Flex className="header" justify="space-between" align="center">
      <Image src={logo} width="120px" alt="logo" preview={false} />

      <Flex gap={20}>
        <Link className="button" to="/">
          途课简介
        </Link>
        <Link className="button" to="/language">
          语言考试介绍
        </Link>
        <Link className="button" to="/team">
          师资团队
        </Link>
        <Link className="button" to="/whyUs">
          WHY US
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
