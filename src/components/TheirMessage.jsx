const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    if(message?.attachments?.length > 0){
        return (
            <img src={message.attachments[0].file} alt="message-attachment" className="message-image" style={{float: 'right'}}/>
            
        )
    }

    return(
        <div className="message-row" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {isFirstMessageByUser && (
                <div className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0
                // If it is an attachment, we will return the image
                ? (
                    <img src={message.attachments[0].file} 
                        alt="message-attachment" 
                        className="message-image" 
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px'}}/>
                    
                ) :
                <div className="message" style={{ float: 'left', marginLeft: isFirstMessageByUser ? '4px' : '48px', backgroundColor: '#CABCDC'}}>
                    {message.text}
                </div>
            }
        </div>
    );
}

export default TheirMessage;