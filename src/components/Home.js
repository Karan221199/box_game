import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [row,setRow] = useState(0);
    const [col,setCol] = useState(0);
    const navigate = useNavigate();
    const handleSubmit = () => {
        localStorage.clear();
        navigate('/box-game', { state: { x: row, y: col } });
    }

    return(
        <div className="container" style={{marginTop:"50px"}}>
            <div className="row">
                <div className="col-12 col-md-4 offset-md-4">
                    <div className='card'>
                        <div className='card-body'>
                            <h3 style={{textAlign:"center"}}>Input Form</h3>
                            <div className='mt-3'>
                                <input type="number" placeholder="Enter Number of rows" className="form-control" onChange={(e)=>setRow(e.target.value)}/>
                            </div>
                            <div className='mt-3'>
                                <input type="number" placeholder="Enter Number of columns" className="form-control" onChange={(e)=>setCol(e.target.value)}/>
                            </div>
                            <div className='mt-3' style={{textAlign:"center"}}>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}
export default Home;