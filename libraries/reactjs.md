## ReactJS
* [Lifecycle Methods](#lifecycle-methods)
* [Imperative v. Declarative](#imperative-v-declarative)

## Lifecycle Methods
1) `componentWillMount`  
    * Method that is executed immediately before initial rendering of component
2) render
3) `componentDidMount`
    * This method is run immediately after the initial rendering
4) `componentWillReceiveProps`  
    * This will be executed as soon as a component receives new props
    * e.g.: A component's state changes, or the component receives new props
5) `shouldComponentUpdate`
  * This executes before rendering, and after receiving new props / state
  * Return false from sCU to prevent re-rendering
6) render
7) `componentWillUpdate`
    * Executed right before the re-render after receiving new props or state
8) `componentDidUpdate`
    * Executes after rendering... after the compoonents updates are flushed to the DOM
7) `componentWillUnmount`
    * executed immediately before removing component from the DOM

## Imperative v Declarative
* Imperative is updating changes by creating and calling functions that are on a component.
* Declaratively updating the compnonent is by using this.setState({newState: 1});
* Imperatively changing parts of a component would be updating the component, not using the state, or any lifecycle hooks. (This is not the react way)
* Declaratively updating state, allows for easier debugging, and allows thd react diffing algorithm to determine what aspects of the DOM need to be updated.
* Imperative method in react (Calling this.setState), and then everything else gets to be declarative
* When we make things `Declarative`, we get to compose them together...
    * From react we get ReactDOM.render which know's how to take a div from React.Element
    * ReactDOMRender know's how to change a node's classname... (classList.add / remove)
    * We get to declaratively compose our UI and offload all of the DOM updates to reactDOMRender.


## Stateless functional components
* Stateless functional components are React components that do not have any internal state
* They simply exist to render content to the screen and do not need to extend from React.Component
* e.g.:
    ```js
    const List = ({ items }) => (
      <ul className="list">
        {items.map(item => <ListItem item={item} />)}
      </ul>
    );
    ```
* Essentially stateless components are functions that return an HTML element and these components usually take in props that will contain the data to render to the screen.

## Important Lifecycle Methods