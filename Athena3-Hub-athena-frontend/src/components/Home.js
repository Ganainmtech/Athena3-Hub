import WelcomeWord from "./WelcomeWord.js"
import Certificates from "./Certificates.js";
import Queries from "./Queries.js";
import MainPic from "./MainPic.js";
import Subscribe from "./Subscribe.js";
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