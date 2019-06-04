import Keyboard from './Keyboard';

class InputManager {
    constructor(callback) {
        this.handlers = [
            new Keyboard(callback)
        ];
    }
}

export default InputManager;