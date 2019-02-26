import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {  
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    const {stream} = {...this.props};
    console.log(formValues);
    this.props.editStream(stream.id,formValues);
  }

  render(){
    if(!this.props.stream){
      return <div>Loading...</div>
    }
    const {stream} = {...this.props};    
    return (  
      <div>
        <h3>Edit Stream: {stream.title}</h3>
        <StreamForm 
          onSubmit={this.onSubmit} 
          initialValues={_.pick(stream,'title','description')}
          submitButtonText="Edit Stream"></StreamForm>
      </div>
    );  
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);