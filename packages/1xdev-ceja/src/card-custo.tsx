import './card-custom.css';

interface CardProps  { 
    children: React.ReactNode;
    className?: string;
  }
  
  export const CardCustom = ({children, className}: CardProps) => { 
    return (
    <div className = {`card-custom ${className || ''}`}> 
      {children}
    </div>
   )
  }