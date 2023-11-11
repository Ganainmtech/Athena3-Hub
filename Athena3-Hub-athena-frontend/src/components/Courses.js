import * as allList from "../list.js";
import { Card } from 'antd';
import img from '../assets/pyteal.png';
const { Meta } = Card;



function Courses () {
  const list = allList.coursesList;


  return (
    <>
      {/* <h1>Popular Courses</h1> */}
      <div className="courses">
        <div className="courses-detail">
          {list.map((item) => (
            <a href={item.link} key={item.id} target="_blank" rel="noopener noreferrer">
              <Card
                key={item.id} // 使用课程的唯一标识作为 key
                hoverable
                className="courses-item"

                cover={<img alt={item.title} src={img} />}
              >
                <Meta title={item.title} description={item.digest} />
              </Card>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
