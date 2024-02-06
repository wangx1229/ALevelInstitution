import { Card, Carousel, Flex, Image } from "antd";
import tokSrc from "../../assets/1.jpg";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import "./index.css";

function OverView() {
  return (
    <Flex className="OverView" vertical gap={160}>
      <Image src={tokSrc} width="80" alt="tok" preview={false} />

    

      <Flex justify="space-between" gap={30} className="advantage">
        <Card title="专业" style={{ width: "15vw" }}>
          <p>专业的教学团队，专业的授课体系</p>
          <p>专业的评估指标，专业的升学指导</p>
        </Card>
        <Card title="高效" style={{ width: "15vw" }} className="rotate8">
          <p>高效的教学模式，高效的学习计划</p>
          <p>高效的时间管理，高效的服务理念</p>
        </Card>
        <Card title="互动" style={{ width: "15vw" }}>
          <p>老师与学生的互动，学校与家长的互通</p>
          <p>学生与学生的互助，家长与家长的互联</p>
        </Card>
        <Card title="共享" style={{ width: "15vw" }} className="rotate-8">
          <p>共享丰富的资源，共享学习的心得</p>
          <p>共享成功的经验，共享收获的喜悦</p>
        </Card>
      </Flex>

      <Flex justify="space-between" gap={30} align="center" className="spacial">
        <Card title="定制课程" style={{ width: "15vw" }} className="rotate-8">
          ——高端VIP 一对一课程定制
        </Card>
        <Card title="标准课程" style={{ width: "15vw" }}>
          ——TOEFL、IELTS、SAT多元化选择
        </Card>
        <Card title="境外考试" style={{ width: "15vw" }} className="rotate8">
          ——资深顾问团队 全方位专业指导
        </Card>
        <Card title="升学指导" style={{ width: "15vw" }}>
          ——专业领队 正规资质
        </Card>
      </Flex>

      <Carousel
        className="overview-carousel"
        style={{ width: "80vw", background: "#00000038" }}
        autoplay
        fade
      >
        <Image src={carousel1} alt="carousel1" preview={false} />
        <Image src={carousel2} alt="carousel2" preview={false} />
        <Image src={carousel3} alt="carousel3" preview={false} />
        <Image src={carousel4} alt="carousel4" preview={false} />
      </Carousel>
    </Flex>
  );
}

export default OverView;
