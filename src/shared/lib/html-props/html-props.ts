import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react'

type HtmlProps<
  Attributes extends HTMLAttributes<Element>,
  Element extends HTMLElement,
  Props extends {},
> = DetailedHTMLProps<Attributes, Element> & Props

export type ButtonProps<Props extends {}> = HtmlProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement,
  Props
>

export type DivProps<Props extends {}> = HtmlProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement,
  Props
>
