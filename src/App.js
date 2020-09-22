import React from 'react';
import Header from './components/headers'
import './app.scss'
import Headline from './components/headline'
import SharedButon from './components/button'
import Listitem from './components/listitems'
import {connect} from 'react-redux'
import {fetchPost} from './actions/index'
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];
function App(props) {
  const {posts}=props
  
  //alert(post)
const fetch=()=>{
 
  props.fetchPost()

}

const buttonConfig={
  buttonText:"GET POST",
  emitEvent:fetch

}
console.log(props)
  return (
    <div >
     <Header/>
     <section className="main">
     <Headline header="Post" desc="click on post button to render post" temparr={tempArr}/> 
     <SharedButon {...buttonConfig}/>
  {posts && posts.length>0 && <div>{posts.map((p,i)=>{
    const {title,body}=p
    const configListitem={
      title,
      desc:body
    }
      return <Listitem {...configListitem} key={i}/>  
      })
  }</div>}
     </section>
     
    </div>
  );
}
const mapStateToProps = state => {
 
  return {
    posts: state.postreducer
  }
}
export default connect(mapStateToProps,{fetchPost})(App);
