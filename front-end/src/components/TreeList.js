
import React, { useState } from "react";
import TreeNode from "./TreeNode";

const TreeList = ({ nodes }) => {
    const [expandedNodes, setExpandedNodes] = useState({});

    const handleNodeClick = (nodeIndex) => {
        
        const isExpanded = expandedNodes[nodeIndex];  
        setExpandedNodes ({
            ...expandedNodes,
            [nodeIndex]: !isExpanded  // if node is expanded, collapse it; if node is collapsed, expand it
        });
    };
    
    return (
        <>
            {nodes.map((node, index) => (
                <TreeNode 
                    key = {index} 
                    label={node.label} 
                    onClick={() => handleNodeClick(index)}
                >
                    {expandedNodes[index] && node.children && <TreeList nodes={node.children} />}
                </TreeNode>
            ))}
        </>
    )
};

export default TreeList;