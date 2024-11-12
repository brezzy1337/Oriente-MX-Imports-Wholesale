interface DecoratedHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const DecoratedHeader = ({ children, className = "" }: DecoratedHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="hidden md:block">
        <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20H40" stroke="#D32F2F" strokeWidth="2"/>
          <path d="M40 20C40 20 45 5 55 5C65 5 70 20 70 20C70 20 75 35 85 35C95 35 100 20 100 20H160" 
                stroke="#D32F2F" strokeWidth="2"/>
          <path d="M55 5C55 5 60 10 65 5C70 0 75 5 75 5C75 5 70 15 65 15C60 15 55 5 55 5Z" 
                fill="none" stroke="#D32F2F" strokeWidth="2"/>
          <path d="M85 35C85 35 90 30 95 35C100 40 105 35 105 35C105 35 100 25 95 25C90 25 85 35 85 35Z" 
                fill="none" stroke="#D32F2F" strokeWidth="2"/>
        </svg>
      </div>
      <h2 className={`text-3xl font-bold text-center ${className}`}>
        {children}
      </h2>
      <div className="hidden md:block">
        <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 20H120" stroke="#D32F2F" strokeWidth="2"/>
          <path d="M120 20C120 20 115 35 105 35C95 35 90 20 90 20C90 20 85 5 75 5C65 5 60 20 60 20H0" 
                stroke="#D32F2F" strokeWidth="2"/>
          <path d="M105 35C105 35 100 30 95 35C90 40 85 35 85 35C85 35 90 25 95 25C100 25 105 35 105 35Z" 
                fill="none" stroke="#D32F2F" strokeWidth="2"/>
          <path d="M75 5C75 5 70 10 65 5C60 0 55 5 55 5C55 5 60 15 65 15C70 15 75 5 75 5Z" 
                fill="none" stroke="#D32F2F" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default DecoratedHeader;
