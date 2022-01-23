import React from 'react';
import { Pagination as EgPagination } from 'evergreen-ui';

interface Props {
  page: number;
  total: number;
  onChange(page: number): void;
}

export const Pagination: React.FC<Props> = (props) => {
  const { page, total, onChange } = props;

  return (
    <EgPagination page={page} totalPages={total} onPageChange={onChange} />
  );
};
