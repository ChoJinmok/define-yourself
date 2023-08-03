'use client';

import { useState, useEffect, useRef } from 'react';

import styled, { keyframes } from 'styled-components';

import ParallaxImage from '@/components/ParallaxImage';
import HistoryList from '@/components/HistoryList';
import HistoryImage from '@/components/HistoryImage';
import HistoryImages from '@/components/HistoryImages';

import historyList from '@/lib/fixtures/historyList';

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const Title = styled.h1`
  animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) 1s 2;
`;

const fadeIn = keyframes`
  from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Contents = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s cubic-bezier(0, 0, 0.2, 1) 3s;
  animation-fill-mode: forwards;
`;

const HistorySection = styled.section`
  &:has(li:hover) li:not(:hover) span {
    color: rgba(0, 0, 0, 0.1);
  }
`;

export default function Home() {
  const [historyKeyword, setHistoryKeyword] = useState('');
  const [activeDivIndex, setActiveDivIndex] = useState(-1);

  const divRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  function checkIfCentered() {
    const screenCenterY = window.innerHeight / 2;

    const index = divRefs.findLastIndex((ref) => {
      if (!ref.current) return false;

      const currentElement = ref.current as HTMLDivElement;

      const elementRect = currentElement.getBoundingClientRect();
      return elementRect.top < screenCenterY;
    });

    setHistoryKeyword(['토목공학', '영화', '건설', '인테리어', '카페', '조카', '개발자'][index]);
    setActiveDivIndex(index);
  }

  useEffect(() => {
    window.addEventListener('scroll', checkIfCentered);
    return () => window.removeEventListener('scroll', checkIfCentered);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="fixed inset-0 flex items-center justify-center z-10 mix-blend-difference">
        <Title className="text-white text-4xl font-semibold">
          DEFINE JINMOK
        </Title>
      </div>
      <Contents>
        <div className="flex justify-end">
          <h2 className="text-2xl pr-[5%] mt-64 mb-5">
            <p>
              사람들과
              {' '}
              <span className="italic">함께</span>
            </p>
            <p>
              <span className="italic">꿈을 실현</span>
              시키고 싶은 개발자,
            </p>
          </h2>
        </div>
        <ParallaxImage
          alt="cover"
          src="/cover.jpg"
          ratio="16/9"
          speed={-5}
          percentage={0.5}
          start={1}
          span={24}
        />
      </Contents>
      <Contents className="relative z-20 bg-[#f7f6f1]">
        <div className="px-[15px] py-[120px] grid grid-cols-4 gap-x-1.5">
          <h3 className="text-xs col-span-2 tracking-widest">GREETING</h3>
          <p className="text-2xl tracking-tight">
            BTS, 손흥민, 봉준호,
            {' '}
            <span className="font-bold text-3xl">조진목</span>
            {' '}
            Let&apos;s go! 🤟

            <br />
            <br />

            <span className="text-xl bg-black text-white">#ENFJ #대구 #소통 #맞팔</span>

          </p>
        </div>
        <ParallaxImage
          alt="childhood"
          src="/childhood/7.jpg"
          ratio="2/3"
          speed={-5}
          percentage={0.5}
          start={14}
          span={12}
          description="다리근육이 덜 발달한 진목"
        />
        <ParallaxImage
          alt="childhood"
          src="/childhood/2.jpg"
          ratio="2/3"
          speed={-5}
          percentage={0.5}
          start={1}
          span={8}
          className="pl-[15px]"
          position="-30%"
          description="이제 이 자리는 제겁니다."
        />
        <ParallaxImage
          alt="childhood"
          src="/childhood/10.jpg"
          ratio="2/3"
          speed={-5}
          percentage={0.5}
          start={10}
          span={12}
          position="-40%"
          description="이 아이는 커서 TypeRacer 53wpm을 받습니다."
        />
        <HistorySection className="px-[15px] pb-96">
          <h3 className="text-xs mb-10 tracking-widest">HISTORY</h3>
          <ul className="flex flex-wrap relative">
            {historyList.map(({ id, name, imgSrc }) => (
              <HistoryList key={id} name={name} imgSrc={imgSrc} alignment={name === 'CGV VVVIP' ? 'left' : ''} />
            ))}
            <li className="group cursor-default">
              <span className="text-9xl font-bold pr-5 tracking-tighter">(...)</span>
            </li>
          </ul>
        </HistorySection>

        <section className="px-[15px]">
          {activeDivIndex !== -1 && <h2 className="fixed top-1/2 -translate-y-1/2 left-1/2 text-8xl font-bold z-30">{historyKeyword}</h2>}

          {/* 토목공학 */}
          <HistoryImage
            speed={2}
            percentage={0.5}
            alt="college-day"
            start={11}
            span={7}
            ref={divRefs[0]}
            imgSrc="/college-days/7.jpg"
          />
          <HistoryImage
            speed={-2}
            percentage={0.5}
            alt="college-day"
            start={1}
            span={7}
            alignment="right"
            imgSrc="/college-days/5.jpeg"
          />

          {/* 영화 */}
          <HistoryImage
            speed={2}
            percentage={0.5}
            alt="movie"
            start={16}
            span={7}
            ref={divRefs[1]}
            imgSrc="/movie/3.jpg"
          />
          <HistoryImage
            speed={-2}
            percentage={0.5}
            alt="movie"
            start={3}
            span={7}
            imgSrc="/movie/4.jpg"
          />

          {/* 건설 */}
          <HistoryImage
            speed={2}
            percentage={0.5}
            alt="construction"
            start={18}
            span={7}
            ref={divRefs[2]}
            imgSrc="/construction/7.jpg"
          />
          <HistoryImage
            speed={-2}
            percentage={0.5}
            alt="construction"
            start={10}
            span={7}
            imgSrc="/construction/3.jpg"
          />

          {/* 인테리어 */}
          <HistoryImages
            ref={divRefs[3]}
            historyImages={[{
              speed: 2, percentage: 0.5, alt: 'interior-1', start: 1, span: 7, imgSrc: '/interior/13.jpg',
            }, {
              speed: -2, percentage: 0.5, alt: 'interior-2', start: 18, span: 7, imgSrc: '/interior/11.jpg',
            }]}
          />

          {/* 카페 */}
          <HistoryImages
            ref={divRefs[4]}
            historyImages={[{
              speed: 2, percentage: 0.5, alt: 'cafe-1', start: 7, span: 7, imgSrc: '/cafe/3.jpg',
            }, {
              speed: -2, percentage: 0.5, alt: 'cafe-2', start: 14, span: 7, imgSrc: '/cafe/2.jpg',
            }]}
          />

          {/* 조카 */}
          <HistoryImages
            ref={divRefs[5]}
            historyImages={[{
              speed: 2, percentage: 0.5, alt: 'wonhu-1', start: 3, span: 7, imgSrc: '/wonhu/11.jpg',
            }, {
              speed: -2, percentage: 0.5, alt: 'wonhu-2', start: 18, span: 7, imgSrc: '/wonhu/7.jpg',
            }]}
          />

          {/* 개발 */}
          <HistoryImage
            speed={2}
            percentage={0.5}
            alt="developer"
            start={8}
            span={7}
            ref={divRefs[6]}
            imgSrc="/developer/7.jpg"
          />
          <HistoryImage
            speed={-2}
            percentage={0.5}
            alt="developer"
            start={1}
            span={7}
            imgSrc="/developer/8.jpg"
          />
        </section>
      </Contents>
    </main>
  );
}
