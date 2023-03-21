import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({ ChannelDetail }) => {
    let link = ChannelDetail?.id?.channelId ? `/channel/${ChannelDetail?.id?.channelId}` : `/channel/${ChannelDetail?.id}`;
    return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px"}}>
        <Link to={link}>
            <CardContent
                sx={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff", alignItems: "center"}}>
                <CardMedia
                    image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={ChannelDetail?.snippet?.title}
                    sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3"}}/>
                <Typography variant="h6">
                    {ChannelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '5px'}}/>
                </Typography>
                {ChannelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
    )
}

export default ChannelCard