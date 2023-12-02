type MyReadonly<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
} & {
    [P in Exclude<keyof T, K>]: T[P];
};
  
type Todo = {
    title: string;
    description: string;
    completed: boolean;
};
  
const todo: MyReadonly<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
};


todo.title = "Hello"; // Cannot assign to 'title' because it is a read-only property
todo.description = "barFoo"; // Cannot assign to 'description' because it is a read-only property
todo.completed = true; 
  