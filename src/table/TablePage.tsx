import { useEffect, useState } from "react"
import { getTable } from "../helpers/fetching"
import s from "./table.module.scss"
import Table from "./Table"

export default function TablePage() {
    let [data, setData] = useState<any>('fetching')
    let [pageNumber, setPage] = useState<number>(1)
    const pageSize = 5
    
    
    
    useEffect(()=> {
        getTable().then(res=>{
            setData(res)
        })
    }, [])
    
    if(data != 'fetching' && !data.error) {
        let pages = data.items.length/pageSize
        pages = pages > ~~pages?~~pages+1:~~pages
        
        let nextPage = ()=> {
            
            if(pageNumber < pages) {            
                setPage(pageNumber + 1)
            }
        }

        let prevPage = () => {
            if(pageNumber > 1) {
                setPage(pageNumber - 1)
            }        
        }

        let paginationItemsArray = []

        for(let i = 1; i <= pages; i++  ) {
            paginationItemsArray.push(i)  
        }
    

        return (<>           
            <Table {...data} pageSize={pageSize} pageNumber={pageNumber}/>
            <div className={s.pagination}>
                <button onClick={prevPage}>Назад</button>{}
                    {paginationItemsArray.map((el)=> {
                        return <p className={el==pageNumber?s.activePaginationItem: s.paginationItem} onClick={()=>setPage(el)}>{el}</p>
                    })}
                <button onClick={nextPage}>Дальше</button>
            </div>
        </>
        )
    } 
    else if(data.error){
        return (
            <p>{data.error}</p>
        )
    }
    else {        
        return (
            <p>...Загрузка</p>
        )
    }
}

