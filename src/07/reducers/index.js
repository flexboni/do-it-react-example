import loading from './loadingReducer';
import user from './userReducer';
import collection from './collectionReducer';
import searchFilter from './searchFilterReducer';

// webpack이 index 파일을 자동으로 참조함
export default {
  loading,
  user,
  collection,
  searchFilter,
};
