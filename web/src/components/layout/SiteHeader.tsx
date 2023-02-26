import React from "react";

interface SiteHeaderProps {
  title: string;
  tagTitle?: keyof HTMLElementTagNameMap;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({
  title,
  tagTitle: Component = "h2",
  ...props
}) => {
  return (
    <>
      <header id="site-header">
        <div className="container">
          <Component id="site-title" className="text-white">
            {title}
          </Component>
        </div>
      </header>
    </>
  );
};

export { SiteHeader };
