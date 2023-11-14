import { Children } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  Vibration,
  TouchableOpacity,
  Button,
} from "react-native";
import { Description, ModalContainer, Title } from "./style";

interface ModalProps {
  open: boolean;
  setOpen: any;
  children?: any;
  showTitle?: boolean
  showCloseButton?: boolean
  CloseButtonLabel?: string
  title?: string
}

const ModalCenter = ({ open, setOpen, children, showTitle, showCloseButton, title, CloseButtonLabel }: ModalProps) => {
  return (
    <Modal transparent visible={open} onRequestClose={() => setOpen(false)}>
      <ModalContainer>
       
        {showTitle ? <Title>{title}</Title> : null}
        {children}
        
        {showCloseButton ? <Pressable onPress={() => setOpen(false)}>
          <Text>{CloseButtonLabel}</Text>
        </Pressable> : null}
      </ModalContainer>
    </Modal>
  );
};

export { ModalCenter };
