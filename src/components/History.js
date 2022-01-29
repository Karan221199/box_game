import { useEffect } from "react";

function History()
{
    const getData = localStorage.getItem('GridHistory');
    useEffect(()=>{
        const arr = getData.split(',');
        const container = document.getElementById("container");
        for(var i=0;i<arr.length;i++)
        {
            let cell = document.createElement("p");
            cell.innerHTML="Step"+(i+1)+" : "+arr[i];
            container.appendChild(cell);
        }
    },[])
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-4 offset-4">
                    <div className="card">
                        <div className="card-body" id="container" style={{backgroundColor: "bisque"}}>
                            <h3 style={{textAlign:"center"}}>History</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;