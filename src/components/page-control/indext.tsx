'use client';

import { PlusSquare } from 'lucide-react';
import { Button } from '../layout/button';

interface PageControlProps {
  title: string;
  createButtonAction?: () => void;
}

export function PageControl({ title, createButtonAction }: PageControlProps) {
  return (
    <div className="container flex flex-col gap-4 mx-auto mt-4 text-lg">
      <h1 className="text-title">{title}</h1>

      {createButtonAction && (
        <div>
          <Button className="flex gap-2" onClick={createButtonAction}>
            <PlusSquare /> Criar
          </Button>
        </div>
      )}
    </div>
  );
}
