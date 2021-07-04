import { useContext } from "react";
import { ChannelContext, UserContext } from "../App";
import ComponentF from "./ComponentF";

// useContext hook used to get props easily 
const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {/* <ComponentF /> */}
      {user} - {channel}
    </div>
  );
};

export default ComponentE;
