export interface ApiResponse<Type> {
  count: number;
  results: Type;
}

export interface PaginatedList<Type> {
  page: number;
  total: number;
  items: Type[];
}
