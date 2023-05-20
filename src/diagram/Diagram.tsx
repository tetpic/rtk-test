import { useState, useEffect } from 'react';
import { getFlow } from '../helpers/fetching';
import { CustomFlow } from './CustomFlow';





enum TNodeState {warning = "warning", normal= "normal", danger="danger" }

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

export type TFlow = {
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

