import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions';
import MemePosts from './memePosts';
import MemePost from './memePost';
import MemePostDetail from './memePostDetail';

class Memelist extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {

    const id = this.props.id;
    const memePostList = this.props.posts.filter(function (obj) {
      return obj.id === id;
    })


    let displayMeme = (
      <MemePosts list={this.props.posts}></MemePosts>
    );

    if (this.props.id !== '') {

      displayMeme = (<MemePost list={memePostList}></MemePost>);
      if (this.props.showDetail) {
        displayMeme = (<MemePostDetail list={memePostList}></MemePostDetail>);
      }
    }

    return (
      <div className="flex-box" >
        {displayMeme}

      </div>
    );
  }
}

Memelist.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  id: PropTypes.string,
  showDetail: PropTypes.bool
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  id: state.posts.id,
  showDetail: state.posts.showDetail
});

export default connect(mapStateToProps, { fetchPosts })(Memelist);
