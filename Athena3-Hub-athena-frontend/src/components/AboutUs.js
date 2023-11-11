import * as allList from "../list.js";
import { Card, Col, Row } from 'antd';

function AboutUs () {
  const list = allList.aboutUsList;
  return (
    <div className="info">
      <Row gutter={16}>
        {list.map((item) => (
          <Col key={item.id} span={8}>
            <Card title={item.name}
              // bordered={false}
              hoverable
              className="info-item">
              <div>{item.img}</div>
              <div>
                <div>
                  <div>{item.name}</div>
                  <div>{item.digest}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default AboutUs;