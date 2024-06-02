import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Graph = ({ data, width, height, color, selectedIndex, selectedCircleStyle }) => {
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const maxDataValue = Math.max(...data);
  const minDataValue = Math.min(...data);

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * innerWidth;
    const y = innerHeight - ((d - minDataValue) / (maxDataValue - minDataValue)) * innerHeight;
    return [x, y];
  });

  const createPathData = (points) => {
    let pathData = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 1; i < points.length - 1; i++) {
      const xc = (points[i][0] + points[i + 1][0]) / 2;
      const yc = (points[i][1] + points[i + 1][1]) / 2;
      pathData += ` Q ${points[i][0]} ${points[i][1]} ${xc} ${yc}`;
    }
    pathData += ` T ${points[points.length - 1][0]} ${points[points.length - 1][1]}`;
    return pathData;
  };

  const pathData = createPathData(points);
  const selectedPoint = selectedIndex !== null ? points[selectedIndex] : null;

  return (
    <SVGContainer width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <path d={pathData} fill="none" stroke={color} strokeWidth="2" />
        {selectedPoint && (
          <circle
            cx={selectedPoint[0]}
            cy={selectedPoint[1]}
            {...selectedCircleStyle}
          />
        )}
      </g>
    </SVGContainer>
  );
};

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  selectedIndex: PropTypes.number,
  selectedCircleStyle: PropTypes.object,
};

Graph.defaultProps = {
  width: 400,
  height: 200,
  color: '#5467F5',
  selectedIndex: null,
  selectedCircleStyle: {
    r: 10,
    fill: 'white',
    stroke: '#5467F5',
    strokeWidth: '2px',
  },
};

export default Graph;

const SVGContainer = styled.svg`
  display: block;
  margin: 0 auto;
`;
