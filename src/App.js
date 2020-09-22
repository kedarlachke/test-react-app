import React from 'react';
import Header from './components/headers'
import './app.scss'
import Headline from './components/headline'
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];
function App() {
  return (
    <div >
     <Header/>
     <section className="main">
     <Headline header={1} desc="click on post button to render post" temparr={tempArr}/> 
     </section>
    </div>
  );
}

export default App;
