import { Background, Handle, Position } from "reactflow";
import s from "./diagram.module.scss"


export default function CustomNode({ data }: any) {  
    return (<>
     <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555' }}
      />
    <div className={(data.state?s[data.state]:'') + ' ' + s.node}>{data.label}</div>
    <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555' }}
      />
    </>)
}