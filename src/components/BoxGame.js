import { useEffect,useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import '../assets/css/BoxGame.css'
function BoxGame()
{
    const grid = localStorage.getItem('GridHistory');
    const [history,setHistory] = useState([]);
    const navigate = useNavigate();
    if(grid=="" || grid==null)
    {
        history.push('0:0');
    }
    else{
        let array  = grid.split(',');
        history.push(array);
    }
    const {state} = useLocation();
    const { x, y } = state; 

    useEffect(() => {
        const container = document.getElementById("container");
        const rows = parseInt(x);
        const cols = parseInt(y);
        function makeRows(rows1, cols1) {
            container.style.setProperty('--grid-rows', rows1);
            container.style.setProperty('--grid-cols', cols1);
            for(var c=0;c<rows1;c++)
            {
                for(var d=0;d<cols1;d++)
                {
                    let cell = document.createElement("div");
                    container.appendChild(cell).className = "grid-item";
                    var itemid = "item-"+c+":"+d;
                    container.appendChild(cell).id = itemid;
                   
                }
            }
        };
    
        makeRows(rows, cols);

        if(grid=="" || grid==null)
        {
            document.getElementById("item-0:0").classList.add('green');
        }
        else{
            let array  = grid.split(',');
            let lastIndex =array[(array.length)-1];
            document.getElementById("item-"+lastIndex).classList.add('green');
        }
        

        function handleKey(e) {
           if(e.keyCode == 38)
           {
               var obj =  document.querySelector('.green');
               var id = obj.id;
               var arr = id.split('-');
               var arr1 = arr[1].split(':');
               var pos1= parseInt(arr1[0]); 
               var pos2= parseInt(arr1[1]);
               if((pos1-1)>=0)
               {
                pos1 = pos1-1;
                var key = pos1+":"+pos2;
                var id1 = "item-"+key;
                document.getElementById(id).classList.remove('green');
                document.getElementById(id1).classList.add('green');
                history.push(key);
               }
               else{
                alert("This operation can't be performed");
               }
           }
           else if(e.keyCode == 40)
           {
                var obj =  document.querySelector('.green');
                var id = obj.id;
                var arr = id.split('-');
                var arr1 = arr[1].split(':');
                var pos1= parseInt(arr1[0]); 
                var pos2= parseInt(arr1[1]);
                if((pos1+1)<=(rows-1))
                {
                    pos1 = pos1+1;
                    var key = pos1+":"+pos2;
                    var id1 = "item-"+key;
                    document.getElementById(id).classList.remove('green');
                    document.getElementById(id1).classList.add('green');
                    history.push(key);
                }
                else{
                    alert("This operation can't be performed");
                }
           }
           else if(e.keyCode == 37)
           {
                var obj =  document.querySelector('.green');
                var obj =  document.querySelector('.green');
                var id = obj.id;
                var arr = id.split('-');
                var arr1 = arr[1].split(':');
                var pos1= parseInt(arr1[0]); 
                var pos2= parseInt(arr1[1]);
                if((pos2-1)>=0)
                {
                 pos2 = pos2-1;
                 var key = pos1+":"+pos2;
                 var id1 = "item-"+key;
                 document.getElementById(id).classList.remove('green');
                 document.getElementById(id1).classList.add('green');
                 history.push(key);
                }
                else{
                 alert("This operation can't be performed");
                }
           }
           else if(e.keyCode == 39)
           {
                var obj =  document.querySelector('.green');
                var id = obj.id;
                var arr = id.split('-');
                var arr1 = arr[1].split(':');
                var pos1= parseInt(arr1[0]); 
                var pos2= parseInt(arr1[1]);
                if((pos2+1)<=(cols-1))
                {
                pos2 = pos2+1;
                var key = pos1+":"+pos2;
                var id1 = "item-"+key;
                document.getElementById(id).classList.remove('green');
                document.getElementById(id1).classList.add('green');
                history.push(key);
                }
                else{
                alert("This operation can't be performed");
                }
           }
           localStorage.setItem('GridHistory',history);
        }
        window.addEventListener("keydown", handleKey);
    },[]);

    const showHistory = () => {
        navigate('/history');
    }
    
    return(
        <div className="container mt-5" style={{width: "500px"}}>
            <div className='row'>
                <div className='col-12' style={{textAlign:"center"}}>
                    <h1>Play Box Game!!</h1>
                </div>
            </div>
            <div id="container" className='mt-3'>

            </div>
            <div className='row mt-3'>
                <div className='col-12' style={{textAlign:"center"}}>
                    <button className='btn btn-primary' type='button' onClick={showHistory}>Show History</button>
                </div>
            </div>
        </div>  
    );
}
export default BoxGame;