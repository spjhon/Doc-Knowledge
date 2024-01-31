---
sidebar_position: 3
---

# CSS Tips and good Practices

## CSS Reddit Comments

### Good Practices

#### **Pro**

- Uses modern CSS features that are well-supported;
- Documents those with a comment and link;
- Uses CSS variables with fallbacks;
- Applies DRY concept: knows about specificity and cascading;
- Has a focus on accessibility;
- Uses many tiny (S)CSS modules;
- Allows for nested semantic HTML to be its own selector;
- Uses very few classNames;
- Uses flex or grid sensibly;
- Not afraid to use "old" CSS like float sensibly;
- Can do with 4 lines of CSS what a n00b does in 40;
- Aware of paint/composite/layout and optimizes animations;
- Strong-types their CSS variables using @property;
- Aware of and using different unit sizes responsibly.
- Full-stack (aka "I know CSS" aka "I use Tailwind" aka "I have no idea what I'm doing")

***

Where do I begin...

Well, look at your average Redditor front-end portfolio. In between the soup of endless div tags you'll either see utility class carpet combs, or you'll see badly named BEM classNames, or you see a combination of the two.

m-[13px]
Tailwind dev goes: "I know CSS!" 😮‍💨

Right. I know fuel goes boom, rocket goes up; I know rocket science! /s

Besides that thing, the problem for most CSS newbies is that none of their work can scale. Needing to make a universal style change in an app riddled with m-[13px] and m-[15px] is a hellish nightmare.

Same for inline styles, or !important, hard-coded margin: 13px values and colors, and the list goes on and on.

Your CSS needs to be minimal, elegant, and vanilla with the help of SASS so you can nest things sensibly. That's kind-of coming to CSS, but it's not a complete solution and probably best ignored.

CSS is easy to think you know it, difficult to realize you don't know shit, and very hard to master. And when you do, you know you know better than those who think they know it, but you also know there's so much you don't know.

***

## CSS Tips

- "Two-dimensionally" means grid modules allow simultaneous laying out of box models in rows and columns.
- Use Flexbox if you only need to resize and reposition elements one-dimensionally.
