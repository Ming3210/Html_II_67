import React from "react";
import AddForm from "./AddForm";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const state: any = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const openForm = () => {
    dispatch({
      type: "OPEN",
    });
  };
  return (
    <div className="flex items-center justify-between mx-[50px]">
      <h1>Quản lí mượn trả sách</h1>
      <div>
        <button
          onClick={openForm}
          className="w-[200px] h-[32px] bg-sky-400 text-white border-0 rounded-md hover:cursor-pointer focus:border-4 focus:border-red-500 focus:text-violet-800"
        >
          Thêm thông tin
        </button>
      </div>
    </div>
  );
}
