import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, setMemeID } from '../actions/postActions';

class MemePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };

    this.getLoadMeme = this.getLoadMeme.bind(this);
  }


  getLoadMeme(e) {
    this.setState({ id: e.target.name });
    this.props.setMemeID(e.target.name);
  }

  render() {
    const postItems = this.props.list.map(post => (
      <div key={post.id} className="flex-box-child">
        <img src={post.url} className="width-100" onClick={this.getLoadMeme} name={post.id} />
        <br />
        <b>{post.name}</b>
        <br />
      </div>
    ));
    return (
      <div className="flex-box" >

        {postItems}
      </div>
    );
  }
}

MemePosts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  id: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  id: state.posts.id,
});

export default connect(mapStateToProps, { fetchPosts, setMemeID })(MemePosts);
