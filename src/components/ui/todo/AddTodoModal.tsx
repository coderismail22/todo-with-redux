import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostTodosMutation } from "@/redux/api/api";
// import { addTodo } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hooks";
import { FormEvent, useState } from "react";
const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addTodo, { data, isLoading, isError }] = usePostTodosMutation();
  const [priority, setSelectedPriority] = useState("low"); // Set initial default value

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      title,
      description,
      priority,
      isCompleted: false,
    };
    console.log(taskDetails);
    addTodo(taskDetails);
    console.log(data, isLoading, isError);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Add a task</DialogTitle>

            <DialogDescription>
              Enter a title and description.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Priority
              </Label>
              <Select
                value={priority}
                onValueChange={(value) => setSelectedPriority(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent defaultValue="Low">
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
