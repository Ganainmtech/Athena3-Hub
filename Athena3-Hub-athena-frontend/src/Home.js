import WelcomeWord from "./components/WelcomeWord.js"
import Certificates from "./components/Certificates.js";
import Queries from "./components/Queries.js";
import MainPic from "./components/MainPic.js";
import Subscribe from "./components/Subscribe.js";
function Home () {
  return (
<div>
我是dashboard
<MainPic />
<WelcomeWord />
<Certificates />
<foot>
  <Queries />
  <Subscribe />
</foot>
</div>
  )
}
export default Home;