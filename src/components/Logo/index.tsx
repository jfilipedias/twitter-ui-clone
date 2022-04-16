import React from "react";

const Logo: React.FC = (props) => {
  return (
    <svg width="36" height="48" viewBox="0 0 36 48" {...props}>
      <g transform="matrix(0.64187493,0,0,0.64187493,-516.09354,85.309838)">
        <path
          d="m 852.16946,-125.11758 -0.031,12.24414 -40.1406,14.319972 v -12.238282 z"
          fill="#fff"
        />
        <path
          d="m 848.89406,-107.63086 -36.8965,13.158204 v 12.238281 l 36.8965,-13.162109 z"
          fill="#fff"
        />
        <path
          d="m 824.77296,-82.710938 -12.7754,4.556641 v 12.238281 l 12.7754,-4.558593 z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default Logo;
