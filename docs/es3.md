---
id: es3
title: Create an Index
sidebar_label: Create an Index
---

# Create in Index

:::tip

An index is a way of grouping data

:::

To store data inside Elasticsearch the data, an _index_ needs to be created containing this data

The act of storing data is also called _indexing_ so you might come accross the terminology _indexing an index_.

This just means to store some data.

## PUT command

To store data inside Elasticsearch, run this PUT command
Run this command using DevTools [TODO - link to What is DevTools / Environment setup]

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
