import { CSSProperties, FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

export const FlexCenter: FC<Props> = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
