'use client';

import styled, { keyframes } from 'styled-components';

import ParallaxImage from '@/components/ParallaxImage';
import HistoryList from '@/components/HistoryList';

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
            <p>
              <span className="font-bold">조진목</span>
              입니다.
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
          <h3 className="text-xs col-span-2 tracking-widest">BEGINS</h3>
          <p className="text-2xl tracking-tight">
            저는
            {' '}
            <span className="italic">대구</span>
            에서 태어났습니다. 부유하진 않지만 유복한 가정에서...
          </p>
        </div>
        <ParallaxImage
          alt="childhood"
          src="/childhood/1.jpg"
          ratio="2/3"
          speed={-5}
          percentage={0.5}
          start={14}
          span={12}
          description="아가시절"
        />
        <ParallaxImage
          alt="childhood"
          src="/childhood/9.jpg"
          ratio="2/3"
          speed={-5}
          percentage={0.5}
          start={1}
          span={8}
          className="pl-[15px]"
          position="-30%"
          description="유치원 졸업"
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
          description="장래희망"
        />
        <HistorySection className="px-[15px]">
          <h3 className="text-xs mb-10 tracking-widest">HISTORY</h3>
          <ul className="flex flex-wrap relative">
            {historyList.map(({ id, name, imgSrc }) => (
              <HistoryList key={id} name={name} imgSrc={imgSrc} />
            ))}
            <li className="group cursor-default">
              <span className="text-9xl font-bold pr-5 tracking-tighter">(...)</span>
            </li>
          </ul>
        </HistorySection>
      </Contents>
    </main>
  );
}
