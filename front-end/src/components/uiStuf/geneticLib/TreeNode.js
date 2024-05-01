
/**
 * TreeNode component
 * 
 * This component represents a single node in the TreeList structure. It displays a label and handles 
 * click events to trigger expansion/collapse behavior in its parent TreeList.
 *
 * @props {string} label - The text to be displayed for the node.
 * @props {array} children (optional) - An array of objects representing child nodes for a nested structure.
 * @props {function} onClick - A function to be called when the user clicks the node.
 * 
 * @returns {jsx} A JSX element representing a single node in the tree structure.
 */
const TreeNode = ({ label, children, onClick}) =>{
    return (
        <>
            <div onClick = {onClick}>
                {label}
            </div>
            {children}
        </>
    );
};

export default TreeNode;