import React from 'react';

const AddressItem = ({ item }) => {
  // 모든 속성이 존재하는지 확인합니다.
  const { image, name, address, price, distance, tags = [] } = item;

  return (
    <div style={styles.container}>
      {image && <img src={image} alt={name} style={styles.image} />}
      <div style={styles.info}>
        <div style={styles.name}>{name}</div>
        <div style={styles.address}>{address}</div>
        <div style={styles.details}>
          <span style={styles.distance}>{distance}</span>
          <div style={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={styles.price}>{price}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '10px',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  address: {
    fontSize: '14px',
    color: '#888',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  distance: {
    fontSize: '12px',
    color: '#888',
  },
  tags: {
    display: 'flex',
  },
  tag: {
    fontSize: '12px',
    color: '#5467F5',
    backgroundColor: '#E0E7FF',
    borderRadius: '5px',
    padding: '2px 5px',
    marginRight: '5px',
  },
  price: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
  },
};

export default AddressItem;