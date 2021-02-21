---
id: PUT-update
title: "PUT: Update one document"
sidebar_label: "PUT: Update one document"
---

To update one document

- Run this `PUT` command

```
PUT eighties_movies/_doc/2
{
  "title": "Back to the Future",
  "category": "Comedy",
  "released": "July 3, 1985",
  "star": {
    "first_name": "Michael",
    "middle_name": "J.",
    "last_name": "Fox",
    "character": "Marty"
  }
}
```

- This updates the _document_ with unique id `2` inside the _index_ named `eighties_movies`

:::info

This document with id `2` was added in the POST bulk example earlier

:::

- The first name was `Michael J.` and is now `Michael`

- There is a now a middle name `J.`
