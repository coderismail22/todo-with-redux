import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between m-2 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px] flex flex-col gap-5">
        <div className="bg-white p-5 w-full h-full rounded-lg">
          {todos.map((todo) => (
            <TodoCard id={todo.id} title={todo.title} description={todo.description} />
          ))}
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
