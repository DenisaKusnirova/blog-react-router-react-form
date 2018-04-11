import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
    // Fetch the data after a component rendered
    // It's a asynchronous operation
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        // Lodash function for mapping over an object:
        return _.map(this.props.posts, post => {
            return (
            <li className="list-group-item" key={post.id}>
                {post.title}
            </li>
            )
        })
    }

    render () {
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)