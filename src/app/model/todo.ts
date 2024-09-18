export class ToDo {
  title: string;
  dueDate: Date;
  description: string;
  isCompleted: boolean;

  constructor() {
    this.title = 'Untitled';
    this.dueDate = new Date();
    this.description = 'No description for this task';
    this.isCompleted = false;
  }
}
