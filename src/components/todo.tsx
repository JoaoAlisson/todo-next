export interface ITodo {
  description: string;
}

type Props = {
  index: number;
  todo: ITodo;
  handleRemove: (index: number) => void;
};

export default function Todo({ index, todo, handleRemove }: Props) {
  return (
    <div className="flex bg-white p-2 mt-2 rounded content-center">
      <div className="flex-1 text-teal-400">{todo.description}</div>
      <button
        className="bg-red-400 p-2 rounded"
        onClick={() => handleRemove(index)}
      >
        Remove
      </button>
    </div>
  );
}
