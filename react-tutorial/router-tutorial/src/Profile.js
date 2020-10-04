import React from "react";
import WithRouterSample from "./WithRouterSample";

const ProfileData = {
  eyshin: {
    name: "신은영",
    description: "Frontend Engineer @ DrimsysR",
  },
  velopert: {
    name: "김민준",
    description: "Frontend Engineer @ RIDI",
  },
};
function Profile({ match }) {
  const { username } = match.params;
  const profile = ProfileData[username];

  if (!profile) {
    return <div>존재하지않는 사용자입니다</div>;
  }
  return (
    <div>
      <input type="text" />
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}

export default Profile;
