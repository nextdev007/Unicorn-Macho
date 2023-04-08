"use client";

import { Session } from "next-auth";
import { SessionProvider as Providers } from "next-auth/react";
// import { Children } from "react";

export function SessionProvider({ children, session }) {
  return <Providers>{children}</Providers>;
}
