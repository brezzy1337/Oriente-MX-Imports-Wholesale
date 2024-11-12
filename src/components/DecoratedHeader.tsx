interface DecoratedHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const DecoratedHeader = ({ children, className = "" }: DecoratedHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="hidden md:block">
        <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12H35M65 12H100" stroke="#D32F2F" strokeWidth="2"/>
          <path d="M35 12C35 12 40 4 50 4C60 4 65 12 65 12C65 12 60 20 50 20C40 20 35 12 35 12Z" stroke="#D32F2F" strokeWidth="2"/>
          <circle cx="50" cy="12" r="4" fill="#D32F2F"/>
        </svg>
      </div>
      <h2 className={`text-3xl font-bold text-center ${className}`}>
        {children}
      </h2>
      <div className="hidden md:block">
        <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12H35M65 12H100" stroke="#D32F2F" strokeWidth="2"/>
          <path d="M35 12C35 12 40 4 50 4C60 4 65 12 65 12C65 12 60 20 50 20C40 20 35 12 35 12Z" stroke="#D32F2F" strokeWidth="2"/>
          <circle cx="50" cy="12" r="4" fill="#D32F2F"/>
        </svg>
      </div>
    </div>
  );
};

export default DecoratedHeader;
