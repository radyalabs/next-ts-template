import type { ElementType, ReactNode } from 'react';

export interface TypographyProps {
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * Transform rendered html tag from its original predefined tag based on it's selected presets
   */
  as?: ElementType;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  type?: 'primary' | 'secondary';
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap?: boolean;
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  size?: 'small' | 'medium' | 'large';
  variant?: 'display'
  | 'headline'
  | 'title'
  | 'label'
  | 'body'
}
