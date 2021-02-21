---
id: GET-match
title: GET documents that match a value
sidebar_label: "GET: documents that match a value"
---

To search for one document that is stored, run a `GET` command with `match`

```
GET eighties_movies/_search
{
  "query": {
    "match": {
      "title": "Pretty in Pink"
    }
  }
}
```

- Returns documents that match a provided text, number, date or boolean value
