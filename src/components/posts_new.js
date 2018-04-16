import React, { Component } from 'react'
// Field- wired up automatically to redux, we're using
// it to specify an input inside of the component (title, categories, contents)
// reduxForm - it'a a function similar to the connect
// helper from react-redux, it's going to allow redux form
// to communicate directly from the component to the reducer
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    // field represent a single input or single piece of state that
    // we are attempting to communicate to the user

    renderField(field) {
        
        // destucturing meta, touched and error:
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    // pre-generated even handlers:
                    {...field.input}
                />
                <div className="text-help">
                 { // error is going to be a string that we assigned inside our validate function
                 touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
        
    } 

    render () {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

// Function called automatically when a user tries to submit something
// This function needs to be passed to the redux form helper !!!
// Values: all the values the user submitted
// In order to communicate any errors we have to return an object:

function validate(values) {
    const errors= {}

    // Validate the inputs:
    if (!values.title) {
        errors.title = "Please enter a title!"
    }
    if (!values.categories) {
        errors.categories = "Enter some categories"
    }
    if (!values.content) {
        errors.content = "Enter some content please"
    }
    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors
}

// form property: just a unique name of a form, we can have many forms
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew)