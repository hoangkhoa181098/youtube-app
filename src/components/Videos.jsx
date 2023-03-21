import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => {
        return (
          <Box key={idx} sx={{width: { md: "320px", sm: "48%", xs: "100%" }}}>
            {item.id.videoId && <VideoCard video={item} /> }
            {item.id.channelId && <ChannelCard ChannelDetail={item} />}
            {item.id.playlistId && <VideoCard video={item} /> }
          </Box>
        )
      })}
    </Stack>
  );
}

export default Videos;
