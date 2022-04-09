import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

 
const pages = ['Find Schools','Admissions','About', 'Blog'];

const Pages = () => {
  return (
    <Box 
     sx={{ flexGrow: 1, display: { md: 'flex' } }}
     >  
        {pages.map((page) => (
        <Button style={{textTransform: 'none'}}  href = {`${page}`} underline= "none" sx={{ mx: 1.3 , pt : 1.8}}>
           <a> {page}</a>
        </Button>
        
        ))}
        {/* < BasicPopover/> see more in dropdown style navbar */}
    </Box> 
    ) 
}

const Page = () => {
   return (
     <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>  

         <Button href = "/schools/fresh"> search </Button>
         <Button href = "/user/profile"> profile </Button>
         <Button href = "/schools/fresh"> about </Button>
         <Button href = "/schools/fresh"> blog </Button>
     </Box> 
     ) 
 }

export default Pages
