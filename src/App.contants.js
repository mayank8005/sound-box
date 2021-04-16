export const BACKGROUND_IMAGE_URL = `${process.env.PUBLIC_URL}/audience.jpg`;

// sound array will manage all the sound available in our application
// Order of array will change order in which sound boxes are displayed in our application
// If sound file does not exist we will console log FileNotFound error
export const SOUNDS = [
    {soundName: 'Boom', soundKey: 'A', fileName: 'boom.wav'},
    {soundName: 'Hihat', soundKey: 'S', fileName: 'hihat.wav'},
    {soundName: 'Openhat', soundKey: 'D', fileName: 'openhat.wav'},
    {soundName: 'Snare', soundKey: 'F', fileName: 'snare.wav'},
    {soundName: 'Tom', soundKey: 'G', fileName: 'tom.wav'},
    {soundName: 'Clap', soundKey: 'H', fileName: 'clap.wav'},
    {soundName: 'Kick', soundKey: 'J', fileName: 'kick.wav'},
    {soundName: 'Ride', soundKey: 'K', fileName: 'ride.wav'},
    {soundName: 'Tink', soundKey: 'L', fileName: 'tink.wav'},
];