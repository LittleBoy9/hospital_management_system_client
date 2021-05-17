import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createDept, fetchDept, patchDept, deleteDept } from "../redux";

function DeptContainer({ deptData, fetchDepartment, createDepartment }) {
  useEffect(() => {
    // fetchDepartment(1);
    // fetchDepartment(null);
    // createDepartment({
    //   name: "Leanne Graham",
    //   username: "Bret",
    //   email: "Sincer12e@april.bigg",
    //   address: {
    //     street: "Kulas Light",
    //     suite: "Apt. 556",
    //     city: "Gwenborough",
    //     zipcode: "92998-38724",
    //     geo: {
    //       lat: "-37.3159",
    //       lng: "81.1496",
    //     },
    //   },
    //   phone: "1-770-736-80321 x56446",
    //   website: "hildegard12.org",
    //   company: {
    //     name: "Romaguera-Crona",
    //     catchPhrase: "Multi-layered client-server neural-net",
    //     bs: "harness real-time e-markets",
    //   },
    // });
  }, []);
  console.log(deptData);
  return <></>;
}

const mapStateToProps = (state) => {
  return {
    deptData: state.dept,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDepartment: (id) => dispatch(fetchDept(id)),
    createDepartment: (data) => dispatch(createDept(data)),
    patchDepartment: (id, data) => dispatch(patchDept(id, data)),
    deleteDepartment: (id) => dispatch(deleteDept(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeptContainer);
