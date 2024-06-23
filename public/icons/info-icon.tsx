const InfoIcon = ({ color = '#525866', height = 16, width = 17 }: { width?: number; height?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path
      d="M8.14307 14C4.82927 14 2.14307 11.3138 2.14307 8C2.14307 4.6862 4.82927 2 8.14307 2C11.4569 2 14.1431 4.6862 14.1431 8C14.1431 11.3138 11.4569 14 8.14307 14ZM8.14307 12.8C9.41611 12.8 10.637 12.2943 11.5372 11.3941C12.4374 10.4939 12.9431 9.27304 12.9431 8C12.9431 6.72696 12.4374 5.50606 11.5372 4.60589C10.637 3.70571 9.41611 3.2 8.14307 3.2C6.87003 3.2 5.64913 3.70571 4.74895 4.60589C3.84878 5.50606 3.34307 6.72696 3.34307 8C3.34307 9.27304 3.84878 10.4939 4.74895 11.3941C5.64913 12.2943 6.87003 12.8 8.14307 12.8V12.8ZM7.54307 5H8.74307V6.2H7.54307V5ZM7.54307 7.4H8.74307V11H7.54307V7.4Z"
      fill={color}
    />
  </svg>
);

export default InfoIcon;
