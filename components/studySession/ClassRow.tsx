import { FC } from "react";

export type StudySessionProps = {
  department: string;
  classNumber: number;
  professorName: string;
  host: {
    name: string;
    email: string;
  };
  currentCapacity: number;
  maxCapacity: number;
  startTime: string;
  endTime: string;
  location: {
    building: string;
    roomNum: string;
  };
};

const ClassRow: FC<{ studySesh: StudySessionProps }> = ({ studySesh }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">{`${studySesh.department} ${studySesh.classNumber}`}</div>
            <div className="text-sm text-gray-500">{studySesh.professorName}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{studySesh.host.email}</div>
            <div className="text-sm text-gray-500">{studySesh.host.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-lime-100 text-green-800">
          {`${studySesh.currentCapacity} / ${studySesh.maxCapacity}`}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`${studySesh.startTime} - ${studySesh.endTime}`}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {`${studySesh.location.building} ${studySesh.location.roomNum}`}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-lime-600 hover:text-lime-800">
          Join
        </a>
      </td>
    </tr>
  );
};

export default ClassRow;
