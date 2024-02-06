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

const memberInfo = [
  {
    name: '袁思聪-Yuen',
    position: 'TOK联合创始人',
    education: '英国纽卡斯尔大学硕士',
    experience: '教龄7年',
    src: Yuen,
    key: 'Yuen',
  },
  {
    name: '宋新宇-Song',
    position: 'TOK联合创始人',
    education: '上海理工大学硕士',
    experience: '教龄8年',
    src: Song,
    key: 'Song',
  },
  {
    name: '王雅馨-Jasmine',
    position: 'TOK资深讲师',
    education: '澳洲阿德莱德大学双学士',
    experience: '教龄8年',
    src: Jasmine,
    key: 'Jasmine',
  },
  {
    name: '郦梦鸽-Trista',
    position: 'TOK资深讲师',
    education: '美国明尼苏达大学双学士',
    experience: '教龄6年',
    src: Trista,
    key: 'Trista',
  },
  {
    name: '谭文菁-Carol',
    position: 'TOK资深讲师',
    education: '复旦大学学士',
    experience: '教龄7年',
    src: Carol,
    key: 'Carol',
  },
  {
    name: '陈文婷-Alice',
    position: 'TOK资深讲师',
    education: '美国密苏里大学硕士',
    experience: '教龄9年',
    src: Alice,
    key: 'Alice',
  },
  {
    name: '王欣-Katherine',
    position: 'TOK资深讲师',
    education: '英国阿斯顿大学学士',
    experience: '教龄9年',
    src: Katherine,
    key: 'Katherine',
  },
  {
    name: '陈碧倩-Annie',
    position: 'TOK资深讲师',
    education: '湖州师范大学大学',
    experience: '教龄5年',
    src: Annie,
    key: 'Annie',
  },

]

function Team() {
  return (
    <Flex className="team" vertical gap={16}>
      <Flex justify="space-between" gap={16} align="flex-start" wrap="wrap">
        {
          memberInfo.map(member => (
            <Card
            key={member.key}
            hoverable
            style={{ width: "18vw" }}
            cover={<img alt={member.key} src={member.src}  />}
          >
            <Meta
              title={member.name}
              description={
                <>
                  <p>{member.position}</p>
                  <p>{member.education}</p>
                  <p>{member.experience}</p>
                </>
              }
            />
          </Card>
          ))
        }
       
      </Flex>
    </Flex>
  );
}

export default Team;
