import { Placement } from '@floating-ui/react-dom';
import { CSSProperties, ReactNode } from 'react';

export enum TooltipType {
	Default = 'default',
	Success = 'success',
	Error = 'error',
}

export interface TooltipProps {
	text: string;
	children: ReactNode;
	placement?: Placement;
	type?: TooltipType;
	offset?: number;
}

export type ArrowCSSProperties = Pick<
	CSSProperties,
	'top' | 'bottom' | 'left' | 'right' | 'transform'
>;

export type ColorProps = {
	$backgroundColor: string;
};

export const mapColors: Record<TooltipType, string> = {
	[TooltipType.Default]: '#626262',
	[TooltipType.Success]: '#3c9136',
	[TooltipType.Error]: '#c60028',
};

export const ARROW_SIZE = 16;
export const ARROW_FALLBACK_OFFSET = 5;
export const BORDER_RADIUS = 5;
