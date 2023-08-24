import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className="error-wrapper">
          <h1>Oops something went wrong</h1>
          <p>Please try again later or check your network connection.</p>
      </div>
        )
      }
  
      return this.props.children; 
    }
  }