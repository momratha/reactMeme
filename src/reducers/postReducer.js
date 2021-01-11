import { FETCH_POSTS, SHOW_MEME_POST, SHOW_MEME_POST_DETAIL } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  id: '',
  showDetail: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    case SHOW_MEME_POST:
      return {
        ...state,
        id: action.payload
      };
    case SHOW_MEME_POST_DETAIL:
      return {
        ...state,
        showDetail: action.payload
      };
    default:
      return state;
  }
}
