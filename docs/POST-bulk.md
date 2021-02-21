---
id: POST-bulk
title: "POST: Add several documents at once"
sidebar_label: "POST: Add several documents at once"
---

To add two more documents to the same index `eighties_movies` we can do this using the `POST` and `_bulk` command

```
POST eighties_movies/_bulk
{"index":{"_id":2}}
{"title":"Back to the Future","category":"Comedy","released":"July 3, 1985","star":{"first_name":"Michael J.","last_name":"Fox","character":"Marty"}}
{"index":{"_id":3}}
{"title":"Working Girl","category":"Comedy","released":"December 26, 1988","star":{"first_name":"Melanie","last_name":"Griffith","character":"Tess"}}
{"index":{"_id":4}}
{"title":"E.T","category":"Science Fiction","released":"June 23, 1982", "star": {"first_name":"Henr", "character":"Elliott"}}
```

- This stores three more _documents_ with unique ids `2`, `3` and `4` inside the _index_ named `eighties_movies`
