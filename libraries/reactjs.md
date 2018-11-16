## ReactJS
* [Lifecycle Methods](#lifecycle-methods)

## Lifecycle Methods
1) `componentWillMount`  
    * Method that is executed immediately before initial rendering of component
2) render
3) `componentDidMount`
    * This method is run immediately after the initial rendering
4) `s`  
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
    

