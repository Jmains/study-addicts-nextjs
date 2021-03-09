import { useAuth } from "@utils/hooks/useAuth";
import { FC } from "react";

const Restrict: FC = () => {
  const { user } = useAuth();
  if (!user) {
    return <h1>Not logged in</h1>;
  }
  return (
    <div>
      <h1>{JSON.stringify(user, null, 2)}</h1>
    </div>
  );
};

export default Restrict;
