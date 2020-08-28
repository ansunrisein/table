import styled from 'styled-components'


export const TableContainer = styled.div`
  & tr > td {
    border: 0 !important;
  }
    
    
  & td {
    padding: 0 !important;
  }
    
    
  & th {
    padding: 0 !important;
    background: #EBF5F8 !important;
    width: 14.2%;
  }
    
    
  & tr:nth-child(2n) {
    background: #EBF5F866 !important;
  }
  
  
  // bad code :(
    
  & tr:nth-child(${props => props.hovered && props.hovered.i + 1}) td:nth-child(${props => props.hovered && props.hovered.j + 1}) {
    background: #e0e6eb !important;
  }
  
  & th:nth-child(${props => props.hovered && props.hovered.j + 1}) {
    background: #e0e6eb !important;
  }
  
  & th:nth-child(${props => props.hovered && props.hovered.j + 1}) span {
    font-weight: 900;
  }
  
`