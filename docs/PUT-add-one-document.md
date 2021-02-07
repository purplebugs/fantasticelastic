---
id: PUT-add-one-document
title: "PUT: Add one document"
sidebar_label: "PUT: Add one document"
---

To store data inside Elasticsearch

- Run this `PUT` command using DevTools
- [TODO: link to What is DevTools / Environment setup]

```
PUT eighties_movies/_doc/1
{
  "title": "Pretty in Pink",
  "category": "Teen",
  "released": "January 29, 1986",
  "star": {
    "first_name": "Molly",
    "last_name": "Ringwald",
    "character": "Andie"
  }
}
```

- This stores one _document_ with unique id `1` inside the _index_ named `eighties_movies`

:::info
Elasticsearch is a _document store_
:::
