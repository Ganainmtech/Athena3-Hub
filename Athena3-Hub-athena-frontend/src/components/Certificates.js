import * as allList from "../list.js"
function Certificates () {
  const list = allList.certificatesList
  return (
    <div className='certificates'>
      {list.map(item => (
        <Button
          key={item.id}
          block
          className='certificates-list'
        >
          {/* <div>{item.icon}</div> */}
          <div>
            <div className='certificates-name'>{item.name}</div>
            <div className='certificates-subname'>{item.subName}</div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Certificates;