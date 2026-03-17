import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 50 },
    { duration: '20s', target: 200 },
    { duration: '20s', target: 400 },
  ],
};

export default function () {
  http.get('http://localhost:3000/api/data');
}