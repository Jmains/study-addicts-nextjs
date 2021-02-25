import { FC } from "react";
import cn from "classnames";
import Navbar from "./Navbar";
import Modal from "@components/ui/Modal";
import { useUIDispatch, useUIState } from "@components/ui/context";
import { LoginView, RegisterView, ForgotPassView } from "@components/auth";
import { modalViews } from "@components/ui/context";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import FeatureBar from "./FeatureBar";

const Layout: FC = ({ children }) => {
  const uiDispatch = useUIDispatch();
  const { displayModal, modalView, displayToast, toastText } = useUIState();

  const closeModal = () => {
    uiDispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div
      className={cn(
        "h-full bg-white mx-auto transition-colors duration-150 max-w-screen-7xl font-sans"
      )}
    >
      <Navbar />
      <PageHeader />
      <main className="antialiased overflow-hidden ">{children}</main>
      {/* <Footer pages={pageProps.pages} /> */}

      {/* <Sidebar open={displaySidebar} onClose={closeSidebar}>
    <CartSidebarView />
  </Sidebar> */}

      <Modal open={displayModal} onClose={closeModal}>
        {modalView === modalViews.LOGIN_VIEW && <LoginView />}
        {modalView === modalViews.REGISTER_VIEW && <RegisterView />}
        {modalView === modalViews.FORGOT_PASS_VIEW && <ForgotPassView />}
        {/* {modalView === modalViews.CREATE_STUDY_GROUP_VIEW && <CreateStudyGroupView} */}
      </Modal>

      <FeatureBar
        hide={!displayToast}
        title={toastText}
        description=""
        action={
          <button
            onClick={() => {
              uiDispatch({ type: "CLOSE_TOAST" });
            }}
            className="px-2 py-1 bg-white rounded-full"
          >
            X
          </button>
        }
        // hide={acceptedCookies}
        // action={
        //   <Button className="mx-5" onClick={() => onAcceptCookies()}>
        //     Accept cookies
        //   </Button>
        // }
      />
      <Footer />
    </div>
  );
};

export default Layout;
