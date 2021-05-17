import {
  FETCH_DEPT_REQUEST,
  FETCH_DEPT_SUCCESS,
  FETCH_DEPT_FAILURE,
  CREATE_DEPT_REQUEST,
  CREATE_DEPT_SUCCESS,
  CREATE_DEPT_FAILURE,
  PATCH_DEPT_REQUEST,
  PATCH_DEPT_SUCCESS,
  PATCH_DEPT_FAILURE,
  DELETE_DEPT_REQUEST,
  DELETE_DEPT_SUCCESS,
  DELETE_DEPT_FAILURE,
} from "./deptActionTypes";

const initialState = {
  FETCH: {
    loading: false,
    data: [],
    error: "",
  },
  CREATE: {
    loading: false,
    data: [],
    error: "",
  },
  PATCH: {
    loading: false,
    data: [],
    error: "",
  },
  DELETE: {
    loading: false,
    data: [],
    error: "",
  },
};

const deptReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPT_REQUEST:
      return {
        ...state,
        FETCH: {
          loading: false,
          data: [],
          error: "",
        },
      };
    case FETCH_DEPT_SUCCESS:
      return {
        ...state,
        FETCH: {
          loading: false,
          data: action.payload,
          error: "",
        },
      };
    case FETCH_DEPT_FAILURE:
      return {
        ...state,
        FETCH: {
          loading: false,
          data: [],
          error: action.payload,
        },
      };
    case CREATE_DEPT_REQUEST:
      return {
        ...state,
        CREATE: {
          loading: false,
          data: [],
          error: "",
        },
      };
    case CREATE_DEPT_SUCCESS:
      return {
        ...state,
        CREATE: {
          loading: false,
          data: action.payload,
          error: "",
        },
      };
    case CREATE_DEPT_FAILURE:
      return {
        ...state,
        CREATE: {
          loading: false,
          data: [],
          error: action.payload,
        },
      };
    case PATCH_DEPT_REQUEST:
      return {
        ...state,
        PATCH: {
          loading: false,
          data: [],
          error: "",
        },
      };
    case PATCH_DEPT_SUCCESS:
      return {
        ...state,
        PATCH: {
          loading: false,
          data: action.payload,
          error: "",
        },
      };
    case PATCH_DEPT_FAILURE:
      return {
        ...state,
        PATCH: {
          loading: false,
          data: [],
          error: action.payload,
        },
      };
    case DELETE_DEPT_REQUEST:
      return {
        ...state,
        DELETE: {
          loading: false,
          data: [],
          error: "",
        },
      };
    case DELETE_DEPT_SUCCESS:
      return {
        ...state,
        DELETE: {
          loading: false,
          data: action.payload,
          error: "",
        },
      };
    case DELETE_DEPT_FAILURE:
      return {
        ...state,
        DELETE: {
          loading: false,
          data: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default deptReducer;
