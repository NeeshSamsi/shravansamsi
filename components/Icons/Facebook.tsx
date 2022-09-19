export default function Facebook({ size }: { size: number }) {
  return (
    <svg
      width={`${size}rem`}
      height={`${size}rem`}
      viewBox={`0 0 ${size * 16} ${size * 16}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56 32.146C56 18.892 45.254 8.146 32 8.146C18.746 8.146 8 18.892 8 32.146C8 44.126 16.776 54.054 28.25 55.854V39.084H22.156V32.144H28.25V26.86C28.25 20.846 31.834 17.522 37.316 17.522C39.94 17.522 42.688 17.992 42.688 17.992V23.898H39.66C36.678 23.898 35.748 25.748 35.748 27.646V32.146H42.404L41.34 39.086H35.748V55.856C47.224 54.054 56 44.124 56 32.146Z"
        fill="currentColor"
      />
    </svg>
  );
}
