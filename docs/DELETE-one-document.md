---
id: DELETE-one-document
title: DELETE one document
sidebar_label: DELETE one document
---

To search for one document that is stored, run a `DELETE` command with the specific document number

:::caution

This will actually delete the document from your index

If you are following along these simple tutorials, no problem as you can simply re run the command to add the document again

:::

```
DELETE eighties_movies/_doc/1
```

- This assumes you already know the document is stored as number `1`
