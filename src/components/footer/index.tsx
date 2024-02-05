import { Flex } from "antd";
import "./index.css";

function Footer() {
  return (
    <Flex className="footer" justify="space-between">
      <Flex vertical>
        <div>地址：上海市长宁区宣化路300号华宁国际中区1306A</div>
        <div>联系电话：(021) 6147 1989</div>
        <div>邮件：sicong.yuan@tokacademy.cn</div>
      </Flex>

      <Flex vertical>
        <div>Copyright ©2024上海途课文化发展有限公司 版权所有</div>
      </Flex>
    </Flex>
  );
}

export default Footer;
