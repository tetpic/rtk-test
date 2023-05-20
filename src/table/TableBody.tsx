import s from "./table.module.scss"
import TableBodyItem from "./TableBodyItem"
import TableRow from "./TableRow"
import { RowItem } from "./tableTypes"



export default function TableBody(props: {cols: string[], items: RowItem[], pageSize: number, pageNumber: number} ) {
    let {pageSize, pageNumber} = props 
    
    
    return <>
        {props.items.map((el: any, index: number)=>{            
            let state = el.state  
            if(index+1>=(pageSize*(pageNumber-1))+1 && index+1<=pageSize*pageNumber)
            return (
                <div className={s.table__row + ` ${state?s[state]:''}`}>
                    <TableRow items={el} cols={props.cols}  />
                </div>
            )
        })}
    </>
 
}