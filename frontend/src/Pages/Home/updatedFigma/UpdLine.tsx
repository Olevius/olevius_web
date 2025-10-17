import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";

export const UpdLine = forRef<HTMLHRElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <hr
      className={className}
      style={{
        width: className === "upd-team-box-disable-bottom-line" ? 0 : "87vw",
        padding: 0,
        marginBottom: 0,
        marginTop: 0,
        ...style,
      }}
      {...rest}
      ref={ref}
    />
  )
);
