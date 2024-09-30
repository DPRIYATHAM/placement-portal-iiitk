import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";

const JobListCard = ({ job, id }) => {
  return (
    <div className={"flex items-center p-4 pl-[2rem]"}>
      <img
        src={job.image}
        alt="company logo"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="ml-6">
        <h2 className="text-2xl font-bold text-gray-900">{job.name}</h2>
        <p className="text-md font-semibold text-slate-gray">{job.role}</p>
        <div className="grid grid-cols-8 gap-4 w-full ">
          <p className="text-sm font-semibold text-custom-red col-span-3">
            {job.type}
          </p>
          <div className="flex items-center col-span-2">
            <IoLocationOutline className="text-slate-gray" />
            <p className="text-sm font-medium text-slate-gray ml-1">
              {job.location}
            </p>
          </div>
          <div className="flex items-center col-span-2">
            <IoCalendarOutline className="text-slate-gray" />
            <p className="text-sm font-medium text-slate-gray ml-1">
              {job.duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListCard;
