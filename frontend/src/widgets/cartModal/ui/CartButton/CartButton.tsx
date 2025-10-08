interface ICartButtonProps {
  onClose: () => void;
}
  
export const CartButton = ({ onClose }: ICartButtonProps) => {
  return (
    <button type="button" onClick={onClose}></button>
  );
}