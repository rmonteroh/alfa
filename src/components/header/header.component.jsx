import React from 'react'
import './header.styles.scss'
import {Link, withRouter} from 'react-router-dom'

import {connect} from 'react-redux';
import {getNav} from '../../redux/nav/nav.reducer';
import fetchNavItems from '../../redux/nav/fetchNavItems';

const Header = ({items, location}) =>{
    const route = location.pathname.replace("/", "");
    return (
        <div className='header'>
            <div className='logo-container'>
            <Link className='option' to='/'>Alfa.io</Link>
            </div>
            <div className='options'>                
                {
                    items.nav.map((item,index )=> <Link className={`option ${route === item.route ? 'active' : ''}`} key={index} to={item.route}>{item.text}</Link>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: getNav(state)
  })
  
  const mapDispatchToProps = (dispatch) => ({
    navItem: dispatch(fetchNavItems())
  });

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));