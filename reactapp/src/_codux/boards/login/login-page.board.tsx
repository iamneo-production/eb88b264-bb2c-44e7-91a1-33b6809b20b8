import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LoginPage from '../../../components/Login';

export default createBoard({
    name: 'LoginPage',
    Board: () => <LoginPage />,
    environmentProps: {
        canvasWidth: 411,
        canvasHeight: 404
    }
});
