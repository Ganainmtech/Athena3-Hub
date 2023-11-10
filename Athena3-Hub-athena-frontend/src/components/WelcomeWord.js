// import * as allList from "../list.js"
// Introduce
import cat from "../assets/Cat.jpg";
import { Flex  } from 'antd';
function WelcomeWord () {
  return (
    <>
    <h1>Unlock Your Potential</h1>
<Flex>
<div className='welcomeWord'>
<div>
Welcome to Athena3Hub, the ultimate web3 online learning platform for women. Empower yourself with cutting-edge courses curated just for you.<div/>

<div>
Our platform will take your education to new heights. Complete your exams and mint a blockchain-based certificate to showcase your achievements in the digital world.
</div>Earn points while enriching the community by uploading your own courses, letting your knowledge change lives.</div>
</div>
<div className="welcomeWord-pic">
  <img src={cat} alt="cat" className="img"/>
</div>
</Flex>
    </>
  )
}
export default WelcomeWord;