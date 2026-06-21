// Type declarations for components/common/UI.jsx — kept as plain JS
// at runtime (other .jsx files depend on it), typed here so .tsx
// consumers get accurate prop checking instead of TS inferring
// an overly-strict shape from a single call site.
import type { ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react'

export function Button(props: {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger' | 'subtle'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  type?: 'button' | 'submit' | 'reset'
  style?: CSSProperties
  className?: string
}): JSX.Element

export function Input(props: {
  label?: string
  name?: string
  type?: string
  value?: string | number
  onChange?: (e: any) => void
  placeholder?: string
  error?: string
  required?: boolean
  hint?: string
  min?: number | string
  max?: number | string
  step?: number | string
}): JSX.Element

export function Select(props: {
  label?: string
  name?: string
  value?: string
  onChange?: (e: any) => void
  options?: { value: string; label: string }[]
  error?: string
  required?: boolean
  hint?: string
}): JSX.Element

export function Card(props: {
  children?: ReactNode
  style?: CSSProperties
  className?: string
}): JSX.Element

export function Spinner(props: {
  size?: number
  color?: string
}): JSX.Element

export function Badge(props: {
  label?: string
}): JSX.Element

export function Alert(props: {
  type?: 'error' | 'success' | 'warning' | 'info'
  message?: string
}): JSX.Element

export function Divider(props: {
  label?: string
}): JSX.Element
