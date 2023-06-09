import { useState, useEffect } from "react"
import { Box, Typography} from "@mui/material"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Videos } from "./"
import { useParams } from "react-router"

function SearchFeed() {

  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>

      <Typography variant="h4" fontWeight="bold" mb={2} sx={{mt: 1.5, color: "#fff"}}>
        Search results for <span style={{color: '#f31503'}}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos}/>

    </Box>
  )
}

export default SearchFeed