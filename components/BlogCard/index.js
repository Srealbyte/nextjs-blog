import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";


function BlogCard({ title, post, index }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`blog-${index}`}
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
