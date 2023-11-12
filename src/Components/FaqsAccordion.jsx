import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqsAccordion = ({ name, sndName, accorDetail }) => {
    return (
        <div className="accordion-header md:flex justify-between items-top mt-10">
            <h3 className='font-bold normal-case policy-heading'>{name}<br className='max-md:hidden'></br>{sndName}</h3>
            <div className="main-accordion md:w-[70%]">
                {
                    accorDetail.map((item, ind) => {
                        const { title, detail } = item
                        return <Accordion key={ind} className='py-4'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><li className='text-[20px] text-black policy-heading hover:text-[#f50963] '>{title}</li></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <span>{detail}</span>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    })
                }
            </div>
        </div>
    )
}

export default FaqsAccordion
