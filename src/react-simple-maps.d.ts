declare module 'react-simple-maps' {
  import { ReactNode } from 'react';

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: {
      geographies: Array<{
        rsmKey: string;
        properties?: Record<string, unknown>;
        svgPath?: string;
      }>;
      borders?: unknown;
      outline?: unknown;
    }) => ReactNode;
  }

  export interface GeographyProps {
    geography: {
      rsmKey: string;
      properties?: Record<string, unknown>;
      svgPath?: string;
    };
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    onMouseEnter?: (evt: React.MouseEvent) => void;
    onMouseLeave?: (evt: React.MouseEvent) => void;
    onMouseMove?: (evt: React.MouseEvent) => void;
    children?: ReactNode;
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element;
  export function Geographies(props: GeographiesProps): JSX.Element;
  export function Geography(props: GeographyProps): JSX.Element;
  export function Sphere(props: Record<string, unknown>): JSX.Element;
  export function Graticule(props: Record<string, unknown>): JSX.Element;
}
