import { SET_COLLECTION, SET_AGE } from '../actions/collectionActions';

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COLLECTION: {
      // payload의 하위에 ids와 entities를 저장
      const ids = payload.map(entity => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }
    case SET_AGE: {
      const { id, age } = action;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age }, // 그래프 DB는 id로 찾은 데이터를 바로 수정할 수 있음.
        },
      };
    }

    default:
      return state;
  }
};
