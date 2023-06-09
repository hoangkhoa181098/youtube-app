import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI";


function ChannelDetail() {

  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null)

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <ChannelCard ChannelDetail={channelDetail}/>
      </Box>
      <Box>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail