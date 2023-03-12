import React from "react";

interface PageHeaderProps {
  pageTitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle, ...props }) => {
  return (
    <header className="page-header">
      <h1 className="page-title">{pageTitle}</h1>
      <hr className="h-1 bg-white mt-4" />
    </header>
  );
};

export { PageHeader };
export type { PageHeaderProps };
