const renderReducer = (state = [], action:any) => {
    switch (action.type) {
      case "RENDER":
        const storedBooks = JSON.parse(localStorage.getItem("bookList") || "[]");
        return storedBooks;
      default:
        return state;
    }
  };
  
  export default renderReducer;
// let bookList = [ {
//     id: 1,
//     name: "Book One",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 2,
//     name: "Book Two",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 3,
//     name: "Book Three",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 4,
//     name: "Book Four",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 5,
//     name: "Book Five",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 6,
//     name: "Book Six",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 7,
//     name: "Book Seven",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 8,
//     name: "Book Eight",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 9,
//     name: "Book Nine",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 10,
//     name: "Book Ten",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 11,
//     name: "Book Eleven",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 12,
//     name: "Book Twelve",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   },
//   {
//     id: 20,
//     name: "Book Twenty",
//     status: false,
//     rented_by: "Unknown student",
//     received_date: "03-03-2021",
//     rented_date: "30-12-2020",
//   }]

//   localStorage.setItem("bookList", JSON.stringify(bookList))