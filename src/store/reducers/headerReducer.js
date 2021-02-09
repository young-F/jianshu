import * as actionTypes from "../action-types";
import { fromJS } from "immutable";
const defaultState = fromJS({
  mouseIn: false,
  isFocus: false,
  searchInfoList: [],
  // 当前第几页
  page: 1,
  totalPage: 1, //整体的数据一共分成了几页
});

function headerReducer(state = defaultState, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      state.isFocus = true;
      break;
    case actionTypes.SEARCH_BLUR:
      state.isFocus = false;
      break;
    case actionTypes.SEARCH_LIST:
      state.searchInfoList = action.data;
      state.totalPage = action.totalPage;
      break;
    case actionTypes.MOUSENTER_SHOW:
      state.mouseIn = true;
      break;
    case actionTypes.MOUSELEAVE_HIDDEN:
      state.mouseIn = false;
      break;
    case actionTypes.CHANGE_PAGE:
      console.log("action.page", action.page);
      state.page = action.page;
      break;
    default:
      return state;
  }
  // console.log('renducer中打印的state=====>', state)

  return state;
}

export default headerReducer;
