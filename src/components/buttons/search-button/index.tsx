import { Button } from '@/components/layout/button';
import { SearchIcon } from 'lucide-react';
import { BtnLoading } from '../loading';

interface SearchButtonProps {
  title?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

export function SearchButton({
  title,
  onClick,
  isLoading = false,
}: SearchButtonProps) {
  return (
    <Button size="sm" onClick={onClick}>
      {isLoading ? (
        <BtnLoading />
      ) : (
        <>
          <SearchIcon size={20} />
          {title && <span className="ml-2">{title}</span>}
        </>
      )}
    </Button>
  );
}
