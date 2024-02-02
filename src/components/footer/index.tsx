import { Flex } from "antd";
import "./index.css";

function Footer() {
  return (
    <Flex className="footer" justify="space-between">
      <Flex vertical>
        <div>地址：xxx</div>
        <div>联系方式： xxx</div>
        <div>邮件：xxx</div>
      </Flex>

      <Flex vertical>
        <div>
          © Copyright 2016-2024上海xxxx版权所有 Shanghaixxx.All Rights Reserved
        </div>
        <div>沪ICP备18046280号-1</div>
      </Flex>
    </Flex>
  );
}

export default Footer;
