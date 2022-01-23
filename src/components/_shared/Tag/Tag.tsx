import React from 'react';
import { Badge } from 'evergreen-ui';

interface Props {
  text: string;
  color?: 'green' | 'automatic' | 'neutral' | 'blue' | 'red' | 'orange' | 'yellow' | 'teal' | 'purple';
}

export const Tag: React.FC<Props> = (props) => {
  const { text, color } = props;

  return (
    <Badge className="tag" color={color}>{text}</Badge>
  );
};
