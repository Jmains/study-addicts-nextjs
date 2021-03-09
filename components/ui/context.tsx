import { createContext, FC, useContext, useMemo, useReducer } from "react";

type Action =
  | {
      type: "OPEN_TOAST";
    }
  | {
      type: "CLOSE_TOAST";
    }
  | {
      type: "SET_TOAST_TEXT";
      text: ToastText;
    }
  | {
      type: "OPEN_DROPDOWN";
    }
  | {
      type: "CLOSE_DROPDOWN";
    }
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_USER_AVATAR";
      value: string;
    };

type Dispatch = (action: Action) => void;
interface State {
  displayModal: boolean;
  displayDropdown: boolean;
  displayToast: boolean;
  modalView: string;
  toastText: string;
  userAvatar: string;
}
type UIProviderProps = { children: React.ReactNode };

const initialState = {
  displayModal: false,
  displayToast: false,
  displayDropdown: false,
  modalView: "LOGIN_VIEW",
  toastText: "",
  userAvatar: "",
};

type MODAL_VIEWS =
  | "REGISTER_VIEW"
  | "LOGIN_VIEW"
  | "FORGOT_PASS_VIEW"
  | "CREATE_STUDY_GROUP_VIEW";

export const modalViews = {
  REGISTER_VIEW: "REGISTER_VIEW",
  LOGIN_VIEW: "LOGIN_VIEW",
  FORGOT_PASS_VIEW: "FORGOT_PASS_VIEW",
  CREATE_STUDY_GROUP_VIEW: "CREATE_STUDY_GROUP_VIEW",
};

type ToastText = string;

const UIStateContext = createContext<State | undefined>(initialState);
const UIDispatchContext = createContext<Dispatch | undefined>(undefined);

// UIStateContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_DROPDOWN": {
      return {
        ...state,
        displayDropdown: true,
      };
    }
    case "CLOSE_DROPDOWN": {
      return {
        ...state,
        displayDropdown: false,
      };
    }
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "OPEN_TOAST": {
      return {
        ...state,
        displayToast: true,
      };
    }
    case "CLOSE_TOAST": {
      return {
        ...state,
        displayToast: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "SET_TOAST_TEXT": {
      return {
        ...state,
        toastText: action.text,
      };
    }
    case "SET_USER_AVATAR": {
      return {
        ...state,
        userAvatar: action.value,
      };
    }
  }
}

const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  // const openDropdown = () => dispatch({ type: "OPEN_DROPDOWN" });
  // const closeDropdown = () => dispatch({ type: "CLOSE_DROPDOWN" });

  // const openModal = () => dispatch({ type: "OPEN_MODAL" });
  // const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  // const openToast = () => dispatch({ type: "OPEN_TOAST" });
  // const closeToast = () => dispatch({ type: "CLOSE_TOAST" });

  // const setModalView = (view: MODAL_VIEWS) => dispatch({ type: "SET_MODAL_VIEW", view });

  // const stateValues = useMemo(
  //   () => ({
  //     ...state,
  // openDropdown,
  // closeDropdown,
  // openModal,
  // closeModal,
  // setModalView,
  // openToast,
  // closeToast,
  //   }),
  //   [state]
  // );

  return (
    <UIStateContext.Provider value={state}>
      <UIDispatchContext.Provider value={dispatch}>{children}</UIDispatchContext.Provider>
    </UIStateContext.Provider>
  );
};

const useUIState = () => {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error(`useUIState must be used within a UIProvider`);
  }
  return context;
};

const useUIDispatch = () => {
  const context = useContext(UIDispatchContext);
  if (context === undefined) {
    throw new Error(`useUIDispatch must be used within a UIProvider`);
  }
  return context;
};

export { useUIDispatch, useUIState, UIProvider };
