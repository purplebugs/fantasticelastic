---
id: POST-update
title: "POST: Update part of one document"
sidebar_label: "POST: Update part of one document"
---

To update part of one document

- Run this `POST` command

```
POST eighties_movies/_update/4
{
  "doc": {
    "title": "E.T. the Extra-Terrestrial",
    "released":"June 13, 1982",
    "star" : {"first_name": "Henry", "last_name": "Thomas"}
  }
}
```

- This updates the _document_ with unique id `4` inside the _index_ named `eighties_movies`

:::info

This document with id `4` was added in the POST bulk example earlier

:::

- The title was `E.T.` and is now `E.T. the Extra-Terrestrial`

- The date was `June 23, 1982` and is now `June 13, 1982`

- star.first_name was `Henr` and is now `Henry`

- star.last_name was missing and is now added as `Thomas`
