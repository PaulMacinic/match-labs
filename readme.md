# Week6 - Exercise II

Our Swiper component is almost ready, the only thing that it needs is a way to show when 2 entities have matched.

Create a `<Match/>` component that will show the 2 users that matched and their details. Check out pic called `matchPreview.png` from the `/lab-resources` folder.

When making a request to `/like`, if there is a match the response object will have a `match` property.
You could check as following `if(liked.match) do stuff...`
