export enum ToDoState {
  COMPLETED,
  IN_PROGRESS,
  TASK,
}

export type TodoType = {
  name: string;
  state: ToDoState;
};
