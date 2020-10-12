import React from 'react'
import '../App.css'
import { connect } from 'react-redux'

import { setData } from '../actions/postAction'

class BlogPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.dispatch(setData(formData))
        this.setState({
            body: '',
            title: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="app">
                <h1> NEWPOST </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                    <label> TITLE </label> <br/>
                    <input
                    type= "text" 
                    name= "title"
                    placeholder= "POST TITLE"
                    value= {this.state.title}
                    onChange= {this.handleChange} 
                    required
                    /> <br/>
                    </div>
                    <div className="form-input">
                    <label> BODY </label> <br/>
                    <textarea
                    type= "text" 
                    name= "body"
                    placeholder= "TEXT..."
                    value= {this.state.body}
                    onChange= {this.handleChange} 
                    required
                    ></textarea>
                    <br/>
                    </div>
                    <button>PUBLISH</button>
                </form>
            </div>
        )
    }
}

export default connect()(BlogPost)