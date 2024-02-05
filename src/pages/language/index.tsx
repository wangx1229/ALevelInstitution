import { Flex, Image } from "antd";
import language1 from "../../assets/language1.jpg";
import language2 from "../../assets/language2.jpg";
import "./index.css";

function Language() {
  return (
    <Flex className="language" vertical gap={30}>
      <Image src={language1} width="100%" alt="tok" preview={false} />

      <Image src={language2} width="100%" alt="tok" preview={false} />
    </Flex>
  );
}

export default Language;
