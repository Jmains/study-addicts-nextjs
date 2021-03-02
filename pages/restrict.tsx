import { useRequireAuth } from "@utils/hooks/useRequireAuth";
import { FC } from "react";

const Restrict: FC = () => {
  useRequireAuth();

  return (
    <div>
      <h1>Iam restricted</h1>
    </div>
  );
};

export default Restrict;
