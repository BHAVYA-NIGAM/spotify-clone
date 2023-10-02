'use client';

import Box from '@/components/Box';
import { SyncLoader } from 'react-spinners';

const loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <SyncLoader color="#22c55e" size={10} />
    </Box>
  );
};

export default loading;
