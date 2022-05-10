import { Close, Replay, Start, Favorite, Star, Light, Thunderstorm, FlashAuto, FlashOn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import './SwipeButtons.css';
// import FavoriteIcon from '@mui/icons-material/Favorite';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat'>
            <Replay fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__close'>
            <Close fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
            <Star fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__favorite'>
            <Favorite fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <FlashOn fontSize="large" />
        </IconButton>
    </div>
  )
}

export default SwipeButtons