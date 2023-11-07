import * as allList from "../list.js"

function Queries (params) {
  const questionList = allList.questionList
  return (
    <>
      <h1>
        Popular Queries Unraveled
      </h1>
      <div className='queries'>{questionList.map(item => (
        <div className='queries-item'>
          <div>{item.question}</div>
          <div>{item.answer}</div>
        </div>
      )
      )}</div>
    </>
  )
}

export default Queries;