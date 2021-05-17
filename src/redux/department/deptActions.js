import axios from "axios";
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

// Async actions to perform tasks
export const fetchDept = (id) => {
  const url =
    id === null
      ? `https://jsonplaceholder.typicode.com/users`
      : `https://jsonplaceholder.typicode.com/users/${id}`;
  return (dispatch) => {
    dispatch(fetchDeptRequest());
    axios
      .get(url)
      .then((response) => {
        let data = [];
        if (id !== null) {
          data = [response.data];
        } else {
          data = response.data;
        }
        dispatch(fetchDeptSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDeptFailure(err));
      });
  };
};

export const createDept = (data) => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  return (dispatch) => {
    dispatch(createDeptRequest());
    axios
      .post(url, data)
      .then((response) => {
        let data = response.data;
        dispatch(createDeptSuccess(data));
        dispatch(fetchDept(null));
      })
      .catch((err) => {
        dispatch(createDeptFailure(err));
      });
  };
};

export const patchDept = (id, data) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return (dispatch) => {
    dispatch(patchDeptRequest());
    axios
      .patch(url, data)
      .then((response) => {
        let data = response.data;
        dispatch(patchDeptSuccess(data));
        dispatch(fetchDept(null));
      })
      .catch((err) => {
        dispatch(patchDeptFailure(err));
      });
  };
};

export const deleteDept = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return (dispatch) => {
    dispatch(deleteDeptRequest());
    axios
      .delete(url)
      .then((response) => {
        let data = response.data;
        dispatch(deleteDeptSuccess(data));
        dispatch(fetchDept(null));
      })
      .catch((err) => {
        dispatch(deleteDeptFailure(err));
      });
  };
};

// Department list fetching actions
export const fetchDeptRequest = () => {
  return {
    type: FETCH_DEPT_REQUEST,
  };
};
export const fetchDeptSuccess = (dept) => {
  return {
    type: FETCH_DEPT_SUCCESS,
    payload: dept,
  };
};
export const fetchDeptFailure = (err) => {
  return {
    type: FETCH_DEPT_FAILURE,
    payload: err,
  };
};

// Department create actions
export const createDeptRequest = () => {
  return {
    type: CREATE_DEPT_REQUEST,
  };
};
export const createDeptSuccess = (dept) => {
  return {
    type: CREATE_DEPT_SUCCESS,
    payload: dept,
  };
};
export const createDeptFailure = (err) => {
  return {
    type: CREATE_DEPT_FAILURE,
    payload: err,
  };
};

// Department modification actions
export const patchDeptRequest = () => {
  return {
    type: PATCH_DEPT_REQUEST,
  };
};
export const patchDeptSuccess = (dept) => {
  return {
    type: PATCH_DEPT_SUCCESS,
    payload: dept,
  };
};
export const patchDeptFailure = (err) => {
  return {
    type: PATCH_DEPT_FAILURE,
    payload: err,
  };
};

// Department deletion actions
export const deleteDeptRequest = () => {
  return {
    type: DELETE_DEPT_REQUEST,
  };
};
export const deleteDeptSuccess = (dept) => {
  return {
    type: DELETE_DEPT_SUCCESS,
    payload: dept,
  };
};
export const deleteDeptFailure = (err) => {
  return {
    type: DELETE_DEPT_FAILURE,
    payload: err,
  };
};
