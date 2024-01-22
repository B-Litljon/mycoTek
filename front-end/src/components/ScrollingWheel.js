
const ScrollingWheel = ({ items }) => {
    return (
        <div style = {{ overflowY: 'scroll', height: '300px'}}>
            {items.map((item, index) => (
                <TreeList key={index} nodes={items}/>
            ))}
        </div>
    );
};

export default ScrollingWheel;