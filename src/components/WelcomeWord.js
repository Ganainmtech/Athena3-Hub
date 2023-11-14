import emoji from "emoji-dictionary";
function WelcomeWord () {
  const rocket = emoji.getUnicode("rocket");
  return (
    <div className='welcomeWord mainTitle'>
      <div className='welcomeWord-title'>Unlock Your Potential</div>
      <div className='welcomeWord-items'>
        <div><span className="welcomeWord-items-emoji ">{rocket}</span>Welcome to Athena3Hub, the ultimate web3 online learning platform for women. Empower yourself with cutting-edge courses curated just for you.</div>
        <div><span className="welcomeWord-items-emoji ">{rocket}</span>Our platform will take your education to new heights. Complete your exams and mint a blockchain-based certificate to showcase your achievements in the digital world.</div>
        <div><span className="welcomeWord-items-emoji ">{rocket}</span>Earn points while enriching the community by uploading your own courses, letting your knowledge change lives.</div>
      </div>

    </div>
  );
}
export default WelcomeWord;