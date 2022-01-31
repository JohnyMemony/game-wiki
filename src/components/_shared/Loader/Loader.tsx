import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

interface Props {
  centered?: boolean;
}

export const Loader: React.FC<Props> = (props) => {
  const { centered } = props;
  const marginX = centered ? 'auto' : 0;
  const marginY = centered ? 120 : 0;

  return (
    <Pane>
      <Spinner className="loader" marginX={marginX} marginY={marginY} />
    </Pane>
  );
};
