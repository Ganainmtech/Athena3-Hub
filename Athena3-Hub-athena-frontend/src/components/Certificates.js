import * as allList from "../list.js";
function Certificates () {
  const list = allList.certificatesList;
  return (
    <>
      <div className='certificates'>
        {list.map(item => (
          <div className='certificates-list' key={item.id}>
            <div>{item.icon}</div>
            <div>
              <div>{item.name}</div>
              <div>{item.subName}</div></div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Certificates;