import { PortalHost } from "@rn-primitives/portal";
import { PropsWithChildren } from "react";


export function AppProviders({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <PortalHost />
    </>
  )
}