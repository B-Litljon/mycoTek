import React, { useState } from "react";
import TreeNode from "./TreeNode";

/**
 * TreeList component
 * 
 * This component represents a collapsible tree structure. It manages the expanded state of its nodes 
 * and renders child nodes recursively.
 *
 * @props {array} nodes - An array of objects representing the nodes in the tree structure. 
 *                         Each object should have properties like 'label' (text displayed for the node) 
 *                         and optionally 'children' (another array of nodes for nested structures).
 * 
 * @returns {jsx} A JSX element representing the collapsible tree structure.
 */
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