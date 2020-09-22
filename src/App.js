import React from 'react';
import Header from './components/headers'
import './app.scss'
import Headline from './components/headline'
function App() {
  return (
    <div >
     <Header/>
     <section className="main">
     <Headline header="Posts" desc="click on post button to render post"/>
     </section>
    </div>
  );
}

export default App;
