export interface ModalProps {
  id: string;
  isOpen: boolean;
  createdAt: number;

  // contents
  component?: () => JSX.Element;

  // functions
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}
export type Modals = Map<string, ModalProps>;
