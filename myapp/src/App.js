import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div  className="App">
        <table  border="2"  style={{width:"400px", height:"300px"}}>
       
       <ProfilePhoto/>
       <FullName/>
       <Address/>
       </table>
    </div>
  );
}

export default App;