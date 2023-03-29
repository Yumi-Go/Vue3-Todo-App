
## Project Description

A todo app, that has simple User Interface.


## What does it do

- Shows a list of tasks
- Allows you to add a task
- Allows you to bookmark a task
- Allows you to complete a task
- Allows to filter the list, by bookmarked tasks



## What do we need for the setup

- Array, that holds all the tasks
- Method, that puts new items in the Array
- Method, that filters by bookmarked item



## Example of tasks Array data

```
tasks = [
    {
        id: 0,
        name: 'My magical task',
        bookmarked: false,
        completed: false,
    },
    {
        id: 1,
        name: 'My magical task',
        bookmarked: false,
        completed: false,
    },
]
```


### When a task is completed

We toggle the completed state, inside the task.

```
{
    id: 1,
    ...
    completed: true,
}
```


### What do we need to get Add Task method to work

Guidance example, not Vue ready.

```
tasks.push(  {
        id: 4,
        name: input.name,
        bookmarked: false,
        completed: false,
    }, )
```