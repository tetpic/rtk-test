import ReactFlow, { DefaultEdgeOptions, FitViewOptions, NodeTypes } from "reactflow";
import CustomNode from "./CustomNode";
import { TFlow } from "./Diagram";
import 'reactflow/dist/style.css';

const fitViewOptions: FitViewOptions = {
    padding: 0.2,
  };
  
  const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
  };
  
  const nodeTypes: NodeTypes = {
    custom: CustomNode,
  };

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