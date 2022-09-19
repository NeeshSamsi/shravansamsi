export default function YouTube({ size }: { size: number }) {
  return (
    <svg
      width={`${size}rem`}
      height={`${size}rem`}
      viewBox={`0 0 ${size * 16} ${size * 16}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.8287 18.2472C58.5123 17.0391 57.8884 15.9365 57.0194 15.0497C56.1504 14.163 55.0669 13.5232 53.8773 13.1946C49.5117 12 32 12 32 12C32 12 14.4883 12 10.1203 13.1946C8.93129 13.5238 7.84835 14.1638 6.97985 15.0505C6.11134 15.9372 5.48771 17.0395 5.17133 18.2472C4 22.7037 4 32 4 32C4 32 4 41.2963 5.17133 45.7528C5.4877 46.9609 6.11161 48.0635 6.98058 48.9503C7.84955 49.837 8.93308 50.4768 10.1227 50.8054C14.4883 52 32 52 32 52C32 52 49.5117 52 53.8797 50.8054C55.0694 50.477 56.153 49.8373 57.022 48.9506C57.891 48.0638 58.5148 46.961 58.831 45.7528C60 41.2963 60 32 60 32C60 32 60 22.7037 58.8287 18.2472ZM26.2717 40.44V23.56L40.9087 32L26.2717 40.44Z"
        fill="currentColor"
      />
    </svg>
  );
}
