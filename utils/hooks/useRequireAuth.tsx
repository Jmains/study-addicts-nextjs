import { useEffect } from "react";
import { useAuth } from "@utils/hooks/useAuth";
import { useUIDispatch } from "@components/ui/context";

export const useRequireAuth = () => {
  const { user } = useAuth();
  const uiDispatch = useUIDispatch();

  useEffect(() => {
    if (!user) {
      uiDispatch({ type: "SET_MODAL_VIEW", view: "LOGIN_VIEW" });
      uiDispatch({ type: "OPEN_MODAL" });
    }
  }, [user]);

  return user;
};
