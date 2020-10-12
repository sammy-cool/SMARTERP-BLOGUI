import React from 'react';
import {connect} from 'react-redux'
import {FaSearch} from 'react-icons/fa'

class BlogList extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             search: ''
         }
    }
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render() {
        return (
            <div style={{marginLeft:"0px", height: "200px"}}>
            <form className="form-group">
                <span className="form-control-feedback" style={{paddingTop:"9px"}}><FaSearch/></span>
                <input  
                type="search"  
                value ={this.state.search}    
                name="search" 
                onChange={this.handlechange} 
                placeholder=" Search By Title"
                aria-label="Search" style={{width:"90%"}}  />    
            </form>
     
         
             <div className="scrolling">
             {
                  this.props.post.filter(blog=>blog.title.includes(this.state.search)).map(ele=>{
                     return(
                        <div className="card" style={{width: "88%" }} >
                            <div className="container"  >
                            <h2>{ele.title} </h2>
                            <p >{ele.body}</p>
                            </div>
                        </div>
                     )
                 })
             }
             </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        post:state.posts
    }
    
}
export default connect(mapStateToProps) (BlogList);