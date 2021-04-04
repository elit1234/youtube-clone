import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = (string) => {
  toast.configure();
  return toast.dark(string, {
    position: "bottom-center",

    autoClose: 3000,
    hideProgressBar: true,
    closeOnclick: true,
    pauseOnHover: true,
    draggable: true,
    inputProps: {
      style: {
        textAlign: "center",
        zIndex: "999999",
      },
    },
  });
};

export default Notify;
