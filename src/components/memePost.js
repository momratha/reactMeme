import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showMemeDetail } from '../actions/postActions';

class MemePost extends Component {
  constructor(props) {
    super(props);
    this.setShowMemeDetail = this.setShowMemeDetail.bind(this);
  }

  setShowMemeDetail() {
    this.props.showMemeDetail(true);
  }
  render() {

    const postItems = this.props.list.map(post => (
      <div className="flex-box" >
        <div key={post.id} className="flex-box-left">
          <img src={post.url} />
        </div>
        <div className="flex-box-right">
          Name:
         <b>{post.name}</b>
          <div className="btn " onClick={this.setShowMemeDetail}>
           <a>Find out More</a>
        </div>
        </div>
      </div>
    ));
    return (
      <div >
        {postItems}
      </div>
    );
  }
}

MemePost.propTypes = {
  showMemeDetail: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  id: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  id: state.id,
});

export default connect(mapStateToProps, { showMemeDetail })(MemePost);
