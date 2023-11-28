/*start friends page design */
     // Sample data for friends and all users
 const friendRequests = ['Friend Request 1', 'Friend Request 2', 'Friend Request 3'];
 const friends = ['Friend 1', 'Friend 2', 'Friend 3'];
 const allUsers = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
 
 // Function to render friend requests
 function renderFriendRequests() {
   const friendRequestList = document.getElementById('friend-request-list');
   friendRequestList.innerHTML = '';
 
   friendRequests.forEach(friendRequest => {
     const listItem = document.createElement('li');
     listItem.textContent = friendRequest;
 
     const acceptButton = document.createElement('button');
     acceptButton.textContent = 'Accept';
     acceptButton.addEventListener('click', () => acceptFriendRequest(friendRequest));
 
     const rejectButton = document.createElement('button');
     rejectButton.textContent = 'Reject';
     rejectButton.addEventListener('click', () => rejectFriendRequest(friendRequest));
 
     listItem.appendChild(acceptButton);
     listItem.appendChild(rejectButton);
 
     friendRequestList.appendChild(listItem);
   });
 }
 
 // Function to render friends
 function renderFriends() {
   const friendsList = document.getElementById('friends-list');
   friendsList.innerHTML = '';
 
   friends.forEach(friend => {
     const listItem = document.createElement('li');
     listItem.textContent = friend;
     friendsList.appendChild(listItem);
   });
 }
 
 // Function to render all users
 function renderAllUsers() {
   const allUsersList = document.getElementById('all-users-list');
   allUsersList.innerHTML = '';
 
   allUsers.forEach(user => {
     if (!friends.includes(user) && !friendRequests.includes(user)) {
       const listItem = document.createElement('li');
       listItem.textContent = user;
 
       const addButton = document.createElement('button');
       addButton.textContent = 'Add';
       addButton.addEventListener('click', () => addFriend(user));
 
       listItem.appendChild(addButton);
 
       allUsersList.appendChild(listItem);
     }
   });
 }
 
 // Function to accept a friend request
 function acceptFriendRequest(friendRequest) {
   const index = friendRequests.indexOf(friendRequest);
   if (index !== -1) {
     friendRequests.splice(index, 1);
     friends.push(friendRequest); // Move the friend to the friends list
     renderFriendRequests();
     renderFriends();
     renderAllUsers();
   }
 }
 
 // Function to reject a friend request
 function rejectFriendRequest(friendRequest) {
   const index = friendRequests.indexOf(friendRequest);
   if (index !== -1) {
     friendRequests.splice(index, 1);
     renderFriendRequests();
     renderAllUsers();
     renderFriends();
   }
 }
 
 // Function to add a friend
 function addFriend(user) {
   friends.push(user);
   renderFriends();
   renderAllUsers();
 }
 
 // Initial render
 renderFriendRequests();
 renderFriends();
 renderAllUsers();
/*end friends page design */
