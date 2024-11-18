interface DecoratedHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const DecoratedHeader = ({ children, className = "" }: DecoratedHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-2 my-8">
      <h2 className={`text-3xl font-bold text-center ${className}`}>
        {children}
      </h2>
      <div className="w-24 h-0.5 bg-red-600"></div>
    </div>
  );
};

export default DecoratedHeader;
