import { Node, NodeProps } from 'reactflow';

type NodeData = {
  state: string;
};

type CustomNode = Node<NodeData>;

export default function CustomFlow({ data }: NodeProps<NodeData>) {    
  return <div>{data.state}</div>;
}