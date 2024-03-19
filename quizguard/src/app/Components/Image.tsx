import React, { FC } from "react";
import { Box } from "@mui/system";

interface Props {
    src: string;
    alt: string;
}

export const BaseImage: FC<Props> = ({ src, alt }) => {
  return (
    <Box
      component="img"
      sx={{
        height: 233,
        width: 350,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
      alt={alt}
      src={src}
    />
  );
};

