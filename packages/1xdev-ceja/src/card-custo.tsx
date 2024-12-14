interface CardProps  { 
    children: React.ReactNode;
    className?: string;
  }
  
  export const CardCustom = ({children, className}: CardProps) => { 
    return (
    <div className = {className}> 
      {children}
    </div>
   )
  }