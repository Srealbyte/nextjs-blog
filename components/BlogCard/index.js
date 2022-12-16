import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

// Used Acccordian from Material MUI https://mui.com/material-ui/react-app-bar/ 
function BlogCard({ title, post, index }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={`blog-${index}`}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{post}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default BlogCard;
