import Head from "next/head";
import Link from "next/link";
import { ClassList } from "@components/studySession/";
import { Footer, Navbar } from "@components/common";
import { PageHeader } from "@components/common";
import { useUIDispatch, useUIState } from "@components/ui/context";

export default function Home() {
  const uiDispatch = useUIDispatch();
  const uiState = useUIState();

  return (
    <section>
      <Navbar />
      <PageHeader />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 pt-3 pb-6 sm:px-0">
            <div className="flex justify-end items-center">
              <button
                onClick={() => {
                  uiDispatch({ type: "SET_MODAL_VIEW", view: "REGISTER_VIEW" });
                  uiDispatch({ type: "OPEN_MODAL" });
                  console.log(uiState.displayModal);
                  console.log(uiState.modalView);
                }}
                className="px-2 py-1 bg-lime-600 hover:bg-lime-700 shadow-md text-white rounded-md font-semibold text-sm"
              >
                Create Study Session +
              </button>
            </div>
            <div className="mt-3">
              <ClassList />
            </div>
          </div>
          {/* /End replace  */}
        </div>
      </main>
      <Footer />
    </section>
  );
}
