import axios from "axios";
import * as actionTypes from "../action-types";
// import api from '../../api'
// import store from "../index";

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
});

export const mouseEnterShow = () => ({
  type: actionTypes.MOUSENTER_SHOW,
});

export const mouseLeaveHidden = () => ({
  type: actionTypes.MOUSELEAVE_HIDDEN,
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page,
});

const changeList = (data) => ({
  type: actionTypes.SEARCH_LIST,
  data,
  // 取整
  totalPage: Math.ceil(data.length / 10),
});

export const getSearchList = () => {
  // 因为用了redux-thunk，原本是只能返回一个对象，现在可以返回一个函数了
  return (dispatch) => {
    axios
      .get("/api/searchList.json")
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch((error) => {});
  };
};

// export default {
//   handleFocus() {
//     store.dispatch({
//       type: actionTypes.SEARCH_FOCUS,
//     });
//   },
//   handleBlur() {
//     store.dispatch({
//       type: actionTypes.SEARCH_BLUR,
//     });
//   },
// getSearchInfoList() {
//   return (dispatch) => {
//     console.log("第二道门");
//     axios
//       .get("/api/searchList.json")
//       .then((res) => {
//         console.log("res=====>", res);
//         const data = res.data;
//         dispatch({
//           type: actionTypes.SEARCH_FOCUS,
//           searchInfoList: data,
//         });
//       })
//       .catch((error) => {});
//   };
// },
// };
