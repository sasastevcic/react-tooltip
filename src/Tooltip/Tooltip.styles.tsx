import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  ARROW_FALLBACK_OFFSET,
  ARROW_SIZE,
  BORDER_RADIUS,
  ColorProps,
} from './Tooltip.data';

export const StyledTooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledTooltip = styled(motion.div)`
  text-align: center;
  z-index: 1;
  min-width: 8rem;
  max-width: 20rem;
  pointer-events: none;
`;

export const StyledTooltipContent = styled(motion.div)<ColorProps>`
  color: white;
  padding: 0.8rem 1rem;
  border-radius: ${BORDER_RADIUS}px;
  min-height: ${ARROW_SIZE + (BORDER_RADIUS || ARROW_FALLBACK_OFFSET) * 2}px;
  display: flex;
  align-items: center;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const StyledArrow = styled.svg<ColorProps>`
  position: absolute;
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;

  color: ${({ $backgroundColor }) => $backgroundColor}; ;
`;
