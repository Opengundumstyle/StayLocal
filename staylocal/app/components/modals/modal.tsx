interface ModalProps{
     isOpen?:boolean;
     onClose:()=>void;
     onSubmit:()=>void;
     title?:string;
     body?:React.ReactElement;
     footer?:React.ReactElement;
     actionLabel:string;
     disabled?:boolean;
     secondaryAction?:()=>void;
     secondaryLbel?:string;
}

const modal = () => {
  return (
    <div>
      
    </div>
  )
}

export default modal
