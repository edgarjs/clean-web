# Development process

This is a suggestion of how to approach development using this architecture.
As described in the [Philosophy](docs/philosophy.md) page, the main idea is to
focus on the business requirements and needs.

So before any coding, we'll need to address the following list:

1. Define business workflows and events
2. Define data structures (a.k.a. types)
3. Define services
4. Define the deliver layer (a.k.a. apps)

> If you're wondering where the code examples are, see the
> [Philosophy](docs/philosophy.md) page first.

---

## Workflows and events

For workflows, it's recommended to use pure functions. A pure function is basically
a single purpose function that receives some data, works with it and returns
another data structure as output.

    Input Data -> (Some processing) -> Output Data

But before knowing what workflows we need to implement, we need to know what
events will trigger these workflows.

In a simple ToDo list app, we would have events like:

* *Task added*
* *Task completed*
* *Task deleted*

Each of these events, was the result of some business logic that had to process
some data. So in order to have a Task added, we need a workflow that does it.

    Task data -> Add Task workflow -> Task added event

Now we need to do the same for the other two events and we may end up with these
workflows:

* Add Task
* Complete Task
* Delete Task

> An important note to make maintainability easier is that workflows should not
> mutate the data they receive. That way you can always be sure that the objects
> you're working with, are stateless.

## Types

The data passed as input for the workflows needs to have a well defined structure.
Following the example of the ToDo list we'll be adding a _Task_. And a _Task_ is
made of a _title_ and a flag to know whether it's _completed_ or not.

So it's clear that there's a _Task_ type with the following structure:

    {
      "title": String,
      "completed": Boolean
    }

## Services

Now we need to think what external dependencies our workflows will need. The first
one that should come to our mind is persistence. Where do we want to store our
tasks so that they can be listed the next time our app is loaded?

The answer will depend on the business requirements, but for now we know we need
a service to do that.

A service is basically any external dependency that's not part of the business logic.
For our example we only need this service so far (probably an authentication one
will also be useful but it's omitted for simplicity):

* Persistence

## Apps

Lastly, the visual representation of data and how the user will input new data
is translated into Apps.

Think of an app as a page (SPA if you like). So basically here you can use any
framework (i.e. React, Vue, Angular) or do it however you like. This is an
implementation detail.

In our example, we'd have:

* Tasks App
* Authentication App
