import s from "./table.module.scss"

export default function TableTitle(props: {cols: string[]} ) {
    
    return (
        <div className={s.table__row}>
            {props.cols.map(el=>{
                return (
                    <div className={s.table__item} style={{width: `${100/props.cols.length}%`}}>{el}</div>
                )
            })}
        </div>
    )
}