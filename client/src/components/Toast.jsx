import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
  );
};

export default Toast;
