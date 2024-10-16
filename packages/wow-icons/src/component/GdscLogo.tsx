import { forwardRef } from "react";

import type { IconProps } from "@/types/Icon.ts";

const GdscLogo = forwardRef<SVGSVGElement, IconProps>(
  (
    { className, width = "49", height = "24", viewBox = "0 0 49 24", ...rest },
    ref
  ) => {
    return (
      <svg
        aria-label="gdsc-logo icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g clipPath="url(#clip0_2093_1197)">
          <path
            d="M11.6948 12.0594L19.6432 7.40217C21.5086 6.3148 22.1575 3.89388 21.0828 1.98586C20.0082 0.0778397 17.6155 0.558167 15.7298 0.529199L1.98242 8.55108L11.6948 12.0594Z"
            fill="#EA4335"
          />
          <path
            d="M17.6764 23.9997C19.0349 23.9997 20.3529 23.2816 21.0625 22.0096C22.1372 20.1221 21.5086 17.7012 19.6229 16.5933L5.87549 8.57144C4.01006 7.48407 1.61744 8.12008 0.522517 10.0281C0.552134 11.9156 0.0764355 14.3365 1.96214 15.4444L15.7096 23.4663C16.3381 23.8151 17.0275 23.9997 17.6764 23.9997Z"
            fill="#4285F4"
          />
          <path
            d="M31.3633 23.9999C32.0324 23.9999 32.7015 23.8358 33.3098 23.4665L47.0572 15.4446L37.4867 11.8953L29.4167 16.614C27.5513 17.7014 26.9024 20.1223 27.9771 22.0303C28.6868 23.2818 30.0047 23.9999 31.3633 23.9999Z"
            fill="#FBBC04"
          />
          <path
            d="M45.0897 15.9572C46.4482 15.9572 47.7662 15.2392 48.4758 13.9877C49.5505 12.1002 48.9219 9.67923 47.0362 8.57135L33.3091 0.549463C31.4437 0.537903 29.051 0.0981031 27.9561 2.00612C26.8815 3.89362 27.51 6.31455 29.3957 7.42243L43.1431 15.4443C43.7514 15.7931 44.4206 15.9572 45.0897 15.9572Z"
            fill="#0F9D58"
          />
        </g>
        <defs>
          <clipPath id="clip0_2093_1197">
            <rect fill="white" height={height} width={width} />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

GdscLogo.displayName = "GdscLogo";
export default GdscLogo;