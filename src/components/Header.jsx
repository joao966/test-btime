import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <header className="header">
      <div className="name">
        {name ? `Bem-Vindo(a) - ${ name }`: ''}
      </div>
      <div className="imgHeader">
        <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/16268.png" alt="" />
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  name: state.reducerName.name,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Header);
