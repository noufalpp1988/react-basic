import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Header />
                <Content />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>Header component</h2>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content component</h2>
            </div>
        );
    }
}


export default App;