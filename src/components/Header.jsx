import React from "react"
class Header extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
         
      }
  }
  
  render(){
  return (
    <div className="header" >
       
    <h1 style={{textAlign:'center'}}>Micro Fb</h1>
    </div>
  );
}
}
export default Header;