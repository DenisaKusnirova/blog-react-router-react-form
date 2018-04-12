import React, { Component } from 'react'
// Field- wired up automatically to redux, we're using
// it to specify an input inside of the component (title, categories, contents)
// reduxForm - it'a a function similar to the connect
// helper from react-redux, it's going to allow redux form
// to communicate directly from the component to the reducer
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    // pre-generated even handlers:
                    {...field.input}
                />
            </div>
        )
    }

    render () {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

// form property: just a unique name of a form, we can have many forms
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew)