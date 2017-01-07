// Imports
import { Meteor } from 'meteor/meteor';

// App Imports
import ChatRooms from './collection';

// All chat rooms
Meteor.publish('public-chat-rooms-publication', () => {
    return ChatRooms.find({ isPubic: true }, { sort: { createdAt: -1 } });
});