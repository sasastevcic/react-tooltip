import {
	FloatingPortal,
	Placement,
	offset,
	arrow,
	flip,
	autoUpdate,
	useFloating,
	useInteractions,
	useHover,
	useFocus,
	useRole,
	useDismiss,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, Variants } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import {
	ARROW_SIZE,
	TooltipProps,
	TooltipType,
	ArrowCSSProperties,
	mapColors,
	BORDER_RADIUS,
	ARROW_FALLBACK_OFFSET,
} from './Tooltip.data';
import {
	StyledTooltipContainer,
	StyledTooltip,
	StyledTooltipContent,
	StyledArrow,
} from './Tooltip.styles';

const variants: Variants = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

export const Tooltip = ({
	children,
	text,
	type = TooltipType.Default,
	placement = 'top',
	offset: _offset = ARROW_SIZE / 2 + 5,
	...props
}: TooltipProps) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const arrowRef = useRef(null);
	const {
		x,
		y,
		strategy,
		context,
		reference,
		floating,
		refs,
		placement: placementState,
		middlewareData: { arrow: middlewareArrow },
	} = useFloating({
		placement,
		open: showTooltip,
		onOpenChange: setShowTooltip,
		whileElementsMounted: autoUpdate,
		middleware: [
			arrow({
				element: arrowRef,
				padding: BORDER_RADIUS || ARROW_FALLBACK_OFFSET,
			}),
			offset(_offset),
			flip({ padding: 10 }),
		],
	});

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useHover(context),
		useFocus(context),
		useRole(context, { role: 'tooltip' }),
		useDismiss(context),
	]);

	const { x: arrowX, y: arrowY } = middlewareArrow ?? {};

	const arrowAxis: Record<Placement, ArrowCSSProperties> = useMemo(() => {
		const arrowOffset = -ARROW_SIZE / 2;
		const xOffset = arrowX || 0;
		const yOffset = arrowY || 0;

		const topStyles: ArrowCSSProperties = {
			bottom: arrowOffset,
			left: xOffset,
			transform: `translateY(${ARROW_SIZE / 2}px)`,
		};

		const rightStyles: ArrowCSSProperties = {
			top: yOffset,
			left: arrowOffset,
			transform: `rotate(90deg) translateY(${ARROW_SIZE / 2}px)`,
		};

		const bottomStyles: ArrowCSSProperties = {
			top: arrowOffset,
			left: xOffset,
			transform: `rotate(180deg) translateY(${ARROW_SIZE / 2}px)`,
		};

		const leftStyles: ArrowCSSProperties = {
			top: yOffset,
			right: arrowOffset,
			transform: `rotate(-90deg) translateY(${ARROW_SIZE / 2}px)`,
		};

		return {
			top: topStyles,
			'top-start': topStyles,
			'top-end': topStyles,
			right: rightStyles,
			'right-start': rightStyles,
			'right-end': rightStyles,
			bottom: bottomStyles,
			'bottom-start': bottomStyles,
			'bottom-end': bottomStyles,
			left: leftStyles,
			'left-start': leftStyles,
			'left-end': leftStyles,
		};
	}, [arrowX, arrowY]);

	return (
		<StyledTooltipContainer {...getReferenceProps({ ref: reference })}>
			{children}
			<AnimatePresence>
				{showTooltip && (
					<FloatingPortal id="tooltip">
						<StyledTooltip
							{...getFloatingProps({
								ref: floating,
								style: {
									position: strategy,
									top: y ?? 0,
									left: x ?? 0,
								},
							})}
						>
							<StyledTooltipContent
								$backgroundColor={mapColors[type]}
								initial="hidden"
								animate="visible"
								exit="hidden"
								variants={variants}
								{...props}
							>
								{text}
								<StyledArrow
									$backgroundColor={mapColors[type]}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									ref={arrowRef}
									style={arrowAxis[placementState]}
								>
									<path
										fill="currentColor"
										d="M24 0 12 11.96 0 0z"
										strokeLinecap="round"
									/>
								</StyledArrow>
							</StyledTooltipContent>
						</StyledTooltip>
					</FloatingPortal>
				)}
			</AnimatePresence>
		</StyledTooltipContainer>
	);
};
