import { FC } from "react";

const PageHeader: FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 md:py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="md:text-3xl text-xl font-bold leading-tight text-gray-900">
          Study Sessions
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
