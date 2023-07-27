import React from 'react'
import { createBoard } from '@wixc3/react-board';
import Start from '../../components/Start';

export default createBoard({
    name: 'Sample',
    Board: () => <div>
        <div className="nav" />
        <Start /></div>,
    environmentProps: {
        canvasWidth: 1806,
        canvasHeight: 787,
        windowWidth: 1608,
        windowHeight: 1080
    }
});
