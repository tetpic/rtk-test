import TableBodyItem from "./TableBodyItem"
import { RowItem } from "./tableTypes"


export default function TableRow(props: {cols: string[], items: RowItem[]}) {
    let {items, cols} = props
    
    //TODO: сделать проверку если вдруг поле было пропущено
       
    return <>
        {Object.keys(items).map((el:string, index: number)=>{
            
            if (index < cols.length && cols.indexOf(el)>=0) {
                return (<>
                <TableBodyItem el={items[el]} style={{width: `${100/props.cols.length}%`}}/>
            </>)
            }
        })}
    </>
  
}