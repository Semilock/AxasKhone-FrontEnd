export default (compareNotification = notif => {
  switch (notif.type) {
    case 'comment':
      return {
        type: notif.type,
        avatar: `http://${notif.sender.profile_picture}`,
        senderName: notif.sender.fullname,
        sender: notif.sender,
        post: notif.post
      };

    case 'like':
      return {
        type: notif.type,
        avatar: `http://${notif.sender.profile_picture}`,
        senderName: notif.sender.fullname,
        sender: notif.sender,
        post: notif.post
      };

    case 'follow':
      if (notif.you === true) {
        return {
          type: notif.type,
          avatar: `http://${notif.sender.profile_picture}`,
          sender: notif.sender,
          person: 'شما'
        };
      } else {
        return {
          type: notif.type,
          avatar: `http://${notif.sender.profile_picture}`,
          sender: notif.sender,
          person: notif.object.fullname
        };
      }

    // case 'follow_request':
    //   break;

    // case 'accept_follow_request':
    //   break;

    default:
      return { ...notif, avatar: notif.sender.profile_picture };
  }
});
