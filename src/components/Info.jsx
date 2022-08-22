import React from 'react';
import { MDBBtn,MDBIcon} from 'mdb-react-ui-kit';
import  photo from '../images/b.png';
import '../css/info.css'

export const Info=()=>{
  return (
    <div className="item-1">
    <img src={photo} alt="pic"/>
    <h1>BRANDY ATIENO</h1>
    <h2>FRONT END DEVELOPER</h2>
    <div className='btns'>
    <MDBBtn  className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon className='me-2' far icon='envelope' />Email
      </MDBBtn>
      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon className='me-2' fab icon='linkedin-in' />LinkedIn
      </MDBBtn>
   </div>
    </div>  
  );
};
export default Info;