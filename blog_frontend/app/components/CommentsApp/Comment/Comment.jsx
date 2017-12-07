import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

const Comment = ({ name, email, country, age }) => (
  <Card>
    <CardTitle
      title={name}
      subtitle={email}
    />
    <CardText>{country} - {age}</CardText>
  </Card>
)

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default Comment;
