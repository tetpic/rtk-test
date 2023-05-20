import TableBody from "./TableBody";
import TableTitle from "./TableTitle";
import { RowItem } from "./tableTypes";
import s from "./table.module.scss"

export default function Table (props: {cols: string[], items: RowItem[], pageSize: number, pageNumber: number}) {
    
    return (
        <div className={s.table}>
            <TableTitle {...props}/>
            <TableBody  {...props}/>  
        </div>
    )
}