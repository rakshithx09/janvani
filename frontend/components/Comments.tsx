import React from 'react'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Box } from '@mui/material';

interface Props {
    setIsCommentsClicked: SetIsCommentsClicked;
}

type SetIsCommentsClicked = (newValue: boolean) => void;
const Comments: React.FC<Props> = ({ setIsCommentsClicked }) => {
    return (
        <>
            <div className='flex gap-4'>
                <KeyboardReturnIcon className="cursor-pointer" onClick={() => { setIsCommentsClicked(false) }}></KeyboardReturnIcon>
                Comments
            </div>
            <Box sx={{
                width:'100%',
                border:'2px solid black',
                height:'250px',
                margin:'0.5rem 0'
            }}></Box>
            <Box sx={{
                width:'100%',
                border:'2px solid black',/* 
                position:'absolute',
                bottom:'0px' */
            }}>comment</Box>


        </>
    )
}

export default Comments