import React from "react";
import "./style.css";
import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import SdbFlow from "../../components/sidebarTow/sidebarFlow";
import { ReactSortable } from "react-sortablejs";
import { TfiReload } from "react-icons/tfi";
const initialNodes = [];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactSortable
      list={nodes}
      group="shared-group-name"
      setList={setNodes}
      className="container"
    >
      <SdbFlow items={nodes} setNodes={setNodes} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />

        <Background />
      </ReactFlow>
    </ReactSortable>
  );
};

export default Flow;
