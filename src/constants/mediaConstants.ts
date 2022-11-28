export const containerWidth = ['100%', '100%', '768px', '1000px'];
export const breakpoints = [480, 768, 1280];

export const mq = {
  mediumMobile: `@media screen and (min-width: ${
    breakpoints[0]
  }px) and  (max-width: ${breakpoints[1] - 0.02}px)`,
  smallOnly: `@media screen and (max-width: ${breakpoints[1] - 0.02}px)`,
  medium: `@media screen and (min-width: ${breakpoints[1]}px)`,
  mediumOnly: `@media screen and (min-width: ${
    breakpoints[1]
  }px) and (max-width: ${breakpoints[2] - 0.02}px)`,
  large: `@media screen and (min-width: ${breakpoints[2]}px)`,
};
