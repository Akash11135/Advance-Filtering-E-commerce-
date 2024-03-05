import React from "react";
import { TiTick } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";
const Message = ({ message }) => {
  return (
    <>
      {message && message === "success" ? (
        <div className="bg-green-900 h-1/2 rounded-md p-3 flex justify-center items-center">
          <div className="inline-flex gap-2 ">
            <TiTick className=" h-6 w-9" />
            User Successfully registered. Go to login page
          </div>
        </div>
      ) : message === "duplicate" ? (
        <div className="bg-red-500 h-1/2 rounded-md p-3 flex justify-center items-center">
          <div className="inline-flex gap-2 ">
            <GiCrossMark className=" h-6 w-9" />
            Username/password already exists.
          </div>
        </div>
      ) : message === "allFeilds" ? (
        <div className="bg-red-500 h-1/2 rounded-md p-3 flex justify-center items-center">
          <div className="inline-flex gap-2 ">
            <GiCrossMark className=" h-6 w-9" />
            All feilds are required.
          </div>
        </div>
      ) : (
        <div className="bg-red-500 h-1/2 rounded-md p-3 flex justify-center items-center">
          <div className="inline-flex gap-2 ">
            <GiCrossMark className=" h-6 w-9" />
            Unable to register.
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
