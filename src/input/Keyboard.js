class Keyboard {
    constructor(callback) {
        this.callback = callback;
        window.onkeyup = this.keyUp.bind(this);
    }

    keyUp(e) {
        switch (e.keyCode) {
            case 39:
                this.callback(1);
                break;

            case 37:
                this.callback(-1);
                break;
        
            default:
                break;
        }
    }
}

export default Keyboard;