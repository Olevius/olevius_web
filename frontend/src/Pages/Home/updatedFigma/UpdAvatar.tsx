import { Layout } from "../../../components/basics/defaults";
import type { ImageProps } from "../../../components/basics/ImagePropTypes";
import { forRef } from "../../../components/basics/refHelper";

export const UpdAvatar = forRef<HTMLDivElement, Omit<ImageProps, "children">>(
  ({ style, className, src, ...rest }, ref) => {
    return (
      <Layout
        className={className}
        style={{
          position: "absolute",
          backgroundImage: `url(${src})`,
          borderRadius: 1000,
          backgroundRepeat: "no-repeat",
          ...style,
        }}
        ref={ref}
        {...rest}
      />
    );
  }
);
