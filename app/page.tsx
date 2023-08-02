'use client';

import styled, { keyframes } from 'styled-components';

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const Title = styled.h1`
  animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) 2;
`;

export default function Home() {
  return (
    <main>
      <div className="text-4xl absolute inset-0 flex items-center justify-center">
        <Title>
          DEFINE JINMOK
        </Title>
      </div>
      <h2 className="text-2xl float-right pr-[5%] mt-64 mb-5">
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
      <div />
    </main>
  );
}
