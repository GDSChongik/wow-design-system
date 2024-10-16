import { forwardRef } from "react";

import type { IconProps } from "@/types/Icon.ts";

const YellowAvatar = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      width = "100",
      height = "100",
      viewBox = "0 0 100 100",
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        aria-label="yellow-avatar icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <rect
          fill="url(#paint0_linear_2077_1372)"
          height={height}
          rx="50"
          width={width}
        />
        <circle cx="50" cy="38" fill="#D6EEDD" r="16.25" />
        <path
          clipRule="evenodd"
          d="M65.2149 32.2234L33.9218 40.6083C33.7883 39.7689 33.719 38.9081 33.719 38.0311C33.719 29.0393 41.0083 21.75 50.0001 21.75C56.946 21.75 62.8759 26.0995 65.2149 32.2234Z"
          fill="#956700"
          fillRule="evenodd"
        />
        <rect
          fill="#956700"
          height="2.61568"
          transform="rotate(15 37.0862 37.0522)"
          width="37.5889"
          x="37.0862"
          y="37.0522"
        />
        <path
          d="M80.75 85.3481C80.75 93.7773 66.9828 100 50 100C33.0172 100 19.25 93.7773 19.25 85.3481C19.25 76.9189 19.25 58.75 50 58.75C80.75 58.75 80.75 76.9189 80.75 85.3481Z"
          fill="url(#paint1_linear_2077_1372)"
        />
        <path
          d="M87.4841 41.9364L86.6965 48.3307L92.8889 46.8728L87.8833 50.8833L93.2253 54.2844L86.9338 53.5616L88.2961 59.8293L84.4043 54.7968L80.9889 60.2596L81.7765 53.8653L75.584 55.3231L80.5897 51.3127L75.2477 47.9116L81.5392 48.6344L80.1769 42.3666L84.0686 47.3992L87.4841 41.9364Z"
          fill="#2A8642"
        />
        <path
          d="M21.713 33.9844C22.5605 34.1642 23.196 34.8693 23.2869 35.731L23.7765 40.3725C23.8674 41.2342 23.3931 42.0564 22.6017 42.4091L18.3387 44.3091C17.5473 44.6619 16.6188 44.4649 16.0387 43.8212L12.9144 40.3539C12.3344 39.7103 12.2348 38.7663 12.6677 38.0158L14.9998 33.9729C15.4327 33.2223 16.2997 32.8359 17.1473 33.0158L21.713 33.9844Z"
          fill="#1F6532"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2077_1372"
            x1="50"
            x2="50"
            y1="0"
            y2="100"
          >
            <stop stopColor="#FBBC04" />
            <stop offset="1" stopColor="#F9AB00" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2077_1372"
            x1="50"
            x2="50"
            y1="58.75"
            y2="100"
          >
            <stop stopColor="#FDE6B2" />
            <stop offset="1" stopColor="#FDDD99" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

YellowAvatar.displayName = "YellowAvatar";
export default YellowAvatar;