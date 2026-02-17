import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="mb-8 border-b border-gray-200 pb-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {children && <div>{children}</div>}
    </div>
  );
}
