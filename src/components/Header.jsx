import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <div className='centerHeader'>
      { name }
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.reducerName.name,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Header);
