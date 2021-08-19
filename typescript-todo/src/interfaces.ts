export interface ITask {
  todo: string;
  deadline: number;
}

export interface IProps {
  todo: ITask;
  completeTodo(completeTodo:string): void;
}
