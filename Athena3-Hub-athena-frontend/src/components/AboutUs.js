import * as allList from "../list.js"
function AboutUs () {
  const list = allList.aboutUsList
  return (
    <div>
      <h1>about us</h1>
      <div className='info'>
        <div className='info-detail'>{list.map(item => (
          (
            <div key={item.id} className='info-item'>
              <div>{item.img}</div>
              <div>
                <div >
                  <div>{item.name}</div>
                  <div>{item.digest}</div>
                </div>
              </div>
            </div>)
        ))}</div>
      </div>
    </div>
  )
}
export default AboutUs;