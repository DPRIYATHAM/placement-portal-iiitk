import Navbar from "../components/Navbar";
import DriveDetails from "../components/DriveDetails";

const AddDrive = () => {
  return (
    <div>
      {/* Updated the navbar wrapper to make it sticky */}
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>

      <div className="mt-0 flex w-[100vw] justify-center bg-slate-gray/20">
        <DriveDetails />
      </div>
    </div>
  );
};

export default AddDrive;
