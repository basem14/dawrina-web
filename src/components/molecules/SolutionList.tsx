import React from "react";
// react-bootstrap
import {
    ListGroup
} from "react-bootstrap";
// import styled from "styled-components";
import styled from "styled-components";
// atoms
import Typography from "../atoms/Typography";

type SolutionListProps = {
    solutions: String[];
}

const StyledSolutionList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: disc;
`;

const StyledSolutionItem = styled.li`
    margin: 0;    
    padding-bottom: 3px;
    padding-top: 3px;

    //md
    @media (max-width: 1212px) {
        font-size: 17px !important;
    }
   
    @media (max-width: 991px) {
        font-size: 15px !important;
    }
  
    //sm
    @media (max-width: 575px) {
        font-size: 15px !important;
    }

`;

const StyledSolutionListparagraph = styled(Typography)`
    color: #173039;
`;



export default function SolutionList({ solutions }: SolutionListProps) {

    return (
      <StyledSolutionList>
        {solutions.map((solution, index) => (
        <StyledSolutionItem key={index}>
           <StyledSolutionListparagraph
            component="p"
            variant="p"
           >
            {solution}
           </StyledSolutionListparagraph>
        </StyledSolutionItem>
        ))}

      </StyledSolutionList>
    );
}