import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true,
            error: error,
            errorInfo: info
        });
        //show error
    }

    render(){
        if(this.state.errorInfo){
            return (<div className="container">
                <div className="p-d-flex justify-content-center align-items-center">
                <h3>Something went wrong</h3>
                {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
                <a href="/" className="btn btn-primary">Go Home</a> <a href="/login" className="btn btn-danger">Login</a>
                </div>
            </div>)
        }

        return this.props.children;
    }
}

export default ErrorBoundary