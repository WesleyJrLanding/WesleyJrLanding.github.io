import React from 'react';
import Modal from '@mui/material/Modal';

import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

type ModalOptions = {
  videoUrl: string,
  title: string,
  isOpen: boolean,
  onClose: () => void
}

const DemoModal: React.FC<ModalOptions> = ({ videoUrl, title, isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose} >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw', 
          height: '90vh',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          pt: 2,
          px: 4,
          pb: 3,
          overflow: 'hidden'
        }}
      >
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <iframe
          style={{ width: '100%', height: '90%' }} 
          src={videoUrl}
          title={title}
        />
      </Box>
    </Modal>
  );
}

export { DemoModal }
