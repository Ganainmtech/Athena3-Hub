import * as allList from "../list.js";
import { Card, ConfigProvider } from 'antd';

function Queries (params) {
  const questionList = allList.questionList;
  return (
    <div className='queries'>
      <div className="mainTitle">
        Popular Queries Unraveled
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#F3EDFC",
            colorBorderSecondary: "null",
            borderRadiusLG: 20,
            boxShadowTertiary: "0 1px 2px 0 rgba(#3334db, #bacff5, #87dfdc, 0.03)"
          },
        }}
      >
        <Card bordered={false} >
          <div className="queries-items">{questionList.map(item => (
            <Card.Grid bordered={false} className='queries-item'>
              <div className="queries-item-title subtitle">{item.question}</div>
              <div className="queries-item-answer">{item.answer}</div>
            </Card.Grid>
          )
          )}</div>
        </Card>
      </ConfigProvider>
    </div>
  );
}

export default Queries;