import React, {Component} from 'react';
import Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import {ErrorBoundary} from "react-error-boundary";

import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import CircularProgress from "components/Loaders/CircularProgress";
import ErrorFallback from "containers/Errors/ErrorFallback";

export default function asyncComponent(importComponent) {
    class AsyncFunc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }

        UNSAFE_componentWillMount() {
            Nprogress.start();
        }

        componentWillUnmount() {
            this.mounted = false;
        }

        async componentDidMount() {
            this.mounted = true;
            const {default: Component} = await importComponent();
            Nprogress.done();
            if (this.mounted) {
                this.setState({
                    component: <Component {...this.props} />
                });
            }
        }

        render() {
            const Component = this.state.component ||
                <div className="loader-view"
                     style={{height: 'calc(100vh - 200px)'}}>
                    <CircularProgress/>
                </div>;
            return (
                <ErrorBoundary FallbackComponent={ErrorFallback}
                               onError={(error) => {
                                   console.log(error)
                               }}>
                    <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
                        {Component}
                    </ReactPlaceholder>
                </ErrorBoundary>
            );
        }
    }

    return AsyncFunc;
}
