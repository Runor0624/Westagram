// react-slick 설정파일임
import React, { useMemo } from 'react'
import styled from 'styled-components'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface sliderProps {
  children: React.ReactNode
  className?: string
  autoplay?: boolean | number
  speed?: number
  loop?: boolean
}

function Slicks({
  children,
  className,
  autoplay = true,
  speed = 400,
  loop = true,
}: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    }),
    [autoplay, loop, speed]
  )
  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  )
}

const SlideWrapper = styled.div`
  max-width: 600px;
  background-color: #dbdbdb;
  border-radius: 5px;
`

export default Slicks
