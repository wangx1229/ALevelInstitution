import { Card, Flex } from "antd";
import Alice from "../../assets/Alice.jpg";
import Annie from "../../assets/Annie.jpg";
import Carol from "../../assets/Carol.jpg";
import Jasmine from "../../assets/Jasmine.jpg";
import Katherine from "../../assets/Katherine.jpg";
import Song from "../../assets/Song.jpg";
import Trista from "../../assets/Trista.jpg";
import Yuen from "../../assets/Yuen.jpg";
import "./index.css";

const { Meta } = Card;

function Team() {
  return (
    <Flex className="team" vertical gap={30}>
      <Flex justify="space-between" gap={30} align="center" className="spacial">
        <Card
          hoverable
          cover={<img alt="Yuen" src={Yuen} style={{ width: "18vw" }} />}
        >
          <Meta
            title="袁思聪-Yuen"
            description={
              <>
                <p>TOK联合创始人</p>
                <p>英国纽卡斯尔大学硕士</p>
                <p>教龄7年</p>
              </>
            }
          />
        </Card>

        <Card
          hoverable
          cover={<img alt="Song" src={Song} style={{ width: "18vw" }} />}
        >
          <Meta
            title="宋新宇-Song"
            description={
              <>
                <p>TOK联合创始人</p>
                <p>上海理工大学硕士</p>
                <p>教龄8年</p>
              </>
            }
          />
        </Card>

        <Card
          hoverable
          cover={<img style={{ width: "18vw" }} alt="Jasmine" src={Jasmine} />}
        >
          <Meta
            title="王雅馨-Jasmine"
            description={
              <>
                <p>TOK资深讲师</p>
                <p>澳洲阿德莱德大学双学士</p>
                <p>教龄6年</p>
              </>
            }
          />
        </Card>

        <Card
          hoverable
          cover={<img style={{ width: "18vw" }} alt="Trista" src={Trista} />}
        >
          <Meta
            title="郦梦鸽-Trista"
            description={
              <>
                <p>TOK资深讲师</p>
                <p>美国明尼苏达大学双学士</p>
                <p>教龄6年</p>
              </>
            }
          />
        </Card>
      </Flex>

      <Flex justify="space-between" gap={30} align="center" className="spacial">
        <Card
          hoverable
          cover={<img style={{ width: "18vw" }} alt="Carol" src={Carol} />}
        >
          <Meta
            title="谭文菁-Carol"
            description={
              <>
                <p>TOK资深讲师</p>
                <p>复旦大学学士</p>
                <p>教龄7年</p>
              </>
            }
          />
        </Card>

        <Card
          hoverable
          cover={<img style={{ width: "18vw" }} alt="Alice" src={Alice} />}
        >
          <Meta
            title="陈文婷-Alice"
            description={
              <>
                <p>TOK资深讲师</p>
                <p>美国密苏里大学硕士</p>
                <p>教龄9年</p>
              </>
            }
          />
        </Card>

        <Card
          hoverable
          cover={
            <img style={{ width: "18vw" }} alt="Katherine" src={Katherine} />
          }
        >
          <Meta
            title="王欣-Katherine"
            description={
              <>
                <p>TOK资深讲师</p>
                <p>英国阿斯顿大学学士</p>
                <p>教龄9年</p>
              </>
            }
          />
        </Card>
        <Card
          hoverable
          cover={<img style={{ width: "18vw" }} alt="Annie" src={Annie} />}
        >
          <Meta
            title="陈碧倩-Annie"
            description={
              <>
                <p>TOK资深讲师</p>
                <p>湖州师范大学大学</p>
                <p>教龄5年</p>
              </>
            }
          />
        </Card>
      </Flex>
    </Flex>
  );
}

export default Team;
