const Notification = ({ notification }) => {
  if (notification) {
    return (
      <div>
        {notification}
      </div>
    )
  } else {
    return <></>
  }
}

export default Notification