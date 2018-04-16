import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.paramas
        this.props.fetchPost()
    }

    render() {
        return (
            <div>
                posts show!
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.paramas.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)