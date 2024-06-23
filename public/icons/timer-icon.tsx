const TimerIcon = ({ height = 16, width = 16, color = '#164564' }: { width?: number; height?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
    <path
      d="M4.62918 4.38119C5.58542 3.61503 6.77466 3.19844 7.99998 3.20039C9.27498 3.20039 10.4468 3.64199 11.3708 4.38119L12.2426 3.50939L13.091 4.35779L12.2192 5.22959C12.8538 6.02408 13.2512 6.98161 13.3657 7.99198C13.4801 9.00236 13.307 10.0245 12.8661 10.9408C12.4253 11.8572 11.7347 12.6304 10.8739 13.1715C10.013 13.7127 9.01682 13.9998 7.99998 13.9998C6.98314 13.9998 5.98697 13.7127 5.12609 13.1715C4.26522 12.6304 3.57464 11.8572 3.13381 10.9408C2.69299 10.0245 2.51984 9.00236 2.6343 7.99198C2.74875 6.98161 3.14616 6.02408 3.78078 5.22959L2.90898 4.35839L3.75738 3.50999L4.62918 4.38179V4.38119ZM7.99998 12.8004C8.55153 12.8004 9.09768 12.6918 9.60725 12.4807C10.1168 12.2696 10.5798 11.9602 10.9698 11.5702C11.3598 11.1802 11.6692 10.7172 11.8803 10.2077C12.0913 9.69809 12.2 9.15194 12.2 8.60039C12.2 8.04884 12.0913 7.50269 11.8803 6.99312C11.6692 6.48355 11.3598 6.02055 10.9698 5.63054C10.5798 5.24054 10.1168 4.93117 9.60725 4.7201C9.09768 4.50903 8.55153 4.40039 7.99998 4.40039C6.88607 4.40039 5.81778 4.84289 5.03013 5.63054C4.24248 6.4182 3.79998 7.48648 3.79998 8.60039C3.79998 9.7143 4.24248 10.7826 5.03013 11.5702C5.81778 12.3579 6.88607 12.8004 7.99998 12.8004V12.8004ZM8.59998 8.00039H10.4L7.39998 11.9004V9.20039H5.59998L8.59998 5.29739V8.00039ZM5.59998 1.40039H10.4V2.60039H5.59998V1.40039Z"
      fill={color}
    />
  </svg>
);

export default TimerIcon;
