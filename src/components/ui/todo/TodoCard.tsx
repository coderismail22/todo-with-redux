
const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border mb-2">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
