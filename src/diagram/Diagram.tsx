import { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  DefaultEdgeOptions,
  NodeTypes,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from 'reactflow';
import { getFlow } from '../helpers/fetching';
import 'reactflow/dist/style.css';

import CustomFlow from './CustomFlow';

const initialNodes: Node[] = [
  { id: '1', data: { label: 'Node 1', state: 'warning' }, type: 'custom', position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2',  state: 'warning' }, position: { x: 300, y: 100 } },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const nodeTypes: NodeTypes = {
  custom: CustomFlow,
};

export default function Diagram() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

//   useEffect(()=>{
//     getFlow().then(res=>{
//         setNodes(res.nodes)
//         setEdges(res.edges)
//     })
//   })

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
//   const onEdgesChange: OnEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     [setEdges]
//   );
//   const onConnect: OnConnect = useCallback(
//     (connection) => setEdges((eds) => addEdge(connection, eds)),
//     [setEdges]
//   );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}     
      fitView
      fitViewOptions={fitViewOptions}
      defaultEdgeOptions={defaultEdgeOptions}
      nodeTypes={nodeTypes}      
      />
    </div>
  );
}