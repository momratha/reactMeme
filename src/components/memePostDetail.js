import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, setMemeID } from '../actions/postActions';

class MemePost extends Component {

  render() {

    const postItems = this.props.list.map(post => (
      <div className="flex-box" >
        <div key={post.id} >
          <img src={post.url} />
        </div>
        <div className="flex-box-right">
          Name: <b>{post.name}</b>
          <p>
            box count: <b>{post.box_count}</b>
          </p>
          width: <b>{post.width} </b>
          <p>
            height: <b>{post.height}</b>
          </p>
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
  posts: PropTypes.array.isRequired,
  id: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  id: state.id,
});

export default connect(mapStateToProps, { fetchPosts, setMemeID })(MemePost);
