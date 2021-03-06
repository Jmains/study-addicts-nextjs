import { ClassList } from "@components/studySession/";
import { Footer, Navbar } from "@components/common";
import { PageHeader } from "@components/common";
import { useUIDispatch, useUIState } from "@components/ui/context";
import { useAuth } from "@utils/hooks/useAuth";

export default function Home() {
  const uiDispatch = useUIDispatch();
  const { displayModal, modalView } = useUIState();
  const { user } = useAuth();

  return (
    <section>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 pt-3 pb-6 sm:px-0">
          {user && <h1 className="text-4xl text-black font-bold">{user.firstName}</h1>}
          {/* <Link href="/restrict">
            <button className="px-2 py-1 bg-purple-500">Goto Restricted</button>
          </Link> */}

          <div className="flex justify-end items-center">
            <button
              onClick={() => {
                uiDispatch({ type: "SET_MODAL_VIEW", view: "CREATE_STUDY_GROUP_VIEW" });
                uiDispatch({ type: "OPEN_MODAL" });
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
    </section>
  );
}
