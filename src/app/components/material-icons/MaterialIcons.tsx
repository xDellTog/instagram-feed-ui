import React from "react";
import { CSS, styled } from "@stitches/react";
import './MaterialIcons.scss';
import { StyledComponent } from "@stitches/react/types/styled-component";

export const MaterialIconsInternal = styled('i', {
    fontFamily: 'Material Icons, monospace',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 24,
    width: 24,
    height: 24,
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    lineHeight: 1,
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr',
    textRendering: 'optimizeLegibility',
    fontFeatureSettings: 'liga',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    variants: {
        color: {
            'dark': {
                color: '$gray12',
            },
            'white': {
                color: '$white',
            },
            'black': {
                color: '$black',
            },
            'primary': {
                color: '$primary',
            },
            'secondary': {
                color: '$secondary',
            },
            'success': {
                color: '$success',
            },
            'danger': {
                color: '$danger',
            },
            'warning': {
                color: '$warning',
            },
            'info': {
                color: '$info',
            },
        },
        size: {
            'sm': {
                fontSize: 24,
                width: 24,
                height: 24,
            },
            'md': {
                fontSize: 28,
                width: 28,
                height: 28,
            },
            'lg': {
                fontSize: 32,
                width: 32,
                height: 32,
            },
        },
    },
    defaultVariants: {
        color: 'dark',
        size: 'md',
    }
});

export type MaterialIconsProps = {
    css?: CSS,
    icon: string,
    color?: 'dark' | 'white' | 'black' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info',
    size?: 'sm' | 'md' | 'lg',
}

export function MaterialIcons({ icon, color, size, css }: MaterialIconsProps) {
    return (
        <MaterialIconsInternal css={css} color={color} size={size}>{icon}</MaterialIconsInternal>
    )
}