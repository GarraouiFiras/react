import { Fragment} from 'react';
import { Outlet, Link} from 'react-router-dom';
import './navigation.styles.scss'
import{ReactComponent as Crwn}from '../../assets/crwn.svg'
const Navigation=() => {
    return(
      <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Crwn className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
          <Link className='nav-link' to='/contact'>
CONTACT          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
      
    )
  }
  export default Navigation