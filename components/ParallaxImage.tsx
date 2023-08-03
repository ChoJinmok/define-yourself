import Image from 'next/image';

import styled from 'styled-components';

import RellaxWrapper from 'react-rellax-wrapper';

import type { RellaxWrapperProps } from 'react-rellax-wrapper/lib/rellaxWrapper';

const GridContainer = styled.div<{ ratio: string, start: number, span: number, position?: string }>`
  aspect-ratio: ${({ ratio }) => ratio};
  grid-column: ${({ start, span }) => `${start} / ${start + span}`};
  transform: ${({ position }) => `translateY(${position})`};

  &:hover span {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const ImmersivePoint = styled.div`
  transition-property: width, height, opacity;
`;

const Description = styled.span`
  opacity: 0;
  transform: translate3d(0, 20%, 0);
  transition-property: transform, opacity;
`;

interface ParallaxImageProps extends RellaxWrapperProps {
  className?: string;
  src: string;
  alt: string;
  ratio: string;
  start: number;
  span: number;
  description?: string;
  position?: string;
}

export default function ParallaxImage({
  className, src, alt, ratio, start, span, description, position, speed, percentage,
}: ParallaxImageProps) {
  return (
    <div className={`${className} grid grid-cols-24 gap-x-1.5 z-0`}>
      <GridContainer ratio={ratio} start={start} span={span} position={position} className="group z-20">
        <div className="overflow-hidden h-full">
          <RellaxWrapper speed={speed} percentage={percentage} className="h-full">
            <div className="relative h-full">
              <Image alt={alt} src={src} fill className="object-cover" priority />
            </div>
          </RellaxWrapper>
        </div>

        {description && (
          <div className="flex items-center pl-5 relative mt-2.5">
            <div className="top-1/2 left-2.5 -translate-x-1/2 -translate-y-1/2 w-3 h-3 absolute flex items-center justify-center">
              <ImmersivePoint className="w-0.5 h-0.5 border-[#968a6b] border rounded-full group-hover:w-3 group-hover:h-3 ease-in-out duration-300 opacity-0 group-hover:opacity-100" />
              <div className="w-0.5 h-0.5 bg-black absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <Description className="ease-in-out duration-300 text-xs pl-2.5">{description}</Description>
          </div>
        ) }
      </GridContainer>
    </div>
  );
}

ParallaxImage.defaultProps = {
  className: '',
  description: '',
  position: '',
};
