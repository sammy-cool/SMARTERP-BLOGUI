import React from "react"
import BlogPost from './BlogPost'
import BlogList from './BlogList'

function DashBoard(){
    return (
        <div>
            <h1 style={{textAlign: "center"}}>WELCOME TO BLOG POSTING</h1>
            <div>
            <div style={{width: "50%", float: "right"}}>
                <BlogPost />
            </div>
            <div style={{width: "50%", float: "right"}}>
                <BlogList />
            </div>
            </div>
        </div>
    )
}

export default DashBoard