import { useState, useEffect } from 'react';
import ReactFlow, {  FitViewOptions,DefaultEdgeOptions,NodeTypes} from 'reactflow';
import { getFlow } from '../helpers/fetching';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';



const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

export enum TNodeState {warning = "warning", normal= "normal", danger="danger" }

type TNode = {
	id: number;
	title: string;
	state: TNodeState;
	pos: { x: number; y: number; }
} 

type TEdge = {
	from: number;
	to: number;
	width: number;
} 

type TFlow = {
	nodes: TNode [];
    edges: TEdge [];
}; 

export default function Diagram() {
    const [flow, setFlow] = useState<TFlow>();

    useEffect(()=>{
        getFlow().then(res=>{
          setFlow(res)         
        })
    }, [])

    if(flow) {
        return (
            <CustomFlow data={flow} onChange={(flow:TFlow)=>{setFlow(flow)}}/>
            );
    } else {
        return <>
        ...Загрузка
        </>
    }
}

export function CustomFlow(props:{data: TFlow, onChange: any}) {

    let {data, onChange} = props

  


    let nodesForFlow = data?.nodes.map((el: any)=> {
        return {
            id: el.id.toString(),
            position: el.pos,
            data: {
               label: el.title,
               state: el.state           
            },
            type: 'custom'
        }
    }) 
 

    let edgesForFlow = data?.edges.map((el: any)=> {
        return {
            id: `e${el.from + '-' + el.to}`,
            source: el.from.toString(),
            target: el.to.toString()
        }
    })

    let onNodesChange = (el:any)=>{
        if(el[0].position) {
            let position = el[0].position
            let index = data.nodes.findIndex(e=>e.id == el[0].id)            
            data.nodes[index].pos = position         
            onChange({...data})
        }
    }   


    return  (<div style={{ width: '100vw', height: 'calc(100vh - 100px)' }}>
    <ReactFlow
      nodes={nodesForFlow}
      edges={edgesForFlow}
      onNodesChange={onNodesChange}     
      fitView
      fitViewOptions={fitViewOptions}
      defaultEdgeOptions={defaultEdgeOptions}
      nodeTypes={nodeTypes}      
      />
    </div>)
}