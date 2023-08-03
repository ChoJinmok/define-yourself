import Image from 'next/image';

import styled from 'styled-components';

const Wrapper = styled.li`
    &:not(:nth-last-of-type(2)) span::after {
      content: ",";
    }
`;

interface HistoryListProps {
  name: string;
  imgSrc: string;
}

export default function HistoryList({ name, imgSrc }: HistoryListProps) {
  return (
    <Wrapper className="group cursor-default">
      <span className="text-9xl font-bold pr-5 tracking-tighter">
        {name}
      </span>
      <div className="aspect-[2/3] overflow-hidden w-[28vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none invisible group-hover:visible">
        <div className="relative h-full v">
          <Image alt={name} src={imgSrc} fill className="object-cover" priority />
        </div>
      </div>
    </Wrapper>
  );
}
