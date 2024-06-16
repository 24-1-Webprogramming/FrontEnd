// src/stories/AddressItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LocationIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/location.svg';

const AddressItem = ({ name, address }) => {
  return (
    <div style={styles.addressItem}>
      <LocationIcon width={20} height={20} style={styles.icon} />
      <div>
        <div style={styles.addressName}>{name}</div>
        <div style={styles.addressDetail}>{address}</div>
      </div>
    </div>
  );
};

const styles = {
  addressItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
    marginBottom: '15px',
  },
  icon: {
    marginRight: '10px',
    color: '#5467F5',
  },
  addressName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  addressDetail: {
    fontSize: '14px',
    color: '#aaa',
  },
};

AddressItem.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default AddressItem;