import React, { Component } from 'react';
import notfound from './assets/notfound.svg';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="p-8 text-center bg-white rounded shadow-md">
            <img src={notfound} alt="Not Found" className="mx-auto max-lg:w-60 w-[600px]" />
            <h1 className="mt-4 mb-4 text-2xl font-semibold">Not Found</h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;