import * as allList from "../list.js"
import React from 'react'
import { Button} from 'antd'

function Certificates () {
  const list = allList.certificatesList

  return (
    <div className='certificates'>
      {list.map(item => (
        <Button
          key={item.id}
          block
          className="certificates-list"
        >
          <div className="certificates-name">{item.name}</div>
          <div className="certificates-subname">{item.subName}</div>
          {/* id is not displayed on the button */}
        </Button>
      ))}
    </div>
  )
}

export default Certificates