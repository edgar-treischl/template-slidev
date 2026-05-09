---
theme: default
aspectRatio: 16/9
comark: true
layout: TitleSlide
transition: slide-left
download: true
---


<template #title>
Building Beautiful Slides
</template>

<template #subtitle>
Vue-powered presentations · May 2026
</template>

---
layout: cover
background: test.png
class: 'text-white'
---

# Page 2

This is a page with the layout `center` and a background image.

<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0, y: 0 }"
  :click-1="{ x: 0, y: 30 }"
  :click-2="{ y: 60 }"
  :click-2-4="{ x: 40 }"
  :leave="{ y: 0, x: 80 }"
>
  Slidev
</div>

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

![Test Image](/test.png){width=250px lazy}

::block-component{prop="value"}
The **default** slot is a strange thing.
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

---

## Icons

#### Add Icons 

```shell 
yarn add @iconify-json/carbon @iconify-json/mdi @iconify-json/lucide
```

Use them via:

- Carbon: <carbon-warning class="text-red-500 text-2xl" />

- MDI: <mdi-rocket-launch class="text-2xl text-blue-500" />

- Or Lucide Icons: <lucide-github />


---

## Mermaide Fun


```mermaid {theme: 'neutral', scale: 0.8}
---
config:
  theme: 'base'
  themeVariables:
    primaryColor: '#BB2528'
    primaryTextColor: '#fff'
    primaryBorderColor: '#7C0000'
    lineColor: 'darkgray'
    secondaryColor: 'orange'
    tertiaryColor: '#fff'
---
        graph TD
          A[Christmas] -->|Get money| B(Go shopping)
          B --> C{Let me think}
          B --> G[/Another/]
          C ==>|One| D[Laptop]
          C -->|Two| E[iPhone]
          C -->|Three| F[fa:fa-car Car]
          subgraph section
            C
            D
            E
            F
            G
          end

```


---

## C4 Fun

```mermaid {theme: 'neutral', scale: 0.5}
    C4Dynamic
    title Test Title

    Container_Boundary(b, "API Application") {
      
      Component(c1, "Security Component", "Spring Bean", "Provides functionality Related to signing in, changing passwords, etc.")
      
      Component(c2, "Sign In Controller", "Spring MVC Rest Controller", "Allows users to sign in to the Internet Banking System.")
    }

    ContainerDb(c3, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")

    Container(c4, "Single-Page Application", "JavaScript and Angular", "Provides all of the Internet banking functionality to customers via their web browser.")
    
    Rel(c1, c2, "Submits credentials to", "JSON/HTTPS")
    Rel(c2, c3, "Calls isAuthenticated() on")
    Rel(c3, c4, "select * from users where username = ?", "JDBC")

    UpdateRelStyle(c1, c2, $textColor="red", $offsetY="-40")
    UpdateRelStyle(c2, c3, $textColor="green", $offsetX="-40", $offsetY="60")
    UpdateRelStyle(c3, c4, $textColor="yellow", $offsetY="-40", $offsetX="10")





```


---

## LaTeX Fun

### Inline

- Surround your LaTeX with a single `$` on each side for inline rendering.

$\sqrt{3x-1}+(1+x)^2$


### Block

- Use two ($$) for block rendering. This mode uses bigger symbols and centers the result.

$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\end{aligned}
$$


---

## Test Slide

- More here