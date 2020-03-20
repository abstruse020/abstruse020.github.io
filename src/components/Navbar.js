import React,{ Component } from 'react';

class Navbar extends Component{
  constructor(props) {
    super(props);

    this.navData = props.navbarData;

  }

render() {
  return(
    <nav className='my_nav navbar-expand-md'>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#my_nav_collapse"
        aria-controls="#my_nav_collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div className='collapse navbar-collapse' id='my_nav_collapse'>
          <ul className='navbar-nav'>
            <li className='navbar_links nav-item'>
              <a className='nav-link' href='#'>{this.navData.link1}</a>
            </li>
            <li className='navbar_links nav-item'>
              <a className='nav-link' href='#'>{this.navData.link2}</a>
            </li>
          </ul>
        </div>
    </nav>
  )
}
}

export default Navbar;
