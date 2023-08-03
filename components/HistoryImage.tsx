import { forwardRef } from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import RellaxWrapper from 'react-rellax-wrapper';

import type { ForwardedRef } from 'react';
import type { RellaxWrapperProps } from 'react-rellax-wrapper/lib/rellaxWrapper';

const ImageContainer = styled.div<{ $start: number, $span: number, $alignment: string }>`
  grid-column: ${({ $start, $span }) => `${$start} / ${$start + $span}`};

  & img {
    object-position: ${({ $alignment }) => $alignment || 'center'};
  }
`;

interface HistoryImageProps extends RellaxWrapperProps {
  alt: string;
  start: number;
  span: number;
  alignment?: string;
  imgSrc: string;
  className?: string;
}

function HistoryImage({
  alt, start, span, alignment = '', speed, percentage, imgSrc, className = '',
}: HistoryImageProps, ref: ForwardedRef<null>) {
  return (
    <article ref={ref} className={`${className} grid grid-cols-24 gap-x-1.5 min-h-screen`}>
      <ImageContainer $start={start} $span={span} $alignment={alignment} className="h-full">
        <RellaxWrapper speed={speed} percentage={percentage} className="h-full">
          <div className="relative h-full">
            <Image alt={alt} src={imgSrc} fill className="object-cover object-right" priority />
          </div>
        </RellaxWrapper>
      </ImageContainer>
    </article>
  );
}

export default forwardRef(HistoryImage);
