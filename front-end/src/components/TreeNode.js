
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