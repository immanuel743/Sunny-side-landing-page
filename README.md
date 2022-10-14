# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the
[Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Well i took the mobile first approach when designing the website and the desktop
first approach when designing the navigation bar

1. designed the html skeleton first
2. used sass for the for the css styles
3. added js for the navgition NB:( wasn't quite paying attention to the design
   styles at first then later while reviewing my code i found out the navbar
   hamburger icon doesn't change when clicked but i had all pushed my code so i
   went back to my html scss folder to adapt to the changes the git versin
   control hit me hard but with some tweaks here and there and googling i found
   the solution for the first time i actually use vscode for access my version
   control cause i'm used to using hyper terminal but i just saw the git icon
   and was why not try this so i did it was actually fun)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS

### What I learned

1)i learnt how to make use of sprite files to better optimize my html workflow.
2)i also learnt how to make responsive navigation bars although with the desktop
first approach (still trying to figure how to do it with the mobile first
approach 😓 quit dissappointed would appreciate any resource that can help🙏)
without copying any pasting code from external sources it took a few tries
though to get it i usually encountered a problem when i tried displaying the
navigation bar by adding an active class and using display block so i just left
the navigtaion item as display fles and when it reached the required dimension
width i changed the flex direction to column.

3)Sharpened my saas skills a little since i almost know every thing in theory
but don't have actually used it practically all by myself . Yeah i created a
mixin for my media queries.Now i'll never forget it😂😁.

<!-- code i'm talking about -->

&\_\_item { display: flex; align-items: center;

<!-- flex direction row by default -->

    @media screen and(max-width:600px) {
      flex-direction:column;
      display: none;

} }

### Useful resources

- [Example resource 1](https://www.creativebloq.com/features/the-complete-guide-to-svg/6) -
  This helped me on how to make use of sprite files . I really liked this
  pattern and will use it going forward.
- [Example resource 2](https://bennettfeely.com/clippy/) - This is an
  amazingtool which helped me save time when creating the clip path for the menu
  navigation
