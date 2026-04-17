interface IconProps {
  name: string;
  size?: number;
  filled?: boolean;
  className?: string;
  weight?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export function Icon({ name, size = 20, filled = false, className = '', weight = 300, onClick }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none leading-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {name}
    </span>
  );
}

export default Icon;
