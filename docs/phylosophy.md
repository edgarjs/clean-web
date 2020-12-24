# Phylosophy

Web development has evolved very quickly in the last years. From Scriptaculous and
jQuery, to React and Svelte.

But most of the frameworks and libraries focus on UI and rendering. Which is good,
but it has come to a point where developers have become _slaves_ of the framework
and not the other way around as it should be.

Libraries like React, Vue.js and Angular have become so popular because they
provide a very easy way to render HTML dynamically and efficiently.

But those should be _hot swapable_ without affecting any of the other parts of the
system. Like the validation and peristence logic.

## Business

This architecture follows some the Domain Driven Design principles. Which is focused
on the business processes and context, and so the code that we write should try
to model these business flows and data.

## Layers

This architecture is also influenced by the [Clean Architecture][clean-architecture],
which basically proposes layers with well defined boundaries, making it easy to
abstract a large system into smaller parts and components.

These layers are described in the [Directories and files](directories-and-files.md)
page with more detail.

## Implementation details

Another benefit of this approach is that it allows developers to focus more on what
gives value to the business instead of trying to decide which library to use.

This repository has an example of a simple ToDo app that's rendered using React.
But the React code is an implementation detail that can be swapped by another
that's made in Svelte.


[clean-architecture]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
