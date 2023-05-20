import { checkItemType, ItemType } from "../helpers/checkItemType"
import s from "./table.module.scss"

export default function TableBodyItem(props: any ) { 

  
    const itemType = checkItemType(props.el) as ItemType
    
   

    const item = () => {
        switch (itemType) {
            case ItemType.boolean: 
               return props.el?<>&#10003;</>:<>&#9744;</>
            case ItemType.link:
                return <a href={props.el}>{props.el}</a>
            case ItemType.date:
                return <>{new Date(props.el).toLocaleDateString('en-CA')}</>
            case ItemType.array: 
                return <>
                <ul>
                    {props.el.map((a: any)=>{
                       return <li>{a.toString()}</li>
                    })}
                </ul>
                </>
            case ItemType.string:
                return <>
                    {props.el}
                </>
            case ItemType.object:
                return <>
                    {Object.keys(props.el).map(e=> {
                        return props.el[e]
                    })}
                </>
        }
    }
    
    
    return (
        <div key={props.id + (~~Math.random()*1000)} className={s.table__item} style={props.style} >
           {item()}
        </div>
    )
}