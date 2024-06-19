import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddForm() {
  const [inputValue, setInputValue] = useState({
    id: Math.floor(Math.random() * 99999999999999999),
    name: "",
    status: false,
    rented_by: "",
    received_date: "",
    rented_date: "",
  });

  const dispatch = useDispatch();

  let state = useSelector((state: any) => state);
  console.log(state.addInfoReducer);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const closeAdd = () => {
    dispatch({ type: "CLOSE" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: inputValue });
    closeAdd();
  };

  return (
    <div className="bg-black bg-opacity-50 w-[100%] h-[100%] fixed flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Thêm thông tin mượn sách</h2>
          <p
            onClick={closeAdd}
            className="text-gray-700 font-bold hover:cursor-pointer"
          >
            X
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="book-name"
            className="block text-gray-700 font-bold mb-2"
          >
            Tên sách
          </label>
          <input
            name="name"
            value={inputValue.name}
            onChange={handleInputChange}
            type="text"
            id="book-name"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="borrower-name"
            className="block text-gray-700 font-bold mb-2"
          >
            Tên người mượn
          </label>
          <input
            name="rented_by"
            value={inputValue.rented_by}
            onChange={handleInputChange}
            type="text"
            id="borrower-name"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="borrow-date"
            className="block text-gray-700 font-bold mb-2"
          >
            Ngày mượn
          </label>
          <input
            name="rented_date"
            value={inputValue.rented_date}
            onChange={handleInputChange}
            type="date"
            id="borrow-date"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="return-date"
            className="block text-gray-700 font-bold mb-2"
          >
            Ngày trả
          </label>
          <input
            name="received_date"
            value={inputValue.received_date}
            onChange={handleInputChange}
            type="date"
            id="return-date"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={closeAdd}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}
