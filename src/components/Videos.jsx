import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

import { motion } from 'framer-motion';

function Videos() {

  
  
  return (
    <div className='flex items-center justify-center container m-auto  '>
      <motion.div 
        initial={{ y:80}}
        animate={{ y:0}}
        transition={{duration:2}}
        className='w-[80%] rounded-2xl border-4 border-white -translate-y-10  m-auto'>
      
        <MediaController
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
          className='m-auto rounded-xl'
        >
          <ReactPlayer
            slot="media"
            src="https://youtu.be/Urt-0qsgfcY?si=5PvOuzNQgCzde3GG"
            controls={false}
            style={{
              width: "100%",
              height: "100%",
              "--controls": "none",
            }}
          >
          </ReactPlayer>
          <MediaControlBar className='ml-4 mb-1'>
            <MediaPlayButton className="px-2"/>
            <MediaTimeRange />
            <MediaTimeDisplay showDuration  />
            <MediaMuteButton  />
            <button type="button" className='bg-text   mx-4 px-4 cursor-pointer hover:bg-text-secondary  hover:text-md hover:scale-100 hover:underline     duration-100 rounded-sm hover:uppercase hover:font-bold'>Explore Lectures</button>
          </MediaControlBar>
        </MediaController>
      </motion.div>
    </div>
  )
}

export default Videos