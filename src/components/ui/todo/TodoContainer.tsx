// import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  //from local server
  const { data, isLoading, isError } = useGetTodosQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    <div>Something went wrong !</div>;
  }
  const todos = data.data;
  console.log(data.data);
  return (
    <div>
      <div className="flex justify-between m-2 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px] flex flex-col gap-5">
        <div className="bg-white p-5 w-full h-full rounded-lg">
          {todos.length > 0 ? (
            <div>
              {todos.map((todo) => (
                <TodoCard
                  // id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  priority={todo.priority}
                  // isCompleted={todo.isCompleted}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-lg">
              <p>There is no task pending !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
