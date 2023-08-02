'use client';

import Image from 'next/image';

import styled, { keyframes } from 'styled-components';

import RellaxWrapper from 'react-rellax-wrapper';

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
        <div className="overflow-hidden h-screen">
          <RellaxWrapper speed={-3} percentage={0.5}>
            <div className="relative h-screen">
              <Image alt="cover" src="/cover.jpg" fill className="object-cover" priority />
            </div>
          </RellaxWrapper>
        </div>
      </Contents>
    </main>
  );
}
