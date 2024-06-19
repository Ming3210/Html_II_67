import { useSelector } from "react-redux";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import List from "./components/List";

export default function App() {
  const state: any = useSelector((state) => {
    return state;
  });
  return (
    <div className="">
      {state.openFormReducer ? <AddForm></AddForm> : ""}
      <div className="mb-[50px] pt-[50px]">
        <Header></Header>
      </div>
      <div>
        <List></List>
      </div>
    </div>
  );
}
