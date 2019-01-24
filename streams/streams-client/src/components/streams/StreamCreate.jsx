import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {
  renderInput = ( { input, label, meta } ) => {
    const className = `field ${meta.error && meta.touched ? "error" : "" }`;
    return(      
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }

  renderError = ({error, touched}) => {
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formProps) => {
    console.log(formProps);
  }
  render(){
    const {invalid} = this.props;

    return (      
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='description' component={this.renderInput} label="Enter Description" />
        <button className="ui button primary" disabled={invalid}>Create Stream</button>
      </form>
    );  
  }
}


const validate = (formValues) => {
  const errors = {};
  if(!formValues.title){
    errors.title = 'You must enter a title';
  }
  if(!formValues.description){
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);