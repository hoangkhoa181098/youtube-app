import { Stack } from "@mui/material"

import { categories } from "../utils/constants"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack direction="row" sx={{ overflowY: "auto", height: { xs: "auto", md: "95%"}, flexDirection: {md: "column"}}}>
        {categories.map((item) => (
            <button className="category-btn" onClick={()=> setSelectedCategory(item.name)} style={{background: item.name === selectedCategory && "#fc1503", color: "#fff"}} key={item.name}>
                <span style={{color: item.name === selectedCategory ? "#fff" : "red", marginRight: "15px"}}>{item.icon}</span>
                <span>{item.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar