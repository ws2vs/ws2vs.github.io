// import dependencies
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import _ from 'underscore';
import React, { Component } from 'react';
import { render } from 'react-dom';

import { PPT_LIST } from './confs/pptConf';

class App extends Component {
    getPPTList() {
        const ret = [];

        _.each(PPT_LIST, ({ name, url }, index) => {
            ret.push((
                <a
                    key={index}
                    className="dropdown-item"
                    href={url}
                >
                    {name}
                </a>
            ));
        });

        return ret;
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">flaaatwhite</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    PPT
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {this.getPPTList()}
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doc/Note">Note</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">
                        作者很懒，什么都没留下
                    </p>
                    <hr className="my-4" />
                    <p>
                        或者他在吃鸡...
                    </p>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));