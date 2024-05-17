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
export interface IsOpen {
  [key: string]: boolean;
}
export interface OpenModalProps {
  id: string;
  component?: () => JSX.Element;
  onAfterOpen?: () => void;
}
export interface CloseModalProps {
  id: string;
  onAfterClose?: () => void;
}
export interface changeModalProps extends OpenModalProps {
  closeId: string;
}
