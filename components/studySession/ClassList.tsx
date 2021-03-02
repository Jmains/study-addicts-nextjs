import { FC } from "react";
import { GetStaticProps } from "next";
import ClassRow, { StudySessionProps } from "./ClassRow";

export const getStaticProps: GetStaticProps = async () => {
  const studySessions = [
    {
      department: "CS",
      classNumber: 4305,
      professorName: "Gopal Goopers",
      host: {
        name: "Neece Kebabs",
        email: "neece.kebabs@utdallas.edu",
      },
      currentCapacity: 6,
      maxCapacity: 10,
      startTime: "11:30am",
      endTime: "12:30pm",
      location: {
        building: "ECSS",
        roomNum: "6.696",
      },
    },
    {
      department: "CS",
      classNumber: 2336,
      professorName: "Nut Nguyen",
      host: {
        name: "Neece Kebabs",
        email: "neece.kebabs@utdallas.edu",
      },
      currentCapacity: 3,
      maxCapacity: 8,
      startTime: "8:30pm",
      endTime: "9:30pm",
      location: {
        building: "ECSN",
        roomNum: "6.696",
      },
    },
    {
      department: "CS",
      classNumber: 1337,
      professorName: "Nisarg Desai",
      host: {
        name: "Neece Kebabs",
        email: "neece.kebabs@utdallas.edu",
      },
      currentCapacity: 3,
      maxCapacity: 8,
      startTime: "8:30pm",
      endTime: "9:30pm",
      location: {
        building: "ECSN",
        roomNum: "6.696",
      },
    },
    {
      department: "CS",
      classNumber: 1336,
      professorName: "John Cole",
      host: {
        name: "Neece Kebabs",
        email: "neece.kebabs@utdallas.edu",
      },
      currentCapacity: 0,
      maxCapacity: 8,
      startTime: "3:30pm",
      endTime: "4:30pm",
      location: {
        building: "ECSW",
        roomNum: "6.696",
      },
    },
    {
      department: "CS",
      classNumber: 3305,
      professorName: "Big Brain Wilson",
      host: {
        name: "Neece Kebabs",
        email: "neece.kebabs@utdallas.edu",
      },
      currentCapacity: 7,
      maxCapacity: 8,
      startTime: "1:30pm",
      endTime: "2:30pm",
      location: {
        building: "ECSS",
        roomNum: "6.696",
      },
    },
  ];

  return { props: { studySessions } };
};

type Props = {
  studySessions?: StudySessionProps[];
};

const ClassList: FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class / Professor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Host
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Availability
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Join</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.studySessions &&
                  props.studySessions.map((ss, i) => {
                    return <ClassRow key={i} studySesh={ss} />;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassList;
