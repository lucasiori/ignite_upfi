import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent maxW="900px" maxH="600px" bgColor="pGray.50">
        <ModalBody p={0}>
          <Image src={imgUrl} maxW="900px" maxH="600px" mx="auto" />
        </ModalBody>

        <ModalFooter
          display="flex"
          justifyContent="flex-start"
          bgColor="pGray.800"
          py={2}
          px="10px"
          borderBottomLeftRadius="6px"
          borderBottomRightRadius="6px"
        >
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
