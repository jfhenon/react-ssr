import React from 'react';
import { NavLink as Link, Routes, Route } from 'react-router-dom';

// import child components
import { Counter } from '../counter';
import { Post } from '../post';

// export entry application component
export class App extends React.Component {
    constructor() {
        console.log( 'App.constructor()' );
        super();
    }

    // render view
    render() {
        console.log( 'App.render()' );

        return (
            <div className='ui-app'>
                {/* navigation */}
                <div className='ui-app__navigation'>
                    <Link
                        className={({ isActive }) => "nav-ui-app__navigation__link" + (isActive ? " ui-app__navigation__link--active" : "")}
                        to='/'
                        end
                    >Counter</Link>

                    <Link
                        className={({ isActive }) => "ui-app__navigation__link" + (isActive ? " ui-app__navigation__link--active" : "")}
                        to='/post'
                        end
                    >Post</Link>
                </div>

                <Routes>
                    <Route
                        path='/'
                        exact
                        element={ <Counter name='Monica Geller'/> }
                    />

                    <Route
                        path='/post'
                        exact={ true }
                        element={ <Post /> }
                    />
                </Routes>
                
            </div>
        );
    }
}