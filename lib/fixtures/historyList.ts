interface History {
  id: number;
  name: string;
  imgSrc: string;
}

const historyList:History[] = [
  { id: 1, name: '토목공학', imgSrc: '/college-days/1.jpeg' },
  { id: 2, name: '현수교', imgSrc: '/college-days/4.jpeg' },
  { id: 3, name: 'VVVIP', imgSrc: '/movie/1.png' },
  { id: 4, name: '전문건설', imgSrc: '/construction/1.jpg' },
  { id: 5, name: '갱생', imgSrc: '/construction/6.jpg' },
  { id: 6, name: '인테리어', imgSrc: '/interior/2.jpg' },
  { id: 7, name: '가구', imgSrc: '/interior/5.jpg' },
  // { id: 8, name: '카페', imgSrc: '/cafe/1.jpg' },
  { id: 9, name: '바리스타', imgSrc: '/cafe/5.jpg' },
  { id: 10, name: '바보', imgSrc: '/wonhu/4.jpg' },
  { id: 11, name: '호빵맨', imgSrc: '/developer/1.png' },
  { id: 12, name: 'FD', imgSrc: '/developer/2.jpg' },
];

export default historyList;
