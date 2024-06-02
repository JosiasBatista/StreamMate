class Business {
  constructor({ room, media, view, socketBuilder, peerBuilder }) {
    this.room = room;
    this.media = media;
    this.view = view;

    this.socketBuilder = socketBuilder
    this.peerBuilder = peerBuilder

    this.socket = {};
    this.currentStream = {};
    this.currentPeer = {};
  }

  static initialize(deps) {
    const instance = new Business(deps);
    return instance._init();
  }

  async _init() {
    this.currentStream = await this.media.getCamera();
    this.socket = this.socketBuilder
      .setOnUserConnected(this.onUserConnected())
      .setOnUserDisconnected(this.onUserDisconnected())
      .build();
    //this.socket.emit('join-room', this.room, 'teste01');
    this.currentPeer = this.peerBuilder
      .

    this.addVideoStream('test01')
  }

  addVideoStream(userId, stream = this.currentStream) {
    const isCurrentId = false;
    
    this.view.renderVideo({
      userId,
      muted: false,
      stream,
      isCurrentId
    })
  }

  onUserConnected = function() {
    return userId => {
      console.log('user connected', userId)
    }
  }

  onUserDisconnected = function () {
    return userId => {
      console.log('user disconnected', userId)
    }
  }

  onPeerError = function () {
    return error => {
      console.error('error', error)
    }
  }
}