import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { TooltipType } from './Tooltip/Tooltip.data';

interface StyledButtonProps {
  $buttonTheme?: TooltipType;
}

const successStyles = css`
  background-color: green;
  color: white;
`;

const defaultStyles = css`
  background-color: black;
  color: white;
`;

const errorStyles = css`
  background-color: red;
  color: white;
`;

const themes: Record<
  TooltipType,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [TooltipType.Default]: defaultStyles,
  [TooltipType.Success]: successStyles,
  [TooltipType.Error]: errorStyles,
};

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: 2rem;
  padding: 0.2rem 2.5rem;
  min-height: 4rem;
  border-radius: 4.6rem;
  margin: 0 0.5rem;
  ${({ $buttonTheme }) => $buttonTheme && themes[$buttonTheme]};
`;
