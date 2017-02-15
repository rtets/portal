import React from 'react';
import ReactDOM from 'react-dom';

class Pig extends React.Component {
    render() {
        return <img src="img/pig.png" ></img>;
    }
}

class Navitem extends React.Component {
    render() {
        return <li className="root-menu-item"><a href={this.props.linkdest}><span className={"glyphicon glyphicon-" + this.props.glyphname}></span> {this.props.name}</a></li>
    }
}

class Nav extends React.Component {
  render() {
    return (
    <nav className="navbar navbar-default navbar-fixed-top" >
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"><img src="/img/portal.png" /></a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <Navitem name="Reports" glyphname="stats" linkdest="#reports" />
                  <Navitem name="Workspaces" glyphname="blackboard" linkdest="#workspaces" />
                  <Navitem name="Community" glyphname="comment" linkdest="#community" />
                  <Navitem name="Help" glyphname="question-sign" linkdest="#help" />
                  <li>
                    <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term"></input>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
    </nav>
    )
  }
};

class Channel extends React.Component {
    render() {
        return (
            <div className="channel-container">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

class Channels extends React.Component {
    render() {
        return (
            <div className="channels-container">
                <Channel name="Favorites" />
                <Channel name="Trending" />
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <Channels />
        )
    }
}

ReactDOM.render(<Nav />, document.querySelector('#mainnav'));
ReactDOM.render(<Main />, document.querySelector('#mainapp'));
