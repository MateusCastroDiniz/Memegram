// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SendIcon from '@mui/icons-material/Send';
// import MapsUgcIcon from '@mui/icons-material/MapsUgc';



// export default function Icons(){
//     return(
//         <>
//     <Stack direction='row' spacing={1}>
//         <IconButton aria-label="Like">
//             <FavoriteBorderIcon />
//         </IconButton>
//         <IconButton aria-label="Comment">
//             <MapsUgcIcon/>
//         </IconButton>
//         <IconButton aria-label="send">
//             <SendIcon/>
//         </IconButton>
//     </Stack>
//     </>)
// }

// Importe os componentes corretamente
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

function Icons() {
    const [likeCount, setLikeCount] = useState(0);
  
    const incrementLikeCount = () => {
      return setLikeCount(likeCount + 1);
    };

    const [commentCount, setCommentCount] = useState(0);
  
    const incrementComents = () => {
      return setCommentCount(commentCount + 1);
    };

    const [ShareCount, setShareCount] = useState(0);
  
    const incrementShares = () => {
      return setShareCount(ShareCount + 1);
    };
  
    return (
      <div className='d-flex flex-column'>
        <Stack className='flex-row align-items-center' direction='row' spacing={1}>
          <p>{likeCount}</p>
          <IconButton aria-label="like" onClick={incrementLikeCount}>
            <FavoriteBorderIcon />
          </IconButton>
          <p>{commentCount}</p>
          <IconButton aria-label="Comment" onClick={incrementComents}>
            <MapsUgcIcon />
          </IconButton>
          <p>{ShareCount}</p>
          <IconButton aria-label="send" onClick={incrementShares}>
            <SendIcon />
          </IconButton>
        </Stack>
      </div>
    );
  }
  

export default Icons;
