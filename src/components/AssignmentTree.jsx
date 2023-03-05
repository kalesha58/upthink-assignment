import React, { useState } from "react";
import assignments from "./assignments.json";
import "./AssignmentTree.css"

function TreeNode({ node, level, onNodeClick, onNodeToggle }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleNodeClick = () => {
    if (node.type === "assignment") {
      onNodeClick(node);
    }
  };

  const handleNodeToggle = () => {
    setCollapsed(!collapsed);
    onNodeToggle(node, !collapsed);
  };

  return (
    <div style={{ paddingLeft: level * 16 }}>
      {node.type === "assignment" ? (
        <div onClick={handleNodeClick}>
          {node.name} - {node.dueDate}
        </div>
      ) : (
        <div onClick={handleNodeToggle}>
          {collapsed ? "+" : "-"} {node.name}
        </div>
      )}
      {!collapsed &&
        node.children &&
        node.children.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            level={level + 1}
            onNodeClick={onNodeClick}
            onNodeToggle={onNodeToggle}
          />
        ))}
    </div>
  );
}

function Tree({ data, onNodeClick }) {
  const [collapsedNodes, setCollapsedNodes] = useState([]);

  const handleNodeToggle = (node, collapsed) => {
    if (collapsed) {
      setCollapsedNodes((prev) => [...prev, node.id]);
    } else {
      setCollapsedNodes((prev) => prev.filter((id) => id !== node.id));
    }
  };

  return (
    <div>
      {data.map((rootNode) => (
        <TreeNode
          key={rootNode.id}
          node={rootNode}
          level={0}
          onNodeClick={onNodeClick}
          onNodeToggle={handleNodeToggle}
          collapsed={collapsedNodes.includes(rootNode.id)}
        />
      ))}
    </div>
  );
}

function AssignmentTree() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleNodeClick = (node) => {
    setSelectedAssignment(node);
  };

  return (
    <div>
      <h1>Assignment Tree</h1>
      {selectedAssignment ? (
        <div>
          <h2>{selectedAssignment.name}</h2>
          <p>{selectedAssignment.description}</p>
        </div>
      ) : (
        <Tree data={assignments} onNodeClick={handleNodeClick} />
      )}
    </div>
  );
}

export default AssignmentTree;
