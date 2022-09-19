export default function Chat({ size }: { size: number }) {
  return (
    <svg
      width={`${size}rem`}
      height={`${size}rem`}
      viewBox={`0 0 ${size * 16} ${size * 16}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.12247 20.4056C3.12532 13.049 8.53746 5 16.4812 5H16.9098C22.8506 5 27.6666 9.81601 27.6666 15.7569C27.6666 22.3713 22.3046 27.7333 15.6902 27.7333H5.26312C4.83877 27.7333 4.46064 27.4655 4.3198 27.0652C4.17896 26.6649 4.3061 26.2193 4.63695 25.9536L7.26561 23.8426C7.38055 23.7503 7.42121 23.5935 7.36559 23.4569L6.12247 20.4056ZM16.4812 7C9.95783 7 5.5134 13.6098 7.97465 19.6511L9.21777 22.7023C9.6071 23.658 9.3225 24.7558 8.51793 25.402L8.10534 25.7333H15.6902C21.2 25.7333 25.6666 21.2667 25.6666 15.7569C25.6666 10.9206 21.7461 7 16.9098 7H16.4812Z"
        fill="currentColor"
      />
    </svg>
  );
}
