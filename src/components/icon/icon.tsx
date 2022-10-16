import * as React from 'react';
import clsx from 'clsx';

export interface IconProps {
  /**
   * Node passed into the SVG element.
   */
  children?: JSX.Element;
  /**
   * Applies a class attribute to the i element.
   */
  className?: string;
  /**
   * Applies a color attribute to the SVG element.
   */
  color?: string;
  /**
   * Applies a focusable attribute to the SVG element.
   */
  focusable?: boolean;
  /**
   * Applies a height attribute to the SVG element.
   */
  height?: string;
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  size?: string;
  /**
   * Applies a11y attributes to SVG element.
   */
  titleAccess?: string;
  /**
   * Applies a viewbox attribute to the SVG element.
   */
  viewBox?: string;
  /**
   * Applies a width attribute to the SVG element.
   */
  width?: string;
  /**
   * Applies a onClick event
   */
  onClick?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
}

const Icon = React.forwardRef(function Icon(
  props: IconProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    children,
    className,
    color = 'inherit',
    focusable = false,
    height,
    size = '100%',
    titleAccess,
    viewBox = '0 0 16 16',
    width,
    onClick,
    ...restProps
  } = props;

  const iClassName = clsx('inline-block', className);
  const _color = color ? color : 'inherit';

  return (
    <div className={iClassName} ref={ref} onClick={onClick} {...restProps}>
      <svg
        focusable={focusable}
        width={width || size}
        height={height || size}
        viewBox={viewBox}
        fill={_color}
        aria-hidden={titleAccess ? 'false' : 'true'}
        role={titleAccess ? 'img' : 'presentation'}
      >
        {titleAccess ? <title>{titleAccess}</title> : null}
        {children}
      </svg>
    </div>
  );
});

export default Icon;
