interface History {
  id: number;
  name: string;
  imgSrc: string;
}

const historyList:History[] = [
  { id: 1, name: '토목공학', imgSrc: '/college-days/1.jpeg' },
  { id: 2, name: '현수교', imgSrc: '/college-days/4.jpeg' },
  { id: 3, name: 'CGV VVVIP', imgSrc: '/movie/4.png' },
  { id: 4, name: '전문건설업', imgSrc: '/construction/1.jpg' },
  { id: 5, name: '노후관 갱생', imgSrc: '/construction/6.jpg' },
  { id: 6, name: '인테리어 디자인', imgSrc: '/interior/9.jpg' },
  { id: 7, name: '가구 디자인', imgSrc: '/interior/5.jpg' },
  { id: 8, name: '카페', imgSrc: '/cafe/1.jpg' },
  { id: 9, name: '바리스타(?)', imgSrc: '/cafe/5.jpg' },
  { id: 10, name: '조카바보', imgSrc: '/wonhu/8.jpg' },
  { id: 11, name: '호빵맨', imgSrc: '/developer/1.png' },
  { id: 12, name: '프론트엔드 개발자', imgSrc: '/developer/7.jpg' },
];

export default historyList;
