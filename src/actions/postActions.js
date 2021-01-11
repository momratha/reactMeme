import { FETCH_POSTS, SHOW_MEME_POST, SHOW_MEME_POST_DETAIL } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.data.memes
      })
    );
};

export const setMemeID = memeID => dispatch => {
  dispatch({
    type: SHOW_MEME_POST,
    payload: memeID
  })
};

export const showMemeDetail = showMeme => dispatch => {
  dispatch({
    type: SHOW_MEME_POST_DETAIL,
    payload: showMeme
  })
};

