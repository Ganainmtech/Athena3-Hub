// import logo from './logo.svg'
import './App.css'
import * as allList from "./list.js"

// navbar
function NavBar (params) {
  const navList = allList.navList
  return (
    <div className='navbar'>
      <div className='navbar-logo'>logo</div>
      <div className='navbar-list' >{navList.map(item => <div key={item.id}>{item.name}</div>)}</div>
      <div className='navbar-wallet '>wallet</div>
    </div >
  )
}

// mianPic
function MainPic () {
  return (
    <>
      <div className='mainPic'>
        <div >ATHENA3</div>
        <button className='button'>mint CV</button>
      </div>
    </>
  )
}

// Introduce
function Introduce () {
  return (
    <>
      <div className='Introduce'>
        <h1>Unleash Your Potential</h1>
        <div>
          Welcome to Athena3Hub, the ultimate web3 online learning platform for women. Empower yourself with cutting-edge courses curated just for you.

          Our platform will take your education to new heights. Complete your exams and mint a blockchain-based certificate to showcase your achievements in the digital world.

          Earn points while enriching the community by uploading your own courses, letting your knowledge change lives.</div>
      </div>
    </>
  )
}

// Certificates
function Certificates () {
  const list = allList.certificatesList
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
  )
}

// course
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
// aboutUs
function AboutUs (params) {
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

// Queries
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

// subscribe
function Subscribe () {
  return (
    <div className='subscribe'>
      <h1>Stay in the Loop</h1>
      <div><input type="text" value="请输入邮箱"></input></div>
      <div><button>subscribe</button></div>
      <div>© 2023 Athena3Hub – Proudly breaking barriers in online learning
        Generated on October 30, 2023</div>
    </div>
  )
}

function App () {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <MainPic />
      <Introduce />
      <Certificates />
      <Courses />
      <AboutUs />
      <foot>
        <Queries />
        <Subscribe />
      </foot>
    </div >
  )
}

export default App
