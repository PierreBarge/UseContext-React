import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const handleClick = () => {
    setIsOnline(!isOnline);
  };

  return (
    <>
      <div>User is {isOnline ? "online" : "offline"}.</div>

      <button onClick={handleClick}>Click to change user status</button>
    </>
  );
}

export default UserProfile;
