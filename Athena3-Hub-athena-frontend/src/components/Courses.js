import * as allList from "../list.js"
function Courses () {
  const list = allList.coursesList
  return (
    <>
    <h1> popular courses</h1>
    <div className='courses'>
      <div className='courses-detail'>
        {list.map(item => (<div className='courses-item'><div className='course-img'>img</div><div><div>{item.title}</div><div>{item.digest}</div></div></div>))}
      </div>
    </div></>
  )
}
export default Courses;