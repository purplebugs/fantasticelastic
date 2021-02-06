---
id: PUT-command
title: PUT command
sidebar_label: PUT command
---

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
