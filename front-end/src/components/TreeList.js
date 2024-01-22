
import React, { useState } from "react";

const TreeList = ({ nodes }) => {
    const [expanded, setExpanded] = useState(false);
    const handleNodeClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <>
            {nodes.map((node, index) => (
                <TreeNode key = {index} label={node.label} onClick={handleNodeClick}>
                    {expanded && <TreeList nodes={node.children} />}
                </TreeNode>
            ))}
        </>
    )
};

export default TreeList;