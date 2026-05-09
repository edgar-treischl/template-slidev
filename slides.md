---
layout: center
aspectRatio: 16/9
comark: true
---

# Test Slidev

This is the cover page.

---
layout: cover
background: public/test.png
class: 'text-white'
---

# Page 2

This is a page with the layout `center` and a background image.

<!-- This is a **note** -->

---

# Page 3

This is a default page without any additional metadata.


## With Code Block

```ts
console.log('Hello, World!')
```


## Run Code via

```ts {monaco-run} {autorun:false}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```




---
layout: quote
---

## Comark

This is a [red text]{style="color:red"} :inline-component{prop="value"}

![](/test.png){width=100px lazy}

::block-component{prop="value"}
The **default** slot
::



---

## Comark II

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

