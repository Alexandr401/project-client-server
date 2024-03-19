import "./RightBar.css"

interface visibleProps {
    visible: boolean;
}


function RightBar({ visible }: visibleProps) {

    return(
        <div className={`block-right-bar ${!visible ? 'hidden' : ''}`}>
            <div className="block-right-bar-content">
            <div className="block-navbar">
                <p>Category</p>
                <ul>
                    <li>chat1</li>
                    <li>chat2</li>
                    <li>chat3</li>
                    <li>chat1</li>
                    <li>chat1</li>
                    <li>chat1</li>
                    <li>chat1</li>
                    <li>chat1</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default RightBar