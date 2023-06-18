import { Button as BaseButon } from '@/components/layout/button';
import { BtnLoading } from '../loading';
import { type CSSProperties } from 'react';

interface SearchButtonProps {
  title: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  style?: CSSProperties;
  isOutline?: boolean;
}

export function Button({
  title,
  onClick,
  className,
  type = 'button',
  style,
  isLoading = false,
  isOutline = false,
}: SearchButtonProps) {
  return (
    <BaseButon
      style={style}
      className={`${className} flex justify-center`}
      type={type}
      size="sm"
      onClick={onClick}
      variant={isOutline ? 'outline' : 'default'}
    >
      {isLoading ? (
        <BtnLoading />
      ) : (
        <>{<span className="ml-2">{title}</span>}</>
      )}
    </BaseButon>
  );
}
