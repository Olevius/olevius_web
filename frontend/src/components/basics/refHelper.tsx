import React, { type PropsWithoutRef, type ForwardedRef } from "react";

// Utility to create forwardRef components
export const forRef = <T, P>(
    render: (
        props: PropsWithoutRef<P>,
        ref?: ForwardedRef<T>
    ) => React.ReactNode
) => React.forwardRef<T, P>(render);
