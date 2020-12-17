import * as React from 'react'

export interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout(props: AppLayoutProps) {
  return <>{props.children}</>
}
