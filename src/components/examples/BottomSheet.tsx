import React from 'react';

import BottomSheet from '@/components/common/BottomSheet';
import useModal from '@/hooks/useModal';

const BOTTOM_SHEET_ID = 'first-modal';

const App = () => {
  const { openModal } = useModal();

  const openBottomSheet = () => {
    openModal({
      id: BOTTOM_SHEET_ID,
      component: () => (
        <BottomSheet id={BOTTOM_SHEET_ID}>
          <p>BottomSheet</p>
        </BottomSheet>
      ),
    });
  };

  return (
    <div>
      <button onClick={openBottomSheet}>openBottomSheet</button>
    </div>
  );
};

export default App;
