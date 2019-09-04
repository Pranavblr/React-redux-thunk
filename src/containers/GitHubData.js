import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchGithubData} from '../actions';

class GitHubData extends Component{
  componentDidMount(){
     this.props.fetchGithubData();
  }
  render(){
      console.log('object',this.props.data);
      return (
          <div>{
              this.props.data?
              <p>{this.props.data.login}</p>:null
          }
          </div>
      )
  }
}
const mapStateToProps = state =>{
    console.log('current-state',state.github);
    return {data:state.github}
} 
GitHubData.propTypes ={
    data:PropTypes.object
};
export default connect(mapStateToProps,
    {fetchGithubData}
    )(GitHubData);