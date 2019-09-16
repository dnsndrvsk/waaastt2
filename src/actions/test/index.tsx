import {
  TEST_ADD,
  TEST_LOAD,
} from 'store/actionTypes';

export const testAdd = (count: number) => ({
  type: TEST_ADD,
  payload: count,
});

export const testLoad = (limit: number, page: number) => ({
  type: TEST_LOAD,
  method: 'GET',
  url: `/images/search?limit=${limit}&page=${page}`,
  payload: {},
});
