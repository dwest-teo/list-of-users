# UserList

A code assignment for Mad Mobile, completed by Donny West.

## Technologies Used

This project makes use of several open-source libraries. Their functionality and rationale for inclusion follows.

[Next.js](https://github.com/zeit/next.js/) was used as a quick way to implement a server-rendered application with routing, `head` management, and more. Usage of this library eliminated lots of boilerplate code, while still giving me the flexibility to create a production-ready application.

I used [Flow](https://flow.org/) as a static type checker for this project. I have found that Flow and Typescript offer a fairly similar feature-set. I opted for Flow on this project simply because it was quicker to implement and easy to opt-in to on a per-file basis.

For state management, I chose to implement [Redux](https://redux.js.org/) with the [React bindings](https://react-redux.js.org/). I believe that Redux offered the cleanest path to implementing the project's requirements, including server-side rendering (more on this to follow).

I used [styled-jsx](https://github.com/zeit/styled-jsx) to implement styling. This library is fairly lightweight and simple, and allows one to write component-scoped CSS in JS.

On the development experience side, I used [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce code quality and formatting.

## Application Design

I chose my application structure and design based on a mindset of implementing the assigned features in a performant, production-ready manner. To that end, this project is an isomorphic React application. The initial load of the application is rendered by a Node.js server, which returns a simple HTML payload to the client. The React application bootstraps itself on the client-side, and all subsequent interactions/navigation events happen inside the client-side application. This pattern provides a number of potential benefits, such as SEO and perceived performance on the client.

To maximize the performance enhancements of this isomorphic application pattern, I used a higher-order component to scaffold the Redux store. Since code in this application can be executed on either the client or server, I included logic to always create a new Redux store on server-side renders (the first load for the client). When creating a new Redux store, we fetch user data from the API and hydrate the store. Due to the isomorphic pattern employed, this API fetch only ever happens on the server-side. This helps the application's performance, as the client is only blocked from rendering until it receives the HTML payload from the server, rather than needing to download, parse, and execute a JS bundle, then fetch from a remote API prior to rendering. Additionally, making the fetch from a Node.js server rather than the client sidesteps potential CORS issues and DNS resolution from the client.

### Future Considerations

There are several areas of the application that could be improved. I wanted to take a few moments to discuss what I'd do if I were to continue working on this application in the longer term.

Firstly, I think the styling implementation could be improved greatly by implementing some kind of design system using a more full-fledged CSS-in-JS styling library like [styled-components](https://styled-components.com/) or [Emotion](https://emotion.sh). Both of these implementations come at the cost of complexity and runtime dependencies, so I decided to go with a simpler solution. If this application were to scale, I think we could DRY up the code a bit by using a more full-featured library.

Next, I think the form to edit a user could be improved with some validation and normalization logic. Since I didn't have explicit requirements, I opted to leave the form pretty open so as not to frustrate a potential user, but this is definitely an area of opportunity.

On the performance side, I believe we could eek out some additional performance by using memoized selectors to retrieve users from the Redux store. The performance improvements from this would be negligible at the current size of the Redux store, but it'd be a definite improvement if the app were to scale. Additionally, the service worker implementation is intentionally very basic on this application. If we were building a real production application, we could cache API data more aggressively.

## Run the Application

To run the application locally, first clone this git repository and install dependencies (preferably using [Yarn](https://classic.yarnpkg.com/en/)):

```bash
$ git clone https://github.com/dwest-teo/list-of-users
$ cd list-of-users
$ yarn
```

You can now run the application in development mode (with HMR enabled):

```bash
$ yarn dev
```

## Thanks!

I enjoyed working on this project, and I really appreciate your time reviewing my work. Thanks for the opportunity!
