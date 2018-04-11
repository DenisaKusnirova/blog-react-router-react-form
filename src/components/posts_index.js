import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
    // Fetch the data after a component rendered
    // It's a asynchronous operation
    componentDidMount() {
        this.props.fetchPosts()
    }
    
    render () {
        return (
            <div>
                Posts Index
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsIndex)