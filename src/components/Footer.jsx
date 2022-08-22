 import React from 'react' ;
 import { MDBBtn,MDBIcon } from 'mdb-react-ui-kit';
 import '../css/footer.css'

 export const Footer=()=>{
    return (
      <div className="item-4">
    
     <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
      <MDBIcon className='me-2' fab icon='twitter' /> Twitter
    </MDBBtn>
     <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon  className='me-2' fab icon='facebook-f' />Facebook
      </MDBBtn>
      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon className='me-2' fab icon='instagram' />Instagram
      </MDBBtn>
      <MDBBtn  className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/brandy-atieno'>
        <MDBIcon className='me-2' fab icon='github' />Github
      </MDBBtn>
      
     
    


     
      </div>  
    );
};
export default Footer;