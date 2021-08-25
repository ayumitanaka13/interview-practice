import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const MemberDetail = () => {
  const location = useLocation();
  const user = location.state.user;
  //   const history = useHistory();
  //   const user = history.location.state.user;

  return (
    <div>
      <h1>Member Detail</h1>
      <p>{user.name.first}</p>
    </div>
  );
};

export default MemberDetail;
