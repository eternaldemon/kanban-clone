import { ReactNode } from "react";
import "./Modal.css";
import { Task } from "../../interfaces/task";

interface ModalProps {
  isOpen: boolean;
  data: {
    title: string;
    content: ReactNode;
    customFooter?: ReactNode;
  };
  formId?: string;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  data,
  formId,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ''}`}>
      <div className={`content ${isOpen ? "show" : ''}`}>
        <div className="header">
          <h3>{data.title ?? 'Modal Header'}</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <hr />
        <div>{data.content}</div>
        <hr />
        {!data?.customFooter && <div className="footer">
            <button type="submit" form={formId}>Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
            </div>}
        {data?.customFooter && <div>{data?.customFooter}</div>}
      </div>
    </div>
  );
};
