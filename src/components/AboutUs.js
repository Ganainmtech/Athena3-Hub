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
              hoverable
              className="info-item">
              <div>
                <div>
                  <div className="info-position">{item.position}</div>
                  <div className="info-digest">{item.digest}</div>
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