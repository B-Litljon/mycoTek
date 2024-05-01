
/**
 * ScrollingWheel component
 * 
 * This component renders a scrollable container that displays a collection of TreeList components. 
 * It's useful for visualizing hierarchical data structures.
 *
 * @props {array} items - An array of objects representing the data to be displayed in the TreeList components. 
 *                         Each object should have a structure suitable for the TreeList component. 
 *
 * @returns {jsx} A JSX element representing the scrollable container with the rendered TreeList components.
 */
const ScrollingWheel = ({ items }) => {
    return (
        <div style = {{ overflowY: 'scroll', height: '300px'}}>
            {items.map((item, index) => (
                <TreeList key={index} nodes={item}/>
            ))}
        </div>
    );
};

export default ScrollingWheel;