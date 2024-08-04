import { Button } from "../button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between m-2 ">
        <Button className="bg-primary-gradient text-xl ">Add Todo</Button>
        <Button className="text-xl">Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px] flex flex-col gap-5">
        <div className="bg-white p-5 w-full h-full rounded-lg">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* If there are no todos */}
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-lg">
          <p>There is no task pending !</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
