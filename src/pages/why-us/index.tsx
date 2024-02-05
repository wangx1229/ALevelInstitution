import { Flex, Image } from "antd";
import whyus1 from "../../assets/whyus1.jpg";
import whyus2 from "../../assets/whyus2.jpg";
import whyus3 from "../../assets/whyus3.jpg";

import "./index.css";

function WhyUs() {
  return (
    <Flex className="whyUs" vertical gap={30}>
      <Image src={whyus1} width="100%" alt="whyus1" preview={false} />
      <Image src={whyus2} width="100%" alt="whyus2" preview={false} />
      <Image src={whyus3} width="100%" alt="whyus3" preview={false} />
    </Flex>
  );
}

export default WhyUs;
