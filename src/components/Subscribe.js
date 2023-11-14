import { Input, Button } from 'antd'
function Subscribe () {
  return (
    <div className='subscribe'>
      <div className="mainTitle heartbeat-element">Stay in the Loop</div>
      <div className='subscribe-input'><Input size="large" placeholder="Please input your e-mail" /></div>
      <div>
        <Button type="primary" size={"large"}>
          Subscribe
        </Button>
      </div>
    </div>
  )
}
export default Subscribe
