# Directories and files

When you open a project, the first thing you should see is the architecture.
Not a development framework's file structure.

* Business logic files live under `/src`.
* Configuration files live separately from the business logic. Under `/config`.

Inside `/src` there are other directories that represent a layer of the system
architecture. Each layer is responsible of a specific _task_ and exposes an
interface for its boundaries.

    +-------------+
    | Workflows   |
    +-------------+
    | Services    |
    +-------------+
    | Apps        |
    +-------------+

## Workflows

A Workflow represents a single Use Case in the business model. So it could contain
logic for creating an order, for example.

Workflows are pure functions that only handle data structures, they don't know
anything about UI or Components. Their input is data, and their output is data.

              +----------+
    Data  ->  | Workflow |  ->  Data
              +----------+

## Services

Services are used in Workflows. They are _gateway interfaces_ that abstract external
dependencies in an internal interface.

    +-----------+
    | Workflow  |
    |           |
    | (Service)-|----(External dependency)
    +-----------+

## Apps

An App is the _delivery_ layer of the data processed by Workflows. It presents
all UI and collects input from the users. In this case, an App can be a page
that renders in the browser.

Apps are generally independent of each other, so in a multi-page system you could
have many apps (one for each page). And you could use any framework of method to
achieve its purpose, but it remains encapsulated within the App.
